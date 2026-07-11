"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check, ChevronDown, Zap, Globe, Key, Database, Code, AlertCircle, FileJson } from "lucide-react";

const BASE_URL = "/api/users";

const codeSnippets = {
  fetchBasic: `const res = await fetch("/api/users");
const data = await res.json();

console.log(data.randomUser.name);
// "Eleanor Wilson"`,
  fetchParams: `const res = await fetch("/api/users?gender=MALE&country=Greece");
const data = await res.json();

console.log(data.randomUser);`,
  fetchFull: `async function getRandomUser(gender, country) {
  const params = new URLSearchParams();
  if (gender) params.set("gender", gender);
  if (country) params.set("country", country);

  const res = await fetch(\`/api/users?\${params}\`);

  if (!res.ok) {
    throw new Error(\`HTTP \${res.status}\`);
  }

  const { randomUser } = await res.json();
  return randomUser;
}

// Usage
const user = await getRandomUser("MALE", "Greece");
console.log(user.name, user.email);`,
  axiosBasic: `import axios from "axios";

const { data } = await axios.get("/api/users");

console.log(data.randomUser.name);
// "Eleanor Wilson"`,
  axiosParams: `import axios from "axios";

const { data } = await axios.get("/api/users", {
  params: { gender: "MALE", country: "Greece" },
});

console.log(data.randomUser);`,
  axiosFull: `import axios from "axios";

async function getRandomUser(gender, country) {
  const { data } = await axios.get("/api/users", {
    params: { gender, country },
  });
  return data.randomUser;
}

// Usage
const user = await getRandomUser("FEMALE", "Germany");
console.log(user.name, user.email);`,
  reactComponent: `"use client";

import { useState, useEffect } from "react";

interface RandomUser {
  name: string;
  email: string;
  username: string;
  gender: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  avatar: string;
}

export default function UserCard() {
  const [user, setUser] = useState<RandomUser | null>(null);

  useEffect(() => {
    fetch("/api/users")
      .then((r) => r.json())
      .then((d) => setUser(d.randomUser));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.location.city}, {user.location.country}</p>
    </div>
  );
}`,
  jsonResponse: `{
  "message": "Users fetched successfully",
  "status": 200,
  "randomUser": {
    "name": "Eleanor Wilson",
    "email": "eleanor.wilson@example.com",
    "username": "eleanor.wilson490",
    "gender": "FEMALE",
    "location": {
      "city": "Athens",
      "state": "Prague",
      "country": "Greece"
    },
    "avatar": "https://randomuser.me/api/portraits/women/14.jpg"
  }
}`,
  errorJson: `{
  "error": "Internal server error"
}`,
};

const responseFields = [
  { field: "message", type: "string", description: "Status message" },
  { field: "status", type: "number", description: "HTTP status code" },
  { field: "randomUser.name", type: "string", description: "Full name (first + last)" },
  { field: "randomUser.email", type: "string", description: "Generated email address" },
  { field: "randomUser.username", type: "string", description: "Unique username" },
  { field: "randomUser.gender", type: "string", description: '"MALE" or "FEMALE"' },
  { field: "randomUser.location.city", type: "string", description: "City name" },
  { field: "randomUser.location.state", type: "string", description: "State or region" },
  { field: "randomUser.location.country", type: "string", description: "Country name" },
  { field: "randomUser.avatar", type: "string", description: "Avatar image URL" },
];

export default function DocsPage() {
  return (
    <article className="bg-white min-h-screen">
      <Hero />
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <TableOfContents />
        <Introduction />
        <BaseUrl />
        <Authentication />
        <Endpoints />
        <QueryParams />
        <ResponseSchema />
        <ResponseExample />
        <UsageExamples />
        <ErrorHandling />
        <FAQ />
      </div>
    </article>
  );
}

/* ── Hero ────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-14">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
            <Zap className="w-3 h-3" />
            API Reference
          </span>
          <span className="bg-slate-100 text-slate-500 text-[11px] font-mono px-2 py-0.5 rounded">
            v1.0.0
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
          Random User API
        </h1>
        <p className="text-lg text-slate-500 max-w-xl leading-relaxed mb-6">
          Generate realistic random user data for testing, prototyping, and development.
          Free, no authentication required.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "REST", color: "bg-emerald-50 text-emerald-700 ring-emerald-600/10" },
            { label: "JSON", color: "bg-violet-50 text-violet-700 ring-violet-600/10" },
            { label: "No Auth", color: "bg-amber-50 text-amber-700 ring-amber-600/10" },
          ].map((tag) => (
            <span
              key={tag.label}
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ring-1 ring-inset ${tag.color}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Table of Contents ───────────────────────────────── */

function TableOfContents() {
  const links = [
    ["#introduction", "Introduction"],
    ["#base-url", "Base URL"],
    ["#authentication", "Authentication"],
    ["#endpoints", "Endpoints"],
    ["#query-parameters", "Query Parameters"],
    ["#response-schema", "Response Schema"],
    ["#response-example", "Response Example"],
    ["#usage", "Usage Examples"],
    ["#error-handling", "Error Handling"],
    ["#faq", "FAQ"],
  ] as const;

  return (
    <nav className="my-10 bg-slate-50 border border-slate-200 rounded-xl p-5" aria-label="Page navigation">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
        On this page
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-1.5">
        {links.map(([href, label]) => (
          <li key={href}>
            <a href={href} className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ── Introduction ────────────────────────────────────── */

function Introduction() {
  return (
    <Section id="introduction" title="Introduction" icon={<Zap className="w-4 h-4" />}>
      <p>
        The <strong className="text-slate-900">Random User API</strong> is a free RESTful
        endpoint that returns a randomly generated user object. It is built for developers who
        need realistic placeholder data for UI mockups, automated testing, and demos.
      </p>
      <p>
        Each response contains a complete user profile: name, email, username, gender, location,
        and an avatar image URL — all assembled from a curated data pool.
      </p>
    </Section>
  );
}

/* ── Base URL ────────────────────────────────────────── */

function BaseUrl() {
  return (
    <Section id="base-url" title="Base URL" icon={<Globe className="w-4 h-4" />}>
      <CodeBlock
        language="bash"
        code="https://your-domain.com/api/users"
        title="Endpoint"
      />
    </Section>
  );
}

/* ── Authentication ──────────────────────────────────── */

function Authentication() {
  return (
    <Section id="authentication" title="Authentication" icon={<Key className="w-4 h-4" />}>
      <p>
        This API is <strong className="text-slate-900">completely public</strong>. No API key,
        token, or header is required. Just send a GET request and receive a random user.
      </p>
    </Section>
  );
}

/* ── Endpoints ───────────────────────────────────────── */

function Endpoints() {
  return (
    <Section id="endpoints" title="Endpoints" icon={<Database className="w-4 h-4" />}>
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 bg-slate-50">
          <MethodBadge method="GET" />
          <code className="text-sm font-mono text-slate-700">/api/users</code>
          <span className="text-xs text-slate-400 ml-auto hidden sm:block">
            Returns a single random user
          </span>
        </div>
      </div>
    </Section>
  );
}

/* ── Query Parameters ────────────────────────────────── */

function QueryParams() {
  const params = [
    {
      name: "gender",
      type: "string",
      desc: "Filter results by gender.",
      values: ["MALE", "FEMALE"],
    },
    {
      name: "country",
      type: "string",
      desc: "Filter results by country name.",
      values: ["Greece", "Germany", "France", "United States", "..."],
    },
  ];

  return (
    <Section id="query-parameters" title="Query Parameters" icon={<Code className="w-4 h-4" />}>
      <p className="mb-4">
        All parameters are optional. When omitted, the API returns a fully random, unfiltered user.
      </p>

      <div className="space-y-3 mb-5">
        {params.map((p) => (
          <div key={p.name} className="border border-slate-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-1.5">
              <code className="text-sm font-mono font-semibold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded">
                {p.name}
              </code>
              <span className="text-[11px] font-mono text-slate-400">{p.type}</span>
              <span className="text-[10px] text-slate-400 bg-slate-100 rounded px-1.5 py-0.5 ml-auto">
                optional
              </span>
            </div>
            <p className="text-sm text-slate-500 mb-2.5">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.values.map((v) => (
                <span
                  key={v}
                  className="text-xs font-mono text-slate-600 bg-slate-100 rounded px-2 py-0.5"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
        Example Requests
      </p>
      <div className="space-y-2">
        <CodeBlock language="bash" code={`${BASE_URL}?gender=MALE`} />
        <CodeBlock language="bash" code={`${BASE_URL}?country=Greece`} />
        <CodeBlock language="bash" code={`${BASE_URL}?gender=FEMALE&country=Germany`} />
      </div>
    </Section>
  );
}

/* ── Response Schema ─────────────────────────────────── */

function ResponseSchema() {
  return (
    <Section id="response-schema" title="Response Schema" icon={<FileJson className="w-4 h-4" />}>
      <p className="mb-4">The response body has the following structure:</p>
      <div className="border border-slate-200 rounded-lg overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left px-4 py-2.5 text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Field
              </th>
              <th className="text-left px-4 py-2.5 text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Type
              </th>
              <th className="text-left px-4 py-2.5 text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {responseFields.map((f) => (
              <tr key={f.field} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-4 py-2.5">
                  <code className="text-xs font-mono text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                    {f.field}
                  </code>
                </td>
                <td className="px-4 py-2.5 text-xs font-mono text-slate-400">{f.type}</td>
                <td className="px-4 py-2.5 text-xs text-slate-500">{f.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

/* ── Response Example ────────────────────────────────── */

function ResponseExample() {
  return (
    <Section id="response-example" title="Response Example" icon={<FileJson className="w-4 h-4" />}>
      <p className="mb-4">
        A successful request returns a <StatusBadge code={200} /> response:
      </p>
      <CodeBlock language="json" code={codeSnippets.jsonResponse} title="Response Body" />
    </Section>
  );
}

/* ── Usage Examples ──────────────────────────────────── */

function UsageExamples() {
  const [tab, setTab] = useState<"fetch" | "axios" | "react">("fetch");

  const tabs = [
    { id: "fetch" as const, label: "Fetch" },
    { id: "axios" as const, label: "Axios" },
    { id: "react" as const, label: "React" },
  ];

  const sections = {
    fetch: [
      { title: "Basic Request", code: codeSnippets.fetchBasic },
      { title: "With Query Parameters", code: codeSnippets.fetchParams },
      { title: "Full Example with Error Handling", code: codeSnippets.fetchFull },
    ],
    axios: [
      { title: "Basic Request", code: codeSnippets.axiosBasic },
      { title: "With Query Parameters", code: codeSnippets.axiosParams },
      { title: "Full Example with Error Handling", code: codeSnippets.axiosFull },
    ],
    react: [{ title: "React Component", code: codeSnippets.reactComponent }],
  };

  return (
    <section id="usage" className="scroll-mt-10 my-12">
      <SectionHeading icon={<Code className="w-4 h-4" />}>Usage Examples</SectionHeading>
      <p className="text-sm text-slate-500 mb-5">
        Copy-paste ready code for the most common integration patterns.
      </p>

      <div className="border border-slate-200 rounded-xl overflow-hidden">
        <div className="flex border-b border-slate-200 bg-slate-50">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-5 py-3 text-sm font-medium transition-colors cursor-pointer border-b-2 ${
                tab === t.id
                  ? "text-blue-600 border-blue-600 bg-white"
                  : "text-slate-400 border-transparent hover:text-slate-600"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="divide-y divide-slate-100">
          {sections[tab].map((s) => (
            <div key={s.title} className="p-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                {s.title}
              </h4>
              <CodeBlock language={tab === "react" ? "tsx" : "javascript"} code={s.code} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Error Handling ──────────────────────────────────── */

function ErrorHandling() {
  return (
    <Section id="error-handling" title="Error Handling" icon={<AlertCircle className="w-4 h-4" />}>
      <p className="mb-4">
        The API uses standard HTTP status codes. On failure, the response includes an{" "}
        <code className="text-sm font-mono text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">
          error
        </code>{" "}
        field.
      </p>

      <div className="border border-slate-200 rounded-lg overflow-x-auto mb-5">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left px-4 py-2.5 text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Status
              </th>
              <th className="text-left px-4 py-2.5 text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Meaning
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="px-4 py-2.5">
                <StatusBadge code={200} />
              </td>
              <td className="px-4 py-2.5 text-xs text-slate-500">Success — user returned</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5">
                <StatusBadge code={400} />
              </td>
              <td className="px-4 py-2.5 text-xs text-slate-500">Bad request — invalid parameters</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5">
                <StatusBadge code={500} />
              </td>
              <td className="px-4 py-2.5 text-xs text-slate-500">Internal server error</td>
            </tr>
          </tbody>
        </table>
      </div>

      <CodeBlock language="json" code={codeSnippets.errorJson} title="Error Response" />
    </Section>
  );
}

/* ── FAQ ─────────────────────────────────────────────── */

function FAQ() {
  const faqs = [
    {
      q: "Is this API free?",
      a: "Yes. Completely free, no API key required.",
    },
    {
      q: "Can I use this in production?",
      a: "It is primarily designed for development, testing, and prototyping. The data is randomly generated and not real.",
    },
    {
      q: "How unique are the generated users?",
      a: "Each request produces a randomly assembled user. Usernames include a random numeric suffix, but collisions are possible across many requests.",
    },
    {
      q: "What countries are supported?",
      a: "The location pool includes cities from a wide range of countries. Use the country query parameter to filter, or omit it to get any country.",
    },
  ];

  return (
    <section id="faq" className="scroll-mt-10 my-12">
      <SectionHeading icon={<AlertCircle className="w-4 h-4" />}>FAQ</SectionHeading>
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group border border-slate-200 rounded-lg overflow-hidden"
          >
            <summary className="cursor-pointer px-5 py-4 text-sm font-medium text-slate-700 flex items-center justify-between hover:bg-slate-50 transition-colors [&::-webkit-details-marker]:hidden list-none">
              {faq.q}
              <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-3 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-5 pb-4 text-sm text-slate-500 leading-relaxed">{faq.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ── Shared Components ───────────────────────────────── */

function Section({
  id,
  title,
  icon,
  children,
}: {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-10 my-12">
      <SectionHeading icon={icon}>{title}</SectionHeading>
      <div className="text-sm text-slate-600 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function SectionHeading({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 tracking-tight mb-5 pb-3 border-b border-slate-200">
      {icon && <span className="text-blue-500">{icon}</span>}
      {children}
    </h2>
  );
}

function MethodBadge({ method }: { method: string }) {
  const colors: Record<string, string> = {
    GET: "bg-emerald-100 text-emerald-700 ring-emerald-600/20",
    POST: "bg-blue-100 text-blue-700 ring-blue-600/20",
    PUT: "bg-amber-100 text-amber-700 ring-amber-600/20",
    DELETE: "bg-red-100 text-red-700 ring-red-600/20",
  };

  return (
    <span
      className={`text-[11px] font-bold font-mono px-2 py-0.5 rounded ring-1 ring-inset ${colors[method] || colors.GET}`}
    >
      {method}
    </span>
  );
}

function StatusBadge({ code }: { code: number }) {
  const color =
    code < 300
      ? "bg-emerald-100 text-emerald-700"
      : code < 400
        ? "bg-amber-100 text-amber-700"
        : "bg-red-100 text-red-700";

  return (
    <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded ${color}`}>
      {code}
    </span>
  );
}

function CodeBlock({
  code,
  language = "javascript",
  title,
}: {
  code: string;
  language?: string;
  title?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-slate-200 overflow-hidden group">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-slate-50 border-b border-slate-200">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            {title}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-500" />
                <span className="text-emerald-600">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                Copy
              </>
            )}
          </button>
        </div>
      )}

      {!title && (
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 z-10 flex items-center gap-1 text-[11px] font-medium text-slate-400 bg-white border border-slate-200 rounded px-2 py-0.5 opacity-0 group-hover:opacity-100 hover:text-slate-600 transition-all cursor-pointer shadow-sm"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-500" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              Copy
            </>
          )}
        </button>
      )}

      <SyntaxHighlighter
        language={language}
        style={oneLight}
        customStyle={{
          margin: 0,
          padding: "1rem",
          fontSize: "13px",
          lineHeight: "1.6",
          background: "#fafbfc",
          borderRadius: 0,
        }}
        showLineNumbers={false}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

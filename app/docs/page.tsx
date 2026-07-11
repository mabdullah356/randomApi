import type { Metadata } from "next";
import DocsPage from "./DocsPage";

export const metadata: Metadata = {
  title: "Random User API — Documentation",
  description:
    "Free REST API that generates random user data with name, email, username, gender, location, and avatar. No authentication required.",
  keywords: ["random user API", "fake data API", "test data generator", "REST API", "random user generator"],
  openGraph: {
    title: "Random User API — Documentation",
    description:
      "Generate realistic random user data for testing, prototyping, and development. Free, fast, no auth.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Random User API — Documentation",
    description:
      "Generate realistic random user data for testing, prototyping, and development. Free, fast, no auth.",
  },
};

export default function Page() {
  return <DocsPage />;
}

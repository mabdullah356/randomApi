"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Copy, Check, ArrowRight, Zap, Globe, Database, Sparkles } from "lucide-react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface RandomUser {
    name: string;
    email: string;
    username: string;
    gender: string;
    location: { city: string; state: string; country: string };
    avatar: string;
}

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    photo: string;
}

export default function HeroSection() {
    const [user, setUser] = useState<RandomUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState(false);

    const [products, setProducts] = useState<Product[]>([]);
    const [productsLoading, setProductsLoading] = useState(true);
    const [productsCopied, setProductsCopied] = useState(false);

    useEffect(() => {
        fetchUser();
        fetchProducts();
    }, []);

    const fetchUser = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/api/users`);
            const data = await res.json();
            setUser(data.randomUser);
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const fetchProducts = async () => {
        setProductsLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/api/products?limit=3`);
            const data = await res.json();
            setProducts(data.products);
        } catch {
            setProducts([]);
        } finally {
            setProductsLoading(false);
        }
    };

    const copyEndpoint = () => {
        navigator.clipboard.writeText(`${BASE_URL}/api/users`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const copyProductsEndpoint = () => {
        navigator.clipboard.writeText(`${BASE_URL}/api/products?limit=3`);
        setProductsCopied(true);
        setTimeout(() => setProductsCopied(false), 2000);
    };

    return (
        <section className="relative overflow-hidden bg-white py-6">
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, #000 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            <div className="flex justify-center mb-8">
                <span className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-1.5 text-sm text-slate-600">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    Free &middot; No Authentication &middot; REST API
                </span>
            </div>

            <h1 className="text-center text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                <span className="text-slate-900">Random User Data</span>
                <br />
            </h1>

            <p className="text-center text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
                Generate realistic random user profiles with name, email, avatar,
                and location. Built for testing, prototyping, and demos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Link
                    href="/docs"
                    className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
                >
                    Read the Docs
                    <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                    onClick={copyEndpoint}
                    className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 px-5 py-3 rounded-lg text-sm font-mono hover:bg-slate-100 transition-colors cursor-pointer"
                >
                    <code>{`${BASE_URL}/api/users`}</code>
                    {copied ? (
                        <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                        <Copy className="w-4 h-4 text-slate-400" />
                    )}
                </button>
            </div>

            <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Live Preview
                    </span>
                </div>

                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200">
                        <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                                GET
                            </span>
                            <code className="text-sm font-mono text-slate-600">
                                {`${BASE_URL}/api/users`}
                            </code>
                        </div>
                        <button
                            onClick={fetchUser}
                            disabled={loading}
                            className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors cursor-pointer disabled:opacity-50"
                        >
                            {loading ? "Loading..." : "Refresh"}
                        </button>
                    </div>

                    <div className="p-5 bg-white">
                        {loading ? (
                            <div className="space-y-3 animate-pulse">
                                <div className="h-4 bg-slate-100 rounded w-1/3" />
                                <div className="h-4 bg-slate-100 rounded w-1/2" />
                                <div className="h-4 bg-slate-100 rounded w-2/5" />
                            </div>
                        ) : user ? (
                            <div className="flex items-start gap-4">
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="w-14 h-14 rounded-full ring-2 ring-slate-100"
                                />
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base font-semibold text-slate-900">
                                        {user.name}
                                    </h3>
                                    <p className="text-sm text-slate-500 truncate">
                                        {user.email}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                                            @{user.username}
                                        </span>
                                        <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                                            {user.gender}
                                        </span>
                                        <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                                            {user.location.city}, {user.location.country}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p className="text-sm text-slate-400">
                                Failed to load. Click Refresh.
                            </p>
                        )}
                    </div>

                    <JsonToggle user={user} />
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-16">
                {[
                    {
                        icon: <Zap className="w-4 h-4" />,
                        label: "Instant Response",
                        color: "text-amber-500",
                    },
                    {
                        icon: <Globe className="w-4 h-4" />,
                        label: "Global Locations",
                        color: "text-blue-500",
                    },
                    {
                        icon: <Database className="w-4 h-4" />,
                        label: "Gender & Country Filters",
                        color: "text-violet-500",
                    },
                ].map((f) => (
                    <div
                        key={f.label}
                        className="flex items-center gap-2 text-sm text-slate-500"
                    >
                        <span className={f.color}>{f.icon}</span>
                        {f.label}
                    </div>
                ))}
            </div>

            <div className="mt-24">
                <div className="flex justify-center mb-8">
                    <span className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-1.5 text-sm text-slate-600">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        Free &middot; No Authentication &middot; REST API
                    </span>
                </div>

                <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                    <span className="text-slate-900">Random Products Data</span>
                    <br />
                </h2>

                <p className="text-center text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
                    Fetch realistic random product data with name, description, price,
                    category, and photo. Built for e-commerce testing and prototyping.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <Link
                        href="/docs"
                        className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
                    >
                        Read the Docs
                        <ArrowRight className="w-4 h-4" />
                    </Link>

                    <button
                        onClick={copyProductsEndpoint}
                        className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 px-5 py-3 rounded-lg text-sm font-mono hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                        <code>{`${BASE_URL}/api/products?limit=3`}</code>
                        {productsCopied ? (
                            <Check className="w-4 h-4 text-emerald-500" />
                        ) : (
                            <Copy className="w-4 h-4 text-slate-400" />
                        )}
                    </button>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Live Preview
                        </span>
                    </div>

                    <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                        <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200">
                            <div className="flex items-center gap-2">
                                <span className="text-[11px] font-bold font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                                    GET
                                </span>
                                <code className="text-sm font-mono text-slate-600">
                                    {`${BASE_URL}/api/products?limit=3`}
                                </code>
                            </div>
                            <button
                                onClick={fetchProducts}
                                disabled={productsLoading}
                                className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors cursor-pointer disabled:opacity-50"
                            >
                                {productsLoading ? "Loading..." : "Refresh"}
                            </button>
                        </div>

                        <div className="p-5 bg-white">
                            {productsLoading ? (
                                <div className="space-y-3 animate-pulse">
                                    <div className="h-4 bg-slate-100 rounded w-1/3" />
                                    <div className="h-4 bg-slate-100 rounded w-1/2" />
                                    <div className="h-4 bg-slate-100 rounded w-2/5" />
                                </div>
                            ) : products.length > 0 ? (
                                <div className="space-y-4">
                                    {products.map((product) => (
                                        <div key={product.id} className="flex items-start gap-4">
                                            <img
                                                src={product.photo}
                                                alt={product.name}
                                                className="w-14 h-14 rounded-lg ring-2 ring-slate-100 object-cover"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-base font-semibold text-slate-900">
                                                    {product.name}
                                                </h3>
                                                <p className="text-sm text-slate-500 truncate">
                                                    {product.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                                                        ${product.price}
                                                    </span>
                                                    <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                                                        {product.category}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-sm text-slate-400">
                                    Failed to load. Click Refresh.
                                </p>
                            )}
                        </div>

                        <ProductsJsonToggle products={products} />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 mt-16">
                    {[
                        {
                            icon: <Zap className="w-4 h-4" />,
                            label: "Instant Response",
                            color: "text-amber-500",
                        },
                        {
                            icon: <Globe className="w-4 h-4" />,
                            label: "Multiple Categories",
                            color: "text-blue-500",
                        },
                        {
                            icon: <Database className="w-4 h-4" />,
                            label: "Limit Parameter",
                            color: "text-violet-500",
                        },
                    ].map((f) => (
                        <div
                            key={f.label}
                            className="flex items-center gap-2 text-sm text-slate-500"
                        >
                            <span className={f.color}>{f.icon}</span>
                            {f.label}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function JsonToggle({ user }: { user: RandomUser | null }) {
    const [open, setOpen] = useState(false);

    if (!user) return null;

    const json = JSON.stringify(
        {
            message: "Users fetched successfully",
            status: 200,
            randomUser: user,
        },
        null,
        2
    );

    return (
        <div className="border-t border-slate-200">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
            >
                <span className="font-mono">{"{ }"} View JSON Response</span>
                <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">
                    {open ? "Hide" : "Show"}
                </span>
            </button>
            {open && (
                <pre className="px-4 pb-4 overflow-x-auto text-[12px] font-mono leading-relaxed text-slate-600 bg-slate-50 max-h-72">
                    <code>{json}</code>
                </pre>
            )}
        </div>
    );
}

function ProductsJsonToggle({ products }: { products: Product[] }) {
    const [open, setOpen] = useState(false);

    if (products.length === 0) return null;

    const json = JSON.stringify(
        {
            message: "Products fetched successfully",
            status: 200,
            count: products.length,
            products,
        },
        null,
        2
    );

    return (
        <div className="border-t border-slate-200">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
            >
                <span className="font-mono">{"{ }"} View JSON Response</span>
                <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">
                    {open ? "Hide" : "Show"}
                </span>
            </button>
            {open && (
                <pre className="px-4 pb-4 overflow-x-auto text-[12px] font-mono leading-relaxed text-slate-600 bg-slate-50 max-h-72">
                    <code>{json}</code>
                </pre>
            )}
        </div>
    );
}

'use client'
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50  bg-black/70 backdrop-blur border-b border-neutral-800">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Brand */}
                <div className="text-sm font-semibold tracking-tight">
                    <Link href="/">C0ded</Link>
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
                    <Link href="/products" className="hover:text-white transition">Product</Link>
                    <Link href="/docs" className="hover:text-white transition">Docs</Link>
                    <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-3">
                    <button className="hidden md:inline-flex text-sm text-neutral-400 hover:text-white transition">
                        Sign in
                    </button>

                    <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-neutral-200 transition">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    )
}

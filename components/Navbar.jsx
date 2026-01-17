'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

export default function Navbar() {
    const { data: session, status } = useSession()

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-neutral-800">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                <Link
                    href="/"
                    className="text-sm font-semibold tracking-tight text-white"
                >
                    Sentryx
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
                    <Link href="/products" className="hover:text-white transition">
                        Products
                    </Link>
                    <Link href="/docs" className="hover:text-white transition">
                        Docs
                    </Link>
                    <Link href="/pricing" className="hover:text-white transition">
                        Pricing
                    </Link>

                    {session && (
                        <Link href="/dashboard" className="hover:text-white transition">
                            Dashboard
                        </Link>
                    )}
                </div>

                <div className="flex items-center gap-4 text-sm">
                    {status === 'loading' ? null : session ? (
                        <>
              <span className="hidden md:inline text-neutral-400">
                {session.user?.email}
              </span>

                            <button
                                onClick={() => signOut({ callbackUrl: '/' })}
                                className="text-neutral-400 hover:text-white transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="text-neutral-400 hover:text-white transition"
                            >
                                Sign in
                            </Link>

                            <Link
                                href="/register"
                                className="
                  bg-white text-black
                  px-4 py-2 rounded-md
                  font-medium
                  hover:bg-neutral-200
                  transition
                "
                            >
                                Sign up
                            </Link>
                        </>
                    )}
                </div>

            </div>
        </nav>
    )
}

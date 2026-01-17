'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Navbar from '../../../components/Navbar'
import React, { useEffect, useState } from 'react'

export default function Login() {
    const { status } = useSession()
    const router = useRouter()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/dashboard')
        }
    }, [status, router])

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        setError('')

        const form = e.currentTarget
        const email = (form.elements.namedItem('email') as HTMLInputElement).value
        const password = (form.elements.namedItem('password') as HTMLInputElement).value

        const res = await signIn('credentials', {
            email,
            password,
            redirect: false,
            callbackUrl: '/dashboard',
        })

        setLoading(false)

        if (!res?.ok) {
            setError('Invalid email or password')
            return
        }

        router.push('/dashboard')
    }

    if (status === 'loading') return null

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Navbar />

            <main className="flex-grow flex items-center justify-center px-6">
                <div className="w-full max-w-md bg-[#0a0a0a] border border-neutral-800 rounded-xl p-8">
                    <h1 className="text-3xl font-semibold">Sign in</h1>

                    {error && (
                        <p className="mt-4 text-sm text-red-500">
                            {error}
                        </p>
                    )}

                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                        <input
                            name="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-md"
                        />

                        <input
                            name="password"
                            type="password"
                            required
                            placeholder="••••••••"
                            className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-md"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-white text-black rounded-md font-medium hover:bg-neutral-200 transition disabled:opacity-60"
                        >
                            {loading ? 'Signing in…' : 'Sign in'}
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}

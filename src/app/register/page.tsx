'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '../../../components/Navbar'

export default function Register() {
    const router = useRouter()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        if (password.length < 6) {
            setError('Password must be at least 6 characters')
            return
        }

        setLoading(true)
        setError('')

        try {
            // 1️⃣ Register
            const registerRes = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            })

            const registerData = await registerRes.json()

            if (!registerRes.ok) {
                setError(registerData.error || 'Registration failed')
                setLoading(false)
                return
            }

            // 2️⃣ Auto login
            const loginRes = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            })

            if (!loginRes.ok) {
                setError('Account created, but login failed')
                setLoading(false)
                return
            }

            // 3️⃣ Redirect
            router.push('/dashboard')

        } catch {
            setError('Network error')
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Navbar />

            <main className="flex-grow flex items-center justify-center px-6">
                <div className="w-full max-w-md bg-[#0a0a0a] border border-neutral-800 rounded-xl p-8">
                    <h1 className="text-3xl font-semibold">
                        Create account
                    </h1>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                        <input
                            type="text"
                            required
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={loading}
                            className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-md"
                        />

                        <input
                            type="email"
                            required
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                            className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-md"
                        />

                        <input
                            type="password"
                            required
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={loading}
                            className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-md"
                        />

                        {error && (
                            <p className="text-sm text-red-500">{error}</p>
                        )}

                        <button
                            disabled={loading}
                            className="w-full py-3 bg-white text-black rounded-md font-medium disabled:opacity-50"
                        >
                            {loading ? 'Creating account…' : 'Sign up'}
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}

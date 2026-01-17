'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'

export default function SettingsPage() {
    const { data: session } = useSession()

    const [name, setName] = useState(session?.user?.name ?? '')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    async function handleSave(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)
        setSuccess(false)

        const res = await fetch('/api/user/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name }),
        })

        setLoading(false)
        if (res.ok) setSuccess(true)
    }

    return (
        <>
            <div className="mb-12">
                <h1 className="text-3xl font-semibold tracking-tight">
                    Settings
                </h1>
                <p className="mt-2 text-sm text-neutral-400">
                    Manage your account and preferences
                </p>
            </div>

            <form onSubmit={handleSave} className="max-w-xl space-y-8">
                {/* PROFILE */}
                <div className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-6">
                    <h3 className="font-medium mb-4">
                        Profile
                    </h3>

                    <div className="space-y-4">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-md text-sm"
                        />

                        <input
                            type="email"
                            value={session?.user?.email ?? ''}
                            disabled
                            className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-md text-sm text-neutral-500 cursor-not-allowed"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-2 bg-white text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-neutral-200 transition disabled:opacity-50"
                        >
                            {loading ? 'Saving...' : 'Save changes'}
                        </button>

                        {success && (
                            <p className="text-sm text-green-500">
                                Profile updated successfully
                            </p>
                        )}
                    </div>
                </div>

                {/* SECURITY */}
                <div className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-6">
                    <h3 className="font-medium mb-4">
                        Security
                    </h3>

                    <p className="text-sm text-neutral-400">
                        Password change coming soon
                    </p>
                </div>
            </form>
        </>
    )
}

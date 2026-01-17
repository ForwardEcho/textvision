'use client'

import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
    const pathname = usePathname()

    const linkClass = (path: string) =>
        pathname === path
            ? 'bg-neutral-900 text-white'
            : 'text-neutral-400 hover:text-white hover:bg-neutral-900'

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0a0a0a] border-r border-neutral-800 flex flex-col">
            <div className="h-16 px-6 flex items-center border-b border-neutral-800">
                <span className="text-sm font-semibold">Sentryx</span>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2 text-sm">
                <Link href="/dashboard" className={`block px-4 py-2 rounded-md ${linkClass('/dashboard')}`}>
                    Dashboard
                </Link>
                <Link href="/dashboard/projects" className={`block px-4 py-2 rounded-md ${linkClass('/projects')}`}>
                    Projects
                </Link>
                <Link href="/dashboard/usage" className={`block px-4 py-2 rounded-md ${linkClass('/usage')}`}>
                    Usage
                </Link>
                <Link href="/dashboard/settings" className={`block px-4 py-2 rounded-md ${linkClass('/settings')}`}>
                    Settings
                </Link>
            </nav>

            <div className="px-6 py-4 border-t border-neutral-800">
                <button
                    onClick={() => signOut({ callbackUrl: '/login' })}
                    className="text-sm text-neutral-400 hover:text-white"
                >
                    Sign out
                </button>
            </div>
        </aside>
    )
}

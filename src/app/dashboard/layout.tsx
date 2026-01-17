import Sidebar from '../../../components/Sidebar';
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'

export default async function DashboardLayout({
                                                  children,
                                              }: {
    children: React.ReactNode
}) {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/login')
    }

    return (
        <div className="min-h-screen bg-black text-white flex">
            <Sidebar />

            <main className="ml-64 flex-1 px-10 py-10">
                {children}
            </main>
        </div>
    )
}

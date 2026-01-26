import Sidebar from "../../../components/Sidebar";


export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-black text-white flex">
            {/* SIDEBAR */}
            <Sidebar />

            {/* CONTENT */}
            <main className="flex-1 px-4 sm:px-6 lg:px-10 py-8">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}

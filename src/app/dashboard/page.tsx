'use client'

import Navbar from '../../../components/Navbar'

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <main className="pt-24 max-w-7xl mx-auto px-6">
                {/* HEADER */}
                <div className="mb-12">
                    <h1 className="text-3xl font-semibold tracking-tight">
                        Dashboard
                    </h1>
                    <p className="mt-2 text-neutral-400 text-sm">
                        Manage your AI tools and monitor usage
                    </p>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        { label: 'API Requests', value: '12,430' },
                        { label: 'OCR Jobs', value: '312' },
                        { label: 'Active Projects', value: '3' },
                    ].map((item, i) => (
                        <div
                            key={i} className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-6">
                            <p className="text-xs uppercase tracking-widest text-neutral-500">
                                {item.label}
                            </p>
                            <p className="mt-3 text-2xl font-semibold">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* QUICK ACTIONS */}
                <div className="mb-12">
                    <h2 className="text-lg font-medium mb-4">
                        Quick Actions
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Run OCR',
                                desc: 'Upload image or PDF and extract text',
                            },
                            {
                                title: 'Analyze Text',
                                desc: 'Sentiment & semantic analysis',
                            },
                            {
                                title: 'Vision Classification',
                                desc: 'AI-powered visual categorization',
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition cursor-pointer">
                                <h3 className="font-medium">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm text-neutral-400">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RECENT ACTIVITY */}
                <div className="mb-20">
                    <h2 className="text-lg font-medium mb-4">
                        Recent Activity
                    </h2>

                    <div className="bg-[#0a0a0a] border border-neutral-800 rounded-xl divide-y divide-neutral-800">
                        {[
                            'OCR job completed',
                            'Text analysis processed',
                            'New project created',
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="px-6 py-4 text-sm text-neutral-400"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

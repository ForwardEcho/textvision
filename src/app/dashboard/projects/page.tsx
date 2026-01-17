export default function ProjectsPage() {
    return (
        <>
            <div className="mb-12">
                <h1 className="text-3xl font-semibold tracking-tight">
                    Projects
                </h1>
                <p className="mt-2 text-sm text-neutral-400">
                    Manage your AI projects and workflows
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    'OCR Processing',
                    'Sentiment Analysis',
                    'Vision Classification',
                ].map((project, i) => (
                    <div
                        key={i}
                        className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition"
                    >
                        <h3 className="font-medium">
                            {project}
                        </h3>
                        <p className="mt-2 text-sm text-neutral-400">
                            Last updated 2 days ago
                        </p>
                    </div>
                ))}

                {/* CREATE NEW */}
                <div className="border border-dashed border-neutral-700 rounded-xl p-6 flex items-center justify-center text-sm text-neutral-400 hover:text-white hover:border-neutral-500 transition cursor-pointer">
                    + Create new project
                </div>
            </div>
        </>
    )
}

export default function UsagePage() {
    return (
        <>
            <div className="mb-12">
                <h1 className="text-3xl font-semibold tracking-tight">
                    Usage
                </h1>
                <p className="mt-2 text-sm text-neutral-400">
                    Monitor your API and feature usage
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                    { label: 'API Requests', value: '12,430 / 20,000' },
                    { label: 'OCR Jobs', value: '312 / 500' },
                    { label: 'Storage Used', value: '1.4 GB / 5 GB' },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-6"
                    >
                        <p className="text-xs uppercase tracking-widest text-neutral-500">
                            {item.label}
                        </p>
                        <p className="mt-3 text-2xl font-semibold">
                            {item.value}
                        </p>
                    </div>
                ))}
            </div>

            <div className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-6">
                <h3 className="font-medium mb-4">
                    Recent Usage
                </h3>

                <div className="space-y-3 text-sm text-neutral-400">
                    <p>• OCR job processed (12 pages)</p>
                    <p>• Text analysis request</p>
                    <p>• Vision classification task</p>
                </div>
            </div>
        </>
    )
}

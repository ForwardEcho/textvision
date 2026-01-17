export default function SettingsPage() {
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

            <div className="max-w-xl space-y-8">
                {/* PROFILE */}
                <div className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-6">
                    <h3 className="font-medium mb-4">
                        Profile
                    </h3>

                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-md text-sm"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            disabled
                            className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-md text-sm text-neutral-500 cursor-not-allowed"
                        />
                    </div>
                </div>

                {/* SECURITY */}
                <div className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-6">
                    <h3 className="font-medium mb-4">
                        Security
                    </h3>

                    <button className="text-sm text-neutral-400 hover:text-white transition">
                        Change password →
                    </button>
                </div>
            </div>
        </>
    )
}

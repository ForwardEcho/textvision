import MatrixBackground from '../../../components/MatrixBackground'
import Navbar from '../../../components/Navbar'

export default function Docs() {
    return (
        <div className="min-h-screen bg-black text-white font-sans flex flex-col">

            <Navbar />

            {/* HEADER */}
            <header className="relative overflow-hidden border-b border-neutral-800 pt-16">
                <MatrixBackground />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90 pointer-events-none" />

                <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
                    <h1 className="text-5xl font-semibold tracking-tight">
                        Documentation
                    </h1>
                    <p className="mt-4 text-neutral-400 max-w-2xl">
                        Everything you need to integrate TextVision into your application.
                    </p>
                </div>
            </header>

            {/* CONTENT */}
            <main className="flex-grow max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-16">

                {/* SIDEBAR */}
                <aside className="hidden md:block">
                    <nav className="sticky top-24 space-y-4 text-sm text-neutral-400">
                        <a href="#getting-started" className="block hover:text-white">Getting Started</a>
                        <a href="#authentication" className="block hover:text-white">Authentication</a>
                        <a href="#ocr" className="block hover:text-white">OCR API</a>
                        <a href="#text-analysis" className="block hover:text-white">Text Analysis API</a>
                        <a href="#vision" className="block hover:text-white">Vision Classification</a>
                        <a href="#errors" className="block hover:text-white">Error Handling</a>
                    </nav>
                </aside>

                {/* MAIN DOC */}
                <section className="space-y-24 text-sm leading-relaxed">

                    {/* SECTION */}
                    <div id="getting-started">
                        <h2 className="text-2xl font-medium mb-4">Getting Started</h2>
                        <p className="text-neutral-400">
                            TextVision provides AI-powered APIs for OCR, text analysis, and vision classification.
                            All requests are made via HTTPS and return JSON responses.
                        </p>
                    </div>

                    <div id="authentication">
                        <h2 className="text-2xl font-medium mb-4">Authentication</h2>
                        <p className="text-neutral-400 mb-4">
                            All API requests require an API key passed via the Authorization header.
                        </p>

                        <pre className="bg-[#0a0a0a] border border-neutral-800 rounded-lg p-4 text-xs overflow-x-auto">
{`Authorization: Bearer YOUR_API_KEY`}
            </pre>
                    </div>

                    <div id="ocr">
                        <h2 className="text-2xl font-medium mb-4">OCR API</h2>
                        <p className="text-neutral-400 mb-4">
                            Extract text from images and scanned documents.
                        </p>

                        <pre className="bg-[#0a0a0a] border border-neutral-800 rounded-lg p-4 text-xs overflow-x-auto">
{`POST /api/v1/ocr
Content-Type: multipart/form-data

file: image.jpg`}
            </pre>
                    </div>

                    <div id="text-analysis">
                        <h2 className="text-2xl font-medium mb-4">Text Analysis API</h2>
                        <p className="text-neutral-400 mb-4">
                            Analyze sentiment, keywords, and semantic meaning from text input.
                        </p>

                        <pre className="bg-[#0a0a0a] border border-neutral-800 rounded-lg p-4 text-xs overflow-x-auto">
{`POST /api/v1/text/analyze
{
  "text": "Hello world"
}`}
            </pre>
                    </div>

                    <div id="vision">
                        <h2 className="text-2xl font-medium mb-4">Vision Classification</h2>
                        <p className="text-neutral-400">
                            Classify images using custom-trained AI models.
                        </p>
                    </div>

                    <div id="errors">
                        <h2 className="text-2xl font-medium mb-4">Error Handling</h2>
                        <p className="text-neutral-400">
                            All errors return standard HTTP status codes with JSON error messages.
                        </p>
                    </div>

                </section>
            </main>

            {/* FOOTER */}
            <footer className="border-t border-neutral-800 py-6">
                <div className="max-w-6xl mx-auto px-6 text-center text-xs text-neutral-500">
                    © 2026 TextVision. All rights reserved.
                </div>
            </footer>

        </div>
    )
}

import MatrixBackground from '../../../components/MatrixBackground';
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function Products() {
    return (
        <div className="min-h-screen bg-black text-white font-sans flex flex-col">
            <Navbar />

            {/* HEADER */}
            <header className="relative overflow-hidden border-b border-neutral-800">
                <MatrixBackground />

                {/* Overlay biar matrix subtle */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 pointer-events-none" />

                <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center">
                    <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
                        Products
                    </h1>

                    <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
                        What we have
                    </p>
                </div>
            </header>

            {/* MAIN */}
            <main className="flex-grow max-w-6xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {[
                        {
                            title: 'OCR Scanner',
                            desc: 'Extract accurate text from images and scanned documents.'
                        },
                        {
                            title: 'Text Analysis',
                            desc: 'Analyze sentiment, structure, and semantic meaning.'
                        },
                        {
                            title: 'Palm Oil Classification',
                            desc: 'Classification palm oil by type.'
                        }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="
                bg-[#0a0a0a]
                border border-neutral-800
                rounded-xl p-8
                hover:border-neutral-600
                transition
              "
                        >
                            <h2 className="text-lg font-medium text-white">
                                {item.title}
                            </h2>

                            <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                                {item.desc}
                            </p>

                            <button className="
                mt-6 text-sm font-medium
                text-white
                border-b border-neutral-600
                hover:border-white
                transition
              ">
                                Learn more →
                            </button>
                        </div>
                    ))}
                </div>
            </main>

            <Footer/>

        </div>
    )
}

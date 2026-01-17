import MatrixBackground from '../../../components/MatrixBackground'
import Footer from "../../../components/Footer";

export const metadata = {
    title: 'Under Construction | TextVision',
    description: 'This section is currently under development.'
}

export default function UnderConstruction() {
    return (
        <div className="min-h-screen bg-black text-white font-sans flex flex-col">
            <main className="relative flex-grow flex items-center justify-center overflow-hidden">

                {/* Background Matrix */}
                <MatrixBackground />
                <div className="absolute inset-0 bg-black/80" />

                {/* Content */}
                <div className="relative z-10 max-w-xl px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                        Under Construction
                    </h1>

                    <p className="mt-6 text-neutral-400 text-sm leading-relaxed">
                        This section is currently being built.
                        We’re working on something meaningful not rushing something half-baked.
                    </p>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

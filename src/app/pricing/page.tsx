import MatrixBackground from '../../../components/MatrixBackground'
import Navbar from '../../../components/Navbar'

const products = [
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
        desc: 'Classification of palm oil by type using AI.'
    }
]

const plans = [
    {
        name: 'Starter',
        price: '$0',
        desc: 'For individuals and testing',
        features: [
            'Basic OCR',
            'Limited text analysis',
            'Community support'
        ],
        cta: 'Get started',
        highlight: false
    },
    {
        name: 'Pro',
        price: '$29',
        desc: 'For growing teams',
        features: [
            'Advanced OCR',
            'Full text analysis',
            'Vision classification',
            'Priority support'
        ],
        cta: 'Start free trial',
        highlight: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        desc: 'For large organizations',
        features: [
            'Unlimited usage',
            'Custom AI models',
            'Dedicated support'
        ],
        cta: 'Contact sales',
        highlight: false
    }
]

export default function Pricing() {
    return (
        <div className="min-h-screen bg-black text-white font-sans flex flex-col">

            <Navbar />

            {/* HEADER */}
            <header className="relative overflow-hidden border-b border-neutral-800 pt-16">
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 pointer-events-none" />
                    <MatrixBackground/>
                <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center">
                    <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
                        Pricing
                    </h1>
                    <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
                        Simple, transparent pricing for every stage.
                    </p>
                </div>
            </header>

            {/* PRODUCTS */}
            <main className="flex-grow max-w-6xl mx-auto px-6 py-24">
                {/* PRICING */}
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {plans.map((plan, i) => (
                            <div
                                key={i}
                                className={`
                  rounded-xl p-8 border transition
                  ${plan.highlight
                                    ? 'bg-white text-black border-white scale-105'
                                    : 'bg-[#0a0a0a] text-white border-neutral-800 hover:border-neutral-600'
                                }
                `}
                            >
                                {plan.highlight && (
                                    <div className="text-xs font-semibold uppercase tracking-widest mb-4">
                                        Most Popular
                                    </div>
                                )}

                                <h3 className="text-xl font-medium">
                                    {plan.name}
                                </h3>

                                <p className={`mt-2 text-sm ${
                                    plan.highlight ? 'text-neutral-700' : 'text-neutral-400'
                                }`}>
                                    {plan.desc}
                                </p>

                                <div className="mt-6 text-4xl font-semibold">
                                    {plan.price}
                                    {plan.price !== 'Custom' && (
                                        <span className="text-sm font-normal"> / month</span>
                                    )}
                                </div>

                                <ul className="mt-6 space-y-3 text-sm">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex gap-2">
                                            <span>✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`
                    mt-8 w-full py-3 rounded-md text-sm font-medium transition
                    ${plan.highlight
                                        ? 'bg-black text-white hover:bg-neutral-800'
                                        : 'border border-neutral-700 hover:border-neutral-500'
                                    }
                  `}
                                >
                                    {plan.cta}
                                </button>
                            </div>
                        ))}
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

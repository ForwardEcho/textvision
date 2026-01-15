import './globals.css'
import { Inter } from 'next/font/google'
import SmoothScroll from "../../components/SmoothScroll";
import PageTransition from "../../components/PageTransition";

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
    variable: '--font-inter',
})

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.variable}>
        <body className="font-sans">
            <SmoothScroll/>
            <PageTransition>
                {children}
            </PageTransition>
        </body>
        </html>
    )
}

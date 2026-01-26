import './globals.css'
import { Inter } from 'next/font/google'
import SmoothScroll from '../../components/SmoothScroll'
import PageTransition from '../../components/PageTransition'
import Providers from "./providers";
import type { ReactNode } from 'react'
import Navbar from "../../components/Navbar";

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
    variable: '--font-inter',
})

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {
    return (
        <html lang="en" className={inter.variable}>
        <body className="font-sans">
        <Providers>
        <Navbar/>
        <SmoothScroll />
        <PageTransition>
            {children}
        </PageTransition>
        </Providers>
        </body>
        </html>
    )
}

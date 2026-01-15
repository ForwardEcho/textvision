import './globals.css'
import { Inter } from 'next/font/google'
import SmoothScroll from '../../components/SmoothScroll'
import PageTransition from '../../components/PageTransition'
import type { ReactNode } from 'react'

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
        <SmoothScroll />
        <PageTransition>
            {children}
        </PageTransition>
        </body>
        </html>
    )
}

import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.scss'
import clsx from 'clsx'

const inter = Inter({subsets: ['latin'], variable: '--font-inter'})

export const metadata: Metadata = {
    title: 'Ajani Green - Full Stack Developer',
    description: 'The portfolio of Ajani Green',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={clsx(inter.className)}>
        {children}
        </body>
        </html>
    )
}

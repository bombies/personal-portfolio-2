import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.scss'
import clsx from 'clsx'
import NavBar from "@/components/NavBar";

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
        <NavBar/>
        {children}
        </body>
        </html>
    )
}

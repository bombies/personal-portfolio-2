import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import clsx from "clsx";
import NavBar from "@/components/NavBar";
import CookiesPopup from "../components/CookiesPopup";
import { CookiesProvider } from "next-client-cookies/server";
import ScriptProvider from "../components/ScriptProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Ajani Green - Full Stack Developer",
    description: "The portfolio of Ajani Green",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={clsx(inter.className)}>
                <CookiesProvider>
                    <NavBar />
                    <CookiesPopup />
                    {children}
                </CookiesProvider>
            </body>
            <ScriptProvider
                googleAnalyticsId={process.env.GOOGLE_ANALYTICS_ID || ""}
            />
        </html>
    );
}

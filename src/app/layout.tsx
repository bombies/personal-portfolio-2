import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import clsx from "clsx";
import NavBar from "@/components/NavBar";
import { GoogleAnalytics } from "@next/third-parties/google";
import { cookies } from "next/headers";
import CookiesPopup from "../components/CookiesPopup";
import { CookiesConsent, DefaultCookiesConsent } from "../lib/utils";
import { CookiesProvider } from "next-client-cookies/server";

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
    const cookieStore = cookies();
    const cookiesConsent = cookieStore.get("cookiesConsent")?.value;
    const cookiesConsentObj = cookiesConsent
        ? (JSON.parse(cookiesConsent) as CookiesConsent)
        : DefaultCookiesConsent;

    return (
        <html lang="en">
            <body className={clsx(inter.className)}>
                <CookiesProvider>
                    <NavBar />
                    {!cookiesConsentObj.configured && <CookiesPopup />}
                    {children}
                </CookiesProvider>
            </body>
            {cookiesConsentObj.config.statistics !== false && (
                <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ""} />
            )}
        </html>
    );
}

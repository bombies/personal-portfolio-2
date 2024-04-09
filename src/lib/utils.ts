import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export type CookiesConsent = {
    configured: boolean;
    config: {
        essential: true;
        statistics: boolean;
    };
};

export const DefaultCookiesConsent: CookiesConsent = {
    configured: false,
    config: {
        essential: true,
        statistics: true,
    },
};

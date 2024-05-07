"use client";

import { useMemo } from "react";
import useLocalStorage from "./useLocalStorage";
import { CookiesConsent } from "../utils";

const useCookieStorage = () => {
    const { storage: localStorage, storageLoading } = useLocalStorage();
    const cookieConsentStorage = useMemo(() => {
        if (!localStorage) return undefined;
        const cookiesConsentString = localStorage.getItem("cookiesConsent");
        return cookiesConsentString
            ? (JSON.parse(cookiesConsentString) as CookiesConsent)
            : undefined;
    }, [localStorage]);

    return cookieConsentStorage;
};

export default useCookieStorage;

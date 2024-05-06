"use client";

import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CookieIcon } from "lucide-react";
import { motion } from "framer-motion";
import { DefaultCookiesConsent } from "../lib/utils";
import { Button } from "./ui/button";
import useLocalStorage from "../lib/hooks/useLocalStorage";

const CookiesPopup: FC = () => {
    const { storage: localStorage, storageLoading } = useLocalStorage();
    const [cookieConsentStorage, setCookieConsentStorage] = useState<string>();

    useEffect(() => {
        if (!storageLoading)
            setCookieConsentStorage(
                localStorage!.getItem("cookiesConsent") || undefined
            );
    }, [localStorage, storageLoading]);

    const onAccept = useCallback(() => {
        const storage = JSON.stringify(DefaultCookiesConsent);
        localStorage?.setItem("cookiesConsent", storage);
        setCookieConsentStorage(storage);
    }, [localStorage]);

    const onDeny = useCallback(() => {
        const storage = JSON.stringify({
            configured: true,
            config: {
                ...DefaultCookiesConsent.config,
                statistics: false,
            },
        });

        localStorage?.setItem("cookiesConsent", storage);
        setCookieConsentStorage(storage);
    }, [localStorage]);

    const card = useMemo(
        () => (
            <Card className="p-4 shadow-md w-[45rem] phone:w-full">
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <CookieIcon width={24} className="mr-2 flex-shrink-0" />
                        This website uses cookies!
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="phone:text-sm">
                        This website uses cookies to ensure you get the best
                        experience while browsing my portfolio. Essential
                        cookies help this site function smoothly, enabling
                        features like secure browsing. Analytics cookies let me
                        understand how you interact with the site.
                    </p>
                    <div className="flex gap-2 phone:justify-center mt-4">
                        <Button onClick={onAccept}>Allow All</Button>
                        <Button onClick={onDeny}>Deny Optional</Button>
                    </div>
                </CardContent>
            </Card>
        ),
        [onAccept, onDeny]
    );

    return (
        !cookieConsentStorage &&
        !storageLoading && (
            <motion.div
                className="fixed left-5 phone:left-0 z-50"
                layout
                initial={{ opacity: 0, bottom: -100 }}
                animate={{ opacity: 1, bottom: 20 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, bottom: -100 }}
            >
                {card}
            </motion.div>
        )
    );
};

export default CookiesPopup;

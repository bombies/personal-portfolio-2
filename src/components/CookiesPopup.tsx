"use client";

import { FC, forwardRef, useCallback, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CookieIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useCookies } from "next-client-cookies";
import { CookiesConsent, DefaultCookiesConsent } from "../lib/utils";
import { Button } from "./ui/button";

const CookiesPopup: FC = () => {
    const cookies = useCookies();
    const cookiesConsent = cookies.get("cookiesConsent");
    const cookiesConsentObj = cookiesConsent
        ? (JSON.parse(cookiesConsent) as CookiesConsent)
        : DefaultCookiesConsent;

    const configCookies = useCallback(
        (config: CookiesConsent["config"]) => {
            cookiesConsentObj.config = config;
            cookiesConsentObj.configured = true;
            cookies.set("cookiesConsent", JSON.stringify(cookiesConsentObj));
        },
        [cookies, cookiesConsentObj]
    );

    const card = useMemo(
        () => (
            <Card className="fixed bottom-5 left-5 phone:left-0 z-50 p-4 shadow-md w-[45rem] phone:w-full">
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <CookieIcon width={24} className="mr-2 flex-shrink-0" />
                        This website uses cookies!
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="phone:text-sm">
                        This website uses cookies to ensure you get the best
                        experience while browsing our portfolio. Essential
                        cookies help this site function smoothly, enabling
                        features like secure browsing. Analytics cookies let me
                        understand how you interact with the site.
                    </p>
                    <div className="flex gap-2 phone:justify-center mt-4">
                        <Button
                            onClick={() =>
                                configCookies({
                                    essential: true,
                                    statistics: true,
                                })
                            }
                        >
                            Allow All
                        </Button>
                        <Button
                            onClick={() =>
                                configCookies({
                                    essential: true,
                                    statistics: false,
                                })
                            }
                        >
                            Deny All
                        </Button>
                    </div>
                </CardContent>
            </Card>
        ),
        [configCookies]
    );

    return (
        !cookiesConsentObj.configured && (
            <motion.div
                layout
                initial={{ opacity: 0, bottom: -20 }}
                animate={{ opacity: 1, bottom: 20 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: 100 }}
            >
                {card}
            </motion.div>
        )
    );
};

export default CookiesPopup;

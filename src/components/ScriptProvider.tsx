"use client";

import { FC } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import useCookieStorage from "../lib/hooks/useCookieStorage";

type Props = {
    googleAnalyticsId: string;
};

const ScriptProvider: FC<Props> = ({ googleAnalyticsId }) => {
    const cookieConsentStorage = useCookieStorage();

    return (
        <>
            {cookieConsentStorage?.config.statistics !== false && (
                <GoogleAnalytics gaId={googleAnalyticsId} />
            )}
        </>
    );
};

export default ScriptProvider;

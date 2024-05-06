"use client";

import { useEffect, useState } from "react";

const useLocalStorage = () => {
    const [storageLoading, setStorageLoading] = useState(true);
    const [storage, setStorage] = useState<Storage | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") setStorage(window.localStorage);
        setStorageLoading(false);
    }, []);

    return { storage, storageLoading };
};

export default useLocalStorage;

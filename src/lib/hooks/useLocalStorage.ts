"use client";

import { useEffect, useState } from "react";

const useLocalStorage = () => {
    const [localStorage, setLocalStorage] = useState<Storage>();

    useEffect(() => {
        setLocalStorage(window.localStorage);
    }, []);

    return localStorage;
};

export default useLocalStorage;

'use client'

import { useEffect, useState } from "react";
import { useTelegramStore } from "@/store/useTelegramStore";

export const TelegramWrapper = ({ children }: { children: React.ReactNode }) => {


    const { userId, setTg } = useTelegramStore((state: any) => state)

    useEffect(() => {
        setTg(null)
        function initTg() {
            if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
                const tg = window.Telegram.WebApp
                setTg(tg);
            } else {
                console.log('Telegram WebApp is undefined, retrying...');
                setTimeout(initTg, 1000);
            }
        }
        initTg();


    }, []);

    return (
        <>{userId && children}</>
    )
}
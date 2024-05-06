'use client'

import { getBaseQuery, getResponse } from "@/api/restAPI";
import { TOKEN } from "@/api/settings";
import { useDataStore } from "@/store/useDataStore";
import { useTelegramStore } from "@/store/useTelegramStore";
import { useEffect, useState } from "react";

export const DataWrapper = ({ children }: { children: React.ReactNode }) => {

    const [isLoad, setIsLoad] = useState(false);
    const { userToken, setUserToken, setUserBalance, setUserCurrentPrompt } = useDataStore((state: any) => state);


    const { userId } = useTelegramStore((state: any) => state)

    function userDataCreate() {
        getResponse({ token: TOKEN as string, method: `/users/${userId}` }).then(res => {
            const data = res?.data
            setUserToken(data?.token?.token)
            setUserBalance(parseFloat(data?.accounts?.balance))
            setUserCurrentPrompt(data?.settings?.prompt_id)
        })
    }

    useEffect(() => {
        if (userId && !userToken) {
            userDataCreate()
            setIsLoad(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);


    return (
        <>
            {isLoad && userToken && children}
        </>
    )
}
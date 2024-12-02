'use client'

import { getResponse } from "@/api/restAPI";
import { TOKEN } from "@/api/settings";
import { useDataStore } from "@/store/useDataStore";
import { useTelegramStore } from "@/store/useTelegramStore";
import { useEffect, useState } from "react";

export const DataWrapper = ({ children }: { children: React.ReactNode }) => {

    const [isLoad, setIsLoad] = useState(false);
    const { userToken, setUserToken, setUserBalance, setUserCurrentPrompt, setUserLanguage, userLanguage, setUserUUID } = useDataStore((state: any) => state);


    const { userId } = useTelegramStore((state: any) => state)

    function userDataCreate() {

        getResponse({ token: TOKEN as string, method: `/users/${userId}` }).then(res => {
            console.log(res)
            const data = res?.data
            const language = data?.settings?.language
            const promptId = data?.settings?.prompt_id
            const balance = data?.accounts?.balance
            const token = data?.token?.token
            const uuid = data?.uuid
            uuid && setUserUUID(uuid)
            token && setUserToken(token)
            balance && setUserBalance(parseFloat(balance))
            promptId && setUserCurrentPrompt(promptId)
            language && setUserLanguage(language)
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
            {isLoad && userToken && userLanguage && children}
        </>
    )
}
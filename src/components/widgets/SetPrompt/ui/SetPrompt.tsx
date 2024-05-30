'use client'

import translate from './setPrompt.translate.json'

import { putResponse } from "@/api/restAPI"
import { TOKEN } from "@/api/settings"

import { ContainerWrapper } from "@/components/shared/ContainerWrapper"
import { useTelegramStore } from "@/store/useTelegramStore"

import { useNotificationStore } from "../../NotificationWidget"
import { ButtonComponent } from "@/components/shared/ButtonComponent"
import { useDataStore } from "@/store/useDataStore"
import { baseLanguages } from '@/types/baseTypes'

export const SetPrompt = ({ uuid }: { uuid: string }) => {

    const { userLanguage } = useDataStore((state: any) => state);
    const translation = translate[`${userLanguage as baseLanguages}`]

    const { userId } = useTelegramStore((state: any) => state)
    const { setNotification } = useNotificationStore((state: any) => state);

    function putChangesHandler() {
        const body = {
            "prompt_id": uuid
        }
        const url = `/users/${userId}/prompt`
        putResponse({ token: TOKEN as string, body: body, method: url }).then((res) => {
            console.log(res)
        })
        setNotification({ message: translation.notification, type: "success" })
    }

    return (

        <ContainerWrapper>
            <ButtonComponent text={translation.button} onClick={putChangesHandler} />
        </ContainerWrapper>
    )
}
'use client'

import { putResponse } from "@/api/restAPI"
import { TOKEN } from "@/api/settings"
import { NotificationComponent } from "@/components/features/NotificationMessage"
import { ContainerWrapper } from "@/components/shared/ContainerWrapper"
import { useTelegramStore } from "@/store/useTelegramStore"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useNotificationStore } from "../../NotificationWidget"
import { ButtonComponent } from "@/components/shared/ButtonComponent"

export const SetPrompt = ({ uuid }: { uuid: string }) => {

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
        setNotification({ message: "Prompt was install in telegram chat", type: "success" })
    }

    return (

        <ContainerWrapper>
            <ButtonComponent text={'Set prompt in telegram chat'} onClick={putChangesHandler} />
        </ContainerWrapper>
    )
}
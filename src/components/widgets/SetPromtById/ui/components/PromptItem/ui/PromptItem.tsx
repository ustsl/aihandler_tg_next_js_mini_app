'use client'

import { getBaseQuery, putResponse } from "@/api/restAPI";
import { TOKEN } from "@/api/settings";
import { ButtonComponent } from "@/components/shared/ButtonComponent";
import { GridBlock } from "@/components/shared/GridBlock";
import { TitleBlock } from "@/components/shared/TitleElement";
import { useNotificationStore } from "@/components/widgets/NotificationWidget";
import { useDataStore } from "@/store/useDataStore";
import { useTelegramStore } from "@/store/useTelegramStore";
import { useEffect, useState } from "react";



export const PromptItem = ({ uuid }: { uuid: string }) => {

    const [title, setTitle] = useState('')

    const { userToken } = useDataStore((state: any) => state);
    const { userId } = useTelegramStore((state: any) => state)
    const { setNotification } = useNotificationStore((state: any) => state);

    function userDataCreate() {
        const headers = { 'Authorization': userToken as string } as any
        const queryLink = `/prompts/${userId}/${uuid}`

        getBaseQuery(queryLink, headers).then((res) => {
            if (res && res?.title) {
                setTitle(res.title)
            } else {
                setTitle('')
            }
        })

    }

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


    useEffect(() => {
        userDataCreate()
        console.log(123123)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uuid]);

    return (
        <GridBlock gridSize="XS">
            {title ?
                <>
                    <TitleBlock tag="h2" text={title} />
                    <ButtonComponent text={'Set prompt in telegram chat'} onClick={putChangesHandler} />
                </>
                : <p>Prompt not found</p>}
        </GridBlock>
    )
}
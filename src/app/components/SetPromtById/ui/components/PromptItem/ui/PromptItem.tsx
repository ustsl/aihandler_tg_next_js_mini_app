'use client'

import translate from './promptItem.translate.json'

import { getBaseQuery, putResponse } from "@/api/restAPI";
import { TOKEN } from "@/api/settings";
import { ButtonComponent } from "@/components/shared/ButtonComponent";
import { GridBlock } from "@/components/shared/GridBlock";
import { TitleBlock } from "@/components/shared/TitleElement";
import { useNotificationStore } from "@/components/widgets/NotificationWidget";
import { useDataStore } from "@/store/useDataStore";
import { useTelegramStore } from "@/store/useTelegramStore";
import { baseLanguages } from '@/types/baseTypes';
import { useEffect, useState } from "react";



export const PromptItem = ({ uuid }: { uuid: string }) => {


    const { userLanguage } = useDataStore((state: any) => state);

    const translation = translate[`${userLanguage as baseLanguages}`]

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
        })
        setNotification({ message: translation.success, type: "success" })
    }


    useEffect(() => {
        userDataCreate()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uuid]);

    return (
        <GridBlock gridSize="XS">
            {title ?
                <>
                    <TitleBlock tag="h2" text={title} />
                    <ButtonComponent text={translation.button} onClick={putChangesHandler} />
                </>
                : <p>{translation.notFound}</p>}
        </GridBlock>
    )
}
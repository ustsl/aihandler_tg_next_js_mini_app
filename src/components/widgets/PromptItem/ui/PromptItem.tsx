'use client'

import translate from './promptItem.translate.json'

import { getBaseQuery, putResponse } from "@/api/restAPI"
import { ContainerWrapper } from "@/components/shared/ContainerWrapper"
import { GridBlock } from "@/components/shared/GridBlock"
import { TitleBlock } from "@/components/shared/TitleElement"
import { useDataStore } from "@/store/useDataStore"
import { useTelegramStore } from "@/store/useTelegramStore"
import { useEffect } from "react"
import { APIQueryElement } from './components/APIQueryElement/ui/APIQueryElement'
import { usePromptFormFields } from "@/hooks/usePromptData"
import { PromptForm, modelSizeTranslator, modelSizeReTranslator, isOpenTranslator, isOpenReTranslator } from "@/components/entities/PromptForm"
import { useNotificationStore } from "../../NotificationWidget"
import { QuestionDataWrapper } from "@/components/shared/QuestionDataWrapper"

import { CopyUUIDElement } from "./components/CopyUUIDElement"
import { IPromptBody } from "./promptItem.props"
import { baseLanguages } from "@/types/baseTypes"


export const PromptItem = ({ uuid }: { uuid: string }) => {

    const { userLanguage } = useDataStore((state: any) => state);
    const translation = translate[`${userLanguage as baseLanguages}`]

    const { setNotification } = useNotificationStore((state: any) => state);
    const { userToken } = useDataStore((state: any) => state);
    const { userId } = useTelegramStore((state: any) => state)


    const { fields, handleChange, isChanged, setIsChanged } = usePromptFormFields({
        title: '',
        description: '',
        prompt: '',
        model: 'gpt-3.5-turbo',
        isOpen: 'private',
        size: 'no memory',
        tuning: {}
    });

    function userDataCreate() {
        const headers = { 'Authorization': userToken as string } as any
        const queryLink = `/prompts/${userId}/${uuid}`


        getBaseQuery(queryLink, headers).then((res) => {
            if (res) {
                handleChange("title", res.title, true)
                handleChange("description", res.description, true)
                handleChange("prompt", res.prompt, true)
                handleChange("model", res.model, true)
                handleChange("size", modelSizeReTranslator(res.context_story_window), true)
                handleChange("isOpen", isOpenReTranslator(res.is_open), true)
                handleChange("tuning", res.tuning, true)
            }
        })
    }

    useEffect(() => {
        if (userId && userToken) {
            userDataCreate()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    function saveChangesHandler() {
        const body: IPromptBody = {
            "title": fields.title,
            "description": fields.description,
            "prompt": fields.prompt,
            "model": fields.model,
            "context_story_window": modelSizeTranslator(fields.size),
            "is_open": isOpenTranslator(fields.isOpen),
            "tuning": {

            }
        }
        const tuningFields: (keyof IPromptBody["tuning"])[] = ["style", "size", "quality"];
        tuningFields.forEach((field) => {
            if (fields.tuning?.[field] && fields.tuning?.[field] !== "not installed") {
                body.tuning[field] = fields.tuning[field];
            }
        });
        const url = `/prompts/${userId}/${uuid}`
        putResponse({ token: userToken, body: body, method: url })
        setNotification({ message: "Is saved", type: "success" })
        setIsChanged(false)
    }

    return (
        <>
            <PromptForm handleChange={handleChange} fields={fields}
                saveChangesHandler={saveChangesHandler} isChanged={isChanged} />
            <GridBlock gridSize="XS">

                <ContainerWrapper>
                    <GridBlock gridSize='XS'>
                        <QuestionDataWrapper text={translation.api.hint}>
                            <TitleBlock tag={"h2"} text={translation.api.title} />
                        </QuestionDataWrapper>
                        <APIQueryElement tg={userId} userToken={userToken} uuid={uuid} />

                    </GridBlock>
                </ContainerWrapper>
                {isOpenTranslator(fields.isOpen) &&
                    <ContainerWrapper>
                        <GridBlock gridSize='XS'>
                            <QuestionDataWrapper text={translation.share.hint}>
                                <TitleBlock tag={"h2"} text={translation.share.title} />
                            </QuestionDataWrapper>
                            <CopyUUIDElement uuid={uuid} />
                        </GridBlock>
                    </ContainerWrapper>
                }



            </GridBlock>
        </>
    )
}
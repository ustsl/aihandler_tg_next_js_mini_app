import { getBaseQuery, putResponse } from "@/api/restAPI"
import { ContainerWrapper } from "@/components/shared/ContainerWrapper"
import { GridBlock } from "@/components/shared/GridBlock"
import { TitleBlock } from "@/components/shared/TitleElement"
import { useDataStore } from "@/store/useDataStore"
import { useTelegramStore } from "@/store/useTelegramStore"
import { useEffect } from "react"
import { APIQueryElement } from './components/APIQueryElement/ui/APIQueryElement'
import { usePromptFormFields } from "@/hooks/usePromptData"
import { PromptForm, modelSizeTranslator, modelSizeReTranslator } from "@/components/entities/PromptForm"
import { useNotificationStore } from "../../NotificationWidget"
import { QuestionDataWrapper } from "@/components/shared/QuestionDataWrapper"
import { isOpenReTranslator, isOpenTranslator } from "@/components/entities/PromptForm/ui/PromptForm"
import { CopyUUIDElement } from "./components/CopyUUIDElement"

export const PromptItem = ({ uuid }: { uuid: string }) => {

    const { setNotification } = useNotificationStore((state: any) => state);
    const { userToken } = useDataStore((state: any) => state);
    const { userId } = useTelegramStore((state: any) => state)


    const { fields, handleChange, isChanged, setIsChanged } = usePromptFormFields({
        title: '',
        description: '',
        prompt: '',
        model: 'gpt-3.5-turbo',
        isOpen: 'private',
        size: 'no memory'
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
        const body = {
            "title": fields.title,
            "description": fields.description,
            "prompt": fields.prompt,
            "model": fields.model,
            "context_story_window": modelSizeTranslator(fields.size),
            "is_open": isOpenTranslator(fields.isOpen)
        }
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
                        <QuestionDataWrapper text={"Use the example of this request to directly use your prompt in your own integrations outside of Telegram chat."}>
                            <TitleBlock tag={"h2"} text={"API-Query example"} />
                        </QuestionDataWrapper>
                        <APIQueryElement tg={userId} userToken={userToken} uuid={uuid} />

                    </GridBlock>
                </ContainerWrapper>
                {isOpenTranslator(fields.isOpen) &&
                    <ContainerWrapper>
                        <GridBlock gridSize='XS'>
                            <QuestionDataWrapper text={"Publish this ID on your social networks, or share it personally with other users so that they can use your prompt."}>
                                <TitleBlock tag={"h2"} text={"Share prompt"} />
                            </QuestionDataWrapper>
                            <CopyUUIDElement uuid={uuid} />
                        </GridBlock>
                    </ContainerWrapper>
                }


            </GridBlock>
        </>
    )
}
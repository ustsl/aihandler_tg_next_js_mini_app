import { getBaseQuery, putResponse } from "@/api/restAPI"
import { ContainerWrapper } from "@/components/shared/ContainerWrapper"
import { DropdownElement } from "@/components/shared/DropdownElement"
import { GridBlock } from "@/components/shared/GridBlock"
import { InputElement } from "@/components/shared/InputElement"
import { TextAreaElement } from "@/components/shared/TextAreaElement"
import { TitleBlock } from "@/components/shared/TitleElement"
import { useDataStore } from "@/store/useDataStore"
import { useTelegramStore } from "@/store/useTelegramStore"
import { useEffect, useState } from "react"
import { APIQueryElement } from './components/APIQueryElement/ui/APIQueryElement'
import { ButtonComponent } from '@/components/shared/ButtonComponent'
import { options } from "./promptConst"
import { NotificationComponent } from "@/components/features/NotificationMessage"
import { usePromptFormFields } from "@/hooks/usePromptData"

export const PromptItem = ({ uuid }: { uuid: string }) => {


    const { userToken } = useDataStore((state: any) => state);
    const { userId } = useTelegramStore((state: any) => state)
    const [notification, setNotification] = useState('')

    const { fields, handleChange, isChanged, setIsChanged } = usePromptFormFields({
        title: '',
        description: '',
        prompt: '',
        model: '',
        isOpen: false,
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
            "context_story_window": 0
        }
        const url = `/prompts/${userId}/${uuid}`
        putResponse({ token: userToken, body: body, method: url })
        setNotification("Is saved")
        setIsChanged(false)
    }

    return (
        <GridBlock gridSize="XS">
            <ContainerWrapper>
                <GridBlock gridSize="S">
                    <InputElement placeholder={"Choose unique name"} name={"Choose unique name"} value={fields.title}
                        onChange={(e: any) => handleChange("title", e.target.value)} />
                    <TextAreaElement label={"Choose description"} value={fields.description} rows={2} cols={1}
                        onChange={(e: any) => handleChange("description", e.target.value)} />
                    <TextAreaElement label={"Create prompt"} value={fields.prompt} rows={10} cols={1}
                        onChange={(e: any) => handleChange("prompt", e.target.value)} />
                    <DropdownElement options={options} selectedValue={fields.model} label={"Choose model"}
                        onChange={(e: any) => handleChange("model", e.target.value)} />
                </GridBlock>
            </ContainerWrapper>
            {isChanged &&
                <ContainerWrapper><ButtonComponent text={'Save prompt changes'} onClick={saveChangesHandler} /></ContainerWrapper>
            }
            <ContainerWrapper>
                <GridBlock gridSize='XS'>
                    <TitleBlock tag={"h2"} text={"API-Query example"} />
                    <APIQueryElement tg={userId} userToken={userToken} uuid={uuid} />
                </GridBlock>
            </ContainerWrapper>

            {notification && <NotificationComponent message={notification}
                setMessage={setNotification} />}

        </GridBlock>
    )
}
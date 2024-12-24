'use client'

import translate from './scenarioForm.translate.json'

import { getBaseQuery, putResponse } from "@/api/restAPI"
import { ContainerWrapper } from "@/components/shared/ContainerWrapper"
import { GridBlock } from "@/components/shared/GridBlock"
import { TitleBlock } from "@/components/shared/TitleElement"
import { useDataStore } from "@/store/useDataStore"
import { useTelegramStore } from "@/store/useTelegramStore"
import { useEffect } from "react"

import { usePromptFormFields } from "@/hooks/usePromptData"
import { PromptForm, modelSizeTranslator, modelSizeReTranslator, isOpenTranslator, isOpenReTranslator } from "@/components/entities/PromptForm"

import { QuestionDataWrapper } from "@/components/shared/QuestionDataWrapper"


import { baseLanguages } from "@/types/baseTypes"


import { useNotificationStore } from '@/components/widgets/NotificationWidget'

import { InputElement } from '@/components/shared/InputElement'
import useScenarioStore from '@/store/scenario.store'


export const ScenarioFormComponent = ({ uuid }: { uuid: string }) => {



    const { title, description, setTitle, setDescription, setPrompts } = useScenarioStore()

    const { userLanguage } = useDataStore((state: any) => state);

    const { userToken } = useDataStore((state: any) => state);
    const { userId } = useTelegramStore((state: any) => state)


    function userDataCreate() {
        const headers = { 'Authorization': userToken as string } as any
        const queryLink = `/scenarios/${userId}/${uuid}`

        getBaseQuery(queryLink, headers).then((res) => {
            console.log(res)
            if (res) {
                setTitle(res?.title)
                setDescription(res?.description)
                setPrompts(res?.prompts)
            }
        })
    }

    useEffect(() => {
        if (userId && userToken) {
            userDataCreate()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);




    return (
        <>
            <ContainerWrapper>
                <GridBlock gridSize="S">
                    <InputElement placeholder={"Set title"} label={"Set title"}
                        name={"Title"} value={title}
                        onChange={(e: any) => setTitle(e.target.value)} />
                    <InputElement placeholder={"Set description"} label={"Set description"}
                        name={"Description"} value={description}
                        onChange={(e: any) => setDescription(e.target.value)} />
                </GridBlock>
            </ContainerWrapper>
        </>
    )
}
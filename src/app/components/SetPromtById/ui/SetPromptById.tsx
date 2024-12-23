'use client'

import translate from './setPromptById.translate.json'

import { PromptDataGenerator } from "@/components/features/PromptDataGenerator"
import { ContainerWrapper } from "@/components/shared/ContainerWrapper"
import { GridBlock } from "@/components/shared/GridBlock"
import { InputElement } from "@/components/shared/InputElement"
import { debounce } from "@/utils/debounce"
import { useRef, useState } from "react"
import { PromptItem } from "./components/PromptItem"
import { useDataStore } from "@/store/useDataStore"
import { baseLanguages } from '@/types/baseTypes'

export const SetPromptById = () => {

    const { userLanguage } = useDataStore((state: any) => state);
    const translation = translate[`${userLanguage as baseLanguages}`]

    const [uuid, setUuid] = useState('')
    const [localUuid, setLocalUuid] = useState(uuid)

    const debounceRef = useRef(debounce((value: string) => {
        setUuid(value);
    }, 400));

    function handleInputChange(value: any) {

        setLocalUuid(value);
        debounceRef.current(value);
    }

    const titleQuestion = PromptDataGenerator(translation.hint,
        translation.title)


    return (
        <ContainerWrapper>
            <GridBlock gridSize="S">
                <InputElement placeholder={translation.title} label={titleQuestion} name={translation.title} value={localUuid}
                    onChange={(e: any) => handleInputChange(e.target.value)} />
                {uuid && <PromptItem uuid={uuid} />}
            </GridBlock>
        </ContainerWrapper>
    )
}
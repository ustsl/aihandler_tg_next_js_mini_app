'use client'

import { PromptDataGenerator } from "@/components/features/PromptDataGenerator"
import { ContainerWrapper } from "@/components/shared/ContainerWrapper"
import { GridBlock } from "@/components/shared/GridBlock"
import { InputElement } from "@/components/shared/InputElement"
import { debounce } from "@/utils/debounce"
import { useRef, useState } from "react"
import { PromptItem } from "./components/PromptItem"

export const SetPromptById = () => {

    const [uuid, setUuid] = useState('')
    const [localUuid, setLocalUuid] = useState(uuid)

    const debounceRef = useRef(debounce((value: string) => {
        setUuid(value);
    }, 400));

    function handleInputChange(value: any) {

        setLocalUuid(value);
        debounceRef.current(value);
    }

    const titleQuestion = PromptDataGenerator('Paste the copied ID. If the prompt is open and exists, you will be able to install it in the chat and use it.',
        "Insert the prompt ID")


    return (
        <ContainerWrapper>
            <GridBlock gridSize="S">
                <InputElement placeholder={"Insert the prompt ID"} label={titleQuestion} name={"Insert the prompt ID"} value={localUuid}
                    onChange={(e: any) => handleInputChange(e.target.value)} />
                {uuid && <PromptItem uuid={uuid} />}

            </GridBlock>
        </ContainerWrapper>
    )
}
'use client'

import translate from './finalLinks.translate.json'

import { CloseButton } from "@/components/features/CloseButton"
import { ContainerWrapper } from "@/components/shared/ContainerWrapper"
import { FlexWrapper } from "@/components/shared/FlexWrapper"
import { MiniButtonLinkComponent } from "@/components/shared/MiniButtonComponent"
import { useDataStore } from '@/store/useDataStore'
import { baseLanguages } from '@/types/baseTypes'

export const FinalLinks = () => {

    const { userLanguage } = useDataStore((state: any) => state);

    const returnButtonText = translate.return[`${userLanguage as baseLanguages}`]
    const writeButtonText = translate.writeToDeveloper[`${userLanguage as baseLanguages}`]
    const readButtonText = translate.readInstructions[`${userLanguage as baseLanguages}`]

    return (
        <ContainerWrapper>
            <FlexWrapper>
                <CloseButton text={returnButtonText} />
                <MiniButtonLinkComponent href="https://t.me/ustsl" text={writeButtonText} />
            </FlexWrapper>
        </ContainerWrapper>
    )
}
'use client'

import { GridBlock } from '@/components/shared/GridBlock'


import { ContainerWrapper } from '@/components/shared/ContainerWrapper'
import { TitleHintComponent } from '@/components/shared/TitleHintComponent'

import { PromptBlockComponent } from './components/PromptBlockComponent'
import useScenarioStore from '@/store/scenario.store'

export const ScenarioPromptList = () => {

    const { prompts } = useScenarioStore()

    return (
        <>
            {prompts && prompts.length > 0 &&
                <ContainerWrapper>
                    <GridBlock gridSize='S'>
                        <TitleHintComponent text='Current prompt list' />
                        {prompts.map(item => {
                            return (
                                <PromptBlockComponent key={item.prompt_id} item={item} />
                            )
                        })}
                    </GridBlock>
                </ContainerWrapper>
            }
        </>


    )
}
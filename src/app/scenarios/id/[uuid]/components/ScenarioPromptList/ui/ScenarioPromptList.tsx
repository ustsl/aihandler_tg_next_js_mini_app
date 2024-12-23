'use client'

import { GridBlock } from '@/components/shared/GridBlock'
import useScenarioStore from '../../ScenarioForm/ui/scenario.store'
import styles from './scenarioPromptList.module.css'
import { ContainerWrapper } from '@/components/shared/ContainerWrapper'
import { TitleHintComponent } from '@/components/shared/TitleHintComponent'
import { FlexWrapper } from '@/components/shared/FlexWrapper'
import { MiniButtonComponent } from '@/components/shared/MiniButtonComponent'

export const ScenarioPromptList = () => {

    const { prompts, updatePrompt } = useScenarioStore()

    return (
        <>
            {prompts && prompts.length > 0 &&
                <ContainerWrapper>
                    <GridBlock gridSize='S'>
                        <TitleHintComponent text='Current prompt list' />
                        {prompts.map(item => {
                            return (
                                <div className={styles.prompt} key={item.prompt_id}>
                                    <span className={styles.id}>{item.prompt_id}</span>

                                    <span className={styles.title}>{item.title}</span>
                                    <span className={styles.id}> {item.model}</span>

                                    <FlexWrapper justify='spaceBetween'>
                                        <MiniButtonComponent
                                            text={item.independent ? 'Independent' : 'Depends'}
                                            onClick={() => updatePrompt(
                                                item.prompt_id,
                                                { independent: !item.independent })}
                                            color='reverse'
                                        />
                                        <FlexWrapper>
                                            12



                                        </FlexWrapper>
                                    </FlexWrapper>
                                </div>
                            )
                        })}
                    </GridBlock>
                </ContainerWrapper>
            }
        </>


    )
}
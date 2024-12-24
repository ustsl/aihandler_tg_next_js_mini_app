import { FlexWrapper } from '@/components/shared/FlexWrapper'

import styles from './promptBlockComponent.module.css'
import { MiniButtonComponent } from '@/components/shared/MiniButtonComponent'
import useScenarioStore, { PromptItemListStore } from '@/store/scenario.store'
import { GridBlock } from '@/components/shared/GridBlock'
import { ArrowButtonComponent } from '@/components/shared/ArrowComponent'
import { DeleteButtonComponent } from '@/components/shared/DeleteButtonComponent'

export const PromptBlockComponent = ({ item }: { item: PromptItemListStore }) => {

    const { updatePrompt, removePrompt, upPrompt, downPrompt } = useScenarioStore()

    return (
        <div className={styles.prompt} key={item.prompt_id}>

            <GridBlock gridSize='XS'>
                <span className={styles.id}>{item.prompt_id}</span>

                <span className={styles.title}>{item.title}</span>
            </GridBlock>


            <FlexWrapper justify='spaceBetween'>
                <MiniButtonComponent
                    text={item.independent ? 'Independent' : 'Depends'}
                    onClick={() => updatePrompt(
                        item.prompt_id,
                        { independent: !item.independent })}
                    color='reverse'
                />
                <FlexWrapper>
                    <ArrowButtonComponent direction="up" onClick={() => upPrompt(item.prompt_id)} />
                    <ArrowButtonComponent direction="down" onClick={() => downPrompt(item.prompt_id)} />
                    <DeleteButtonComponent onClick={() => console.log(removePrompt(item.prompt_id))} />
                </FlexWrapper>
            </FlexWrapper>
        </div>
    )
}
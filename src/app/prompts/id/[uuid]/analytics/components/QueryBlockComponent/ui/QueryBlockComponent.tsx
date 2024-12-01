import { FlexWrapper } from '@/components/shared/FlexWrapper'
import styles from './queryBlockComponent.module.css'

import { GridBlock } from "@/components/shared/GridBlock"
import { QueryResultRaw } from "@/types/raw/analytics"

export const QueryBlockComponent = ({ item }: { item: QueryResultRaw }) => {
    return (
        <div className={styles.block}>
            <span className={styles.title}>{item.query}</span>
            <span className={styles.query}>{item.result}</span>
            <FlexWrapper>
                <span className={styles.additional}>User: {item.user_id}</span>
                <span className={styles.additional}>Time: {item.time_create}</span>
            </FlexWrapper>
        </div >
    )
}
import { FlexWrapper } from '@/components/shared/FlexWrapper'
import styles from './queryBlockComponent.module.css'


import { QueryResultRaw } from "@/types/raw/analytics"

function formattedDate(isoString: string) {
    return isoString.split(".")[0].replace("T", " ");
}



export const QueryBlockComponent = ({ item, UUID }: { item: QueryResultRaw, UUID: string }) => {
    return (
        <div className={styles.block}>
            <span className={styles.title}>{item.query}</span>
            <span className={styles.query}>{item.result}</span>
            <FlexWrapper>
                <span className={styles.additional}>User: {UUID === item.user_id ? "You" : "Another"}</span>
                <span className={styles.additional}>Query time: {formattedDate(item.time_create)}</span>
            </FlexWrapper>
        </div >
    )
}
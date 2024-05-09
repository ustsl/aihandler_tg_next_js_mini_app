import styles from './itemsBlock.module.css'

import Link from "next/link"
import { IPromptList } from "../../../promptList.props"

export const ItemsBlock = ({ results }: { results: IPromptList[] }) => {
    return (
        <div className={styles.prompts}>
            {results && results.length > 0 && results.map((item: IPromptList, index: any) => {
                return (
                    <Link href={`/prompts/id/${item.uuid}`} key={index} className={styles.prompt}>
                        <span className={styles.title}>{item.title}</span>
                        {item.description && <span className={styles.descr}> — {item.description}</span>}
                    </Link>)
            })}</div>
    )
}
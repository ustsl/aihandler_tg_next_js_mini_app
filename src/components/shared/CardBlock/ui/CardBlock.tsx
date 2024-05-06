import Link from "next/link"

import styles from './cardBlock.module.css'

interface ICardBlock {
    href: string
    title: string
    description: string
}


export const CardBlock = ({ href, title, description }: ICardBlock) => {
    return (
        <Link href={href} className={styles.card}>
            <h4>{title}</h4>
            <span>{description}</span>
        </Link>
    )
}
import Link from 'next/link'
import styles from './buttonComponent.module.css'

export const ButtonComponent = ({ text, onClick }: { text: string, onClick: () => void }) => {
    return (
        <button onClick={onClick} className={styles.button}>{text}</button>
    )
}


export const ButtonLinkComponent = ({ text, href }: { text: string, href: string }) => {
    return <Link href={href} className={styles.button}>{text}</Link>
}
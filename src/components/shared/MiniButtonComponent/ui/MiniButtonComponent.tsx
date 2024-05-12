import styles from './miniButtonComponent.module.css'
import Link from 'next/link'

export const MiniButtonComponent = ({ text, onClick }: { text: string, onClick: () => void }) => {
    return <button onClick={onClick} className={styles.button}>{text}</button>
}

export const MiniButtonLinkComponent = ({ text, href }: { text: string, href: string }) => {
    return <Link href={href} className={styles.button}>{text}</Link>
}
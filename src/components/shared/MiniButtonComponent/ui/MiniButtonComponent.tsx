import styles from './miniButtonComponent.module.css'
import Link from 'next/link'

export const MiniButtonComponent = ({ text, onClick, color }: { text: string, onClick: () => void, color?: 'danger' | 'reverse' }) => {
    return <button onClick={onClick} className={`${styles.button} ${color && styles[`${color}Color`]}`}>{text}</button>
}

export const MiniButtonLinkComponent = ({ text, href, color }: { text: string, href: string, color?: 'danger' }) => {
    return <Link href={href} className={`${styles.button} ${color && styles[`${color}Color`]}`}>{text}</Link>
}
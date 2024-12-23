import styles from './menuLinkComponent.module.css'

import Link from "next/link"

function linkStyle(isActive: boolean) {
    if (!isActive) {
        return styles.link
    } return `${styles.link} ${styles.active}`
}

export const MenuLinkComponent = ({ href, text, isActive }: { href: string, text: string, isActive: boolean }) => {

    return (
        <Link href={href} className={linkStyle(isActive)}>{text}</Link>
    )
}
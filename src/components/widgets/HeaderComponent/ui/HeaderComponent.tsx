import { AvatarBlock } from './components/AvatarBlock'
import { WalletBlock } from './components/WalletBlock'
import styles from './headerComponent.module.css'

export const HeaderComponent = () => {
    return (
        <section className={styles.header}>
            <AvatarBlock />
            <WalletBlock />
        </section>
    )
}
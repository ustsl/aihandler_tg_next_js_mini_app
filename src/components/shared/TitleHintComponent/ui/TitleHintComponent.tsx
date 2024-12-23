import styles from './titleHintComponent.module.css'

export const TitleHintComponent = ({ text }: { text: string }) => {
    return <h2 className={styles.hint}>{text}</h2>
}
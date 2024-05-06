import styles from './buttonComponent.module.css'

export const ButtonComponent = ({ text, onClick }: { text: string, onClick: () => void }) => {
    return (
        <button onClick={onClick} className={styles.button}>{text}</button>
    )
}
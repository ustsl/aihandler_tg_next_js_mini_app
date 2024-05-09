import styles from './miniButtonComponent.module.css'

export const MiniButtonComponent = ({ text, onClick }: { text: string, onClick: () => void }) => {
    return <button onClick={onClick} className={styles.button}>{text}</button>
}
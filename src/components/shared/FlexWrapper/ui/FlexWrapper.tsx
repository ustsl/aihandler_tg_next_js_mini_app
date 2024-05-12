import styles from './flexWrapper.module.css';

export const FlexWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.block}>
            {children}
        </div>
    )
}
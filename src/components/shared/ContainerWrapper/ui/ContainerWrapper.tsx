import styles from './containerWrapper.module.css';

export const ContainerWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.block}>
            {children}
        </div>
    )
}
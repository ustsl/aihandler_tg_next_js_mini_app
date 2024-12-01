import styles from './flexWrapper.module.css';

export const FlexWrapper = ({ children, justify }: { children: React.ReactNode, justify?: "spaceBetween" }) => {
    return (
        <div className={`${styles.block} ${justify && styles[justify]}`}>
            {children}
        </div>
    )
}
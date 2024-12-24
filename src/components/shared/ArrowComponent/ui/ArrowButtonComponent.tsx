import styles from './arrowComponent.module.css';

export const ArrowButtonComponent = ({
    direction,
    onClick,
}: {
    direction: 'left' | 'right' | 'up' | 'down';
    onClick: () => void;
}) => {
    return (
        <button
            className={`${styles.arrow} ${styles[direction]}`}
            onClick={onClick}
            aria-label={`Arrow ${direction}`}
        >
            <span className={styles.icon}></span>
        </button>
    );
};

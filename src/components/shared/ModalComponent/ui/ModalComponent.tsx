import styles from './modalComponent.module.css';
import classNames from 'classnames';

interface IModalComponentProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const ModalComponent = ({ isOpen, onClose, children }: IModalComponentProps) => {
    const modalWindowClass = classNames(styles.modalWindow, {

    });

    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.overlay}>
            <div className={modalWindowClass}>
                <div className={styles.modalBody}>
                    {children}
                    <button className={styles.closeButton} onClick={onClose}>×</button>
                </div>
            </div>
        </div>
    );
};

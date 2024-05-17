import styles from './copyBlockContainer.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';


export const CopyBlockContainer = ({ children, textToCopy }: { children: React.ReactNode, textToCopy: string }) => {


    const handleCopy = (textToCopy: string) => {

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                console.log('Text copied to clipboard');
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    };

    return (
        <div className={styles.code}>
            <div className={styles.flex}>
                <div className={styles.copy} onClick={() => handleCopy(textToCopy)}>
                    <FontAwesomeIcon icon={faCopy} width={40} height={40} />
                </div>
            </div>
            {children}
        </div>
    )
};

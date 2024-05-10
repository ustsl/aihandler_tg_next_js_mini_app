'use client'

import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './questionDataWrapper.module.css'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'


export const QuestionDataWrapper = ({ children, text }: { children: React.ReactNode, text: string }) => {
    const [showPrompt, setShowPrompt] = useState(false);
    const promptRef = useRef<HTMLDivElement>(null);

    const togglePrompt = () => {
        setShowPrompt(!showPrompt);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (promptRef.current && !promptRef.current.contains(event.target as Node)) {
                setShowPrompt(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.block}>
            <div className={styles.flex}>
                {children}
                <div className={styles.questionBlock} onClick={togglePrompt}>
                    <FontAwesomeIcon icon={faQuestion} width={7} height={7} color='white' fontWeight={500} />
                </div>
            </div>
            <div ref={promptRef} className={`${styles.prompt} ${showPrompt && styles.show}`} onClick={togglePrompt}>
                {text}
            </div>
        </div>
    );
};
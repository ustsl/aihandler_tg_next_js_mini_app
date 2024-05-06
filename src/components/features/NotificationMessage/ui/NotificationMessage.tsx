// Notification.js or Notification.tsx if you're using TypeScript

import React, { useEffect, useState } from 'react';
import styles from './notification.module.css'; // Ensure you create corresponding CSS

export const NotificationComponent = ({ message, setMessage }: { message: string, setMessage: (data: string) => void }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (message) {
            setShow(true);
            const timer = setTimeout(() => {
                setShow(false);
                setMessage('')
            }, 3500);
            return () => clearTimeout(timer);
        }
    }, [message, setMessage]);

    if (!show) return null;

    return (
        <div className={styles.notification}>
            {message}
        </div>
    );
};
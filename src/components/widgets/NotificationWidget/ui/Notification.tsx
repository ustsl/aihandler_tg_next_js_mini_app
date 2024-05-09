'use client'

import React, { useEffect, useState } from 'react';
import styles from './notification.module.css';
import { useNotificationStore } from './useNotificationStore';

export const NotificationComponent = () => {

    const { message, show, removeNotification } = useNotificationStore((state: any) => state);

    useEffect(() => {

        if (show) {
            const timer = setTimeout(() => {
                removeNotification()
            }, 5000);
            return () => clearTimeout(timer);
        }

    }, [show]);

    if (!show) return null;

    return (
        <div className={styles.notification}>
            {message}
        </div>
    );
};
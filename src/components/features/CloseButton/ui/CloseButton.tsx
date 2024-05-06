'use client'

import { ContainerWrapper } from '@/components/shared/ContainerWrapper'
import styles from './closeButton.module.css'

import { useTelegramStore } from "@/store/useTelegramStore"

export const CloseButton = () => {
    const { tg } = useTelegramStore((state: any) => state)

    function onClick() {
        tg?.close()
    }

    return (
        <ContainerWrapper>
            <button onClick={onClick} className={styles.button}>Return to telegram chat</button>
        </ContainerWrapper>
    )
}
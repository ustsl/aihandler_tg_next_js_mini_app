'use client'

import { ContainerWrapper } from '@/components/shared/ContainerWrapper'
import { useTelegramStore } from "@/store/useTelegramStore"
import { MiniButtonComponent } from '@/components/shared/MiniButtonComponent'

export const CloseButton = () => {
    const { tg } = useTelegramStore((state: any) => state)

    function onClick() {
        tg?.close()
    }

    return (
        <ContainerWrapper>
            <MiniButtonComponent text="Return to telegram chat" onClick={onClick} />
        </ContainerWrapper>
    )
}
'use client'

import { useTelegramStore } from "@/store/useTelegramStore"
import { MiniButtonComponent } from '@/components/shared/MiniButtonComponent'

export const CloseButton = ({ text }: { text: string }) => {
    const { tg } = useTelegramStore((state: any) => state)

    function onClick() {
        tg?.close()
    }

    return (

        <MiniButtonComponent text={text} onClick={onClick} />
    )
}
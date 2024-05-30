'use client'

import translate from './paymentWidget.translate.json'

import styles from './paymentWidget.module.css'

import { FlexWrapper } from "@/components/shared/FlexWrapper"
import { InputElement } from "@/components/shared/InputElement"
import { useNotificationStore } from "@/components/widgets/NotificationWidget"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { cryptoCloudResponse, paymentServiceResponse } from "./queries"
import { useTelegramStore } from "@/store/useTelegramStore"
import { YMCOUNTER } from '@/const'
import { useDataStore } from '@/store/useDataStore'
import { baseLanguages } from '@/types/baseTypes'

export const PaymentWidget = () => {

    const { userLanguage } = useDataStore((state: any) => state);
    const translation = translate[`${userLanguage as baseLanguages}`]

    const router = useRouter()

    const [amount, setAmount] = useState<number>(30)
    const { userId } = useTelegramStore((state: any) => state)
    const { setNotification } = useNotificationStore((state: any) => state);

    async function handlePaymentAuth(event: any) {
        event.preventDefault();
        try {
            const response = await cryptoCloudResponse(amount);
            if (response && response.status == 200 && response?.data) {
                const successUrl = response.data.pay_url as string
                const invoiceId = response.data.invoice_id as string
                const paymentServiceResult = await paymentServiceResponse(amount, invoiceId, `${userId}`)
                if (paymentServiceResult && paymentServiceResult.status == 200) {
                    setNotification({ message: translation.success });
                    window.ym(YMCOUNTER, 'reachGoal', 'startPayment');
                    window.dataLayer.push({
                        'event': 'startPayment',
                    });
                    router.push(successUrl)
                }
            }


        } catch (error) {
            console.log(error)
            setNotification({ message: translation.error });
        }
    }

    return (
        <form onSubmit={handlePaymentAuth} >
            <FlexWrapper>
                <InputElement
                    label={translation.enter}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} placeholder={"100"} name={translation.field} />
                <button className={styles.button}>{translation.button}</button>
            </FlexWrapper>
        </form>
    )
}


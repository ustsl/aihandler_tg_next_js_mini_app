'use client'

import styles from './paymentWidget.module.css'

import { FlexWrapper } from "@/components/shared/FlexWrapper"
import { InputElement } from "@/components/shared/InputElement"
import { useNotificationStore } from "@/components/widgets/NotificationWidget"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { cryptoCloudResponse, paymentServiceResponse } from "./queries"
import { useTelegramStore } from "@/store/useTelegramStore"

export const PaymentWidget = () => {
    const router = useRouter()

    const [amount, setAmount] = useState<number>(30)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [isProcess, setIsProcess] = useState(false);
    const { userId } = useTelegramStore((state: any) => state)
    const { setNotification } = useNotificationStore((state: any) => state);

    async function handlePaymentAuth(event: any) {
        event.preventDefault();
        setIsProcess(true); // Устанавливаем флаг, что процесс начался

        try {
            const response = await cryptoCloudResponse(amount); // Вызываем функцию cryptoCloudResponse
            if (response && response.status == 200 && response?.data) {
                console.log(123)
                const successUrl = response.data.pay_url as string
                const invoiceId = response.data.invoice_id as string
                const paymentServiceResult = await paymentServiceResponse(amount, invoiceId, userId)
                console.log(paymentServiceResult)
                console.log(98)
                if (paymentServiceResult && paymentServiceResult.status == 200) {

                    router.push(successUrl)
                }
            }
            console.log(response)
            console.log(response.status)
            setNotification({ message: "Payment processed successfully." });
        } catch (error) {
            setIsProcess(false); // Сбрасываем флаг, что процесс закончился

            // Здесь можно обработать ошибку, например, установить уведомление об ошибке
            setError(error as string);
            console.log(error)
            setNotification({ message: "Payment processing failed. Please try again later." });
        }
    }

    return (
        <form onSubmit={handlePaymentAuth} >
            <FlexWrapper>
                <InputElement
                    label="Enter payment amount (USD)"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} placeholder={"100"} name={"Amount"} />
                <button className={styles.button}>Start the payment process</button>
            </FlexWrapper>
        </form>
    )
}


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
        try {
            const response = await cryptoCloudResponse(amount);
            if (response && response.status == 200 && response?.data) {
                const successUrl = response.data.pay_url as string
                const invoiceId = response.data.invoice_id as string
                const paymentServiceResult = await paymentServiceResponse(amount, invoiceId, userId)
                if (paymentServiceResult && paymentServiceResult.status == 200) {
                    setNotification({ message: "Payment processed successfully." });
                    router.push(successUrl)
                }
            }
            console.log(response)
            console.log(response.status)

        } catch (error) {
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


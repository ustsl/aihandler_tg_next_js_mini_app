import { CRYPTOCLOUD_SHOP_ID, CRYPTOCLOUD_TOKEN } from "@/api/paymentAPI";
import { postResponse } from "@/api/restAPI";
import { PAYMENT_SECRET_KEY } from "@/api/settings";


export async function cryptoCloudResponse(amount: number) {
    const payload = {
        shop_id: CRYPTOCLOUD_SHOP_ID,
        amount: amount
    };
    const url = "https://api.cryptocloud.plus/v1/invoice/create"
    try {
        const response = await postResponse({
            token: `Token ${CRYPTOCLOUD_TOKEN as string}`,
            body: payload, method: url
        })
        return response
    } catch (error) {
        throw error;
    }
}


export async function paymentServiceResponse(amount: number, uuid: string, user_id: string): Promise<any> {
    const body = {
        "uuid": uuid,
        "user_id": user_id,
        "payment_system_name": "cryptocloud",
        "service_system_name": "imvo",
        "amount": amount
    };

    const url = 'https://payment.imvo.site/v1/invoice';

    try {
        const response = await postResponse({ token: PAYMENT_SECRET_KEY as string, body: body, method: url });
        return response;
    } catch (error) {
        throw error;
    }
}

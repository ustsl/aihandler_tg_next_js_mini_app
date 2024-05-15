import axios from "axios";

export const CRYPTOCLOUD_TOKEN = process.env.CRYPTOCLOUD_SECRET_KEY
export const CRYPTOCLOUD_SHOP_ID = process.env.CRYPTOCLOUD_SHOP_ID
export const CRYPTOCLOUD_HEADERS = {
    'Authorization': `Token ${CRYPTOCLOUD_TOKEN as string}`,
}


interface IPaymentPostResponse {
    headers: any;
    body?: any;
    url: string;
}

export async function paymentPostResponse({ headers, body, url }: IPaymentPostResponse) {

    try {
        const response = await axios.post(url, body, { headers });
        return response;
    } catch (error) {
        return raiseAxiosError(error)
    }
}


export function raiseAxiosError(error: string | unknown) {
    if (axios.isAxiosError(error)) {
        console.log(error);
        return error.response;
    }
    console.error(error);
    throw error;
}
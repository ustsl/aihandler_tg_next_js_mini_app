import axios from "axios";
import { createHeaders, raiseAxiosError } from "./restAPI";

export async function getExtendResponse() {
    const url = "https://api.roundc.com/v1/userfiles?filepath=files/private/2068/2024/24/1733329462_3b8cbbb5eeea4ecd8c0b2eaa52e2d551.png"
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMDQ1LCJlbWFpbCI6InZpYWNoZXNsYXYudXN0aW5vdi5kZXZAZ21haWwuY29tIiwiZXhwIjoxNzMzNDIwNjM5fQ.YznQL7UeCE4Q22AWiT53MSIu8Yj9RNSmm_0wU58TYfc",
    };
    try {
        const response = await axios.get(url, { headers, responseType: 'blob' });
        return response.data;
    } catch (error) {
        return raiseAxiosError(error)
    }
}



export const API_DOMAIN = "https://imvo.qspk.me"
export const API_VERSION: string = "/v1";
export const API_URL = API_DOMAIN + API_VERSION
export const TOKEN = process.env.API_SECRET_KEY
export const PAYMENT_SECRET_KEY = process.env.PAYMENT_SECRET_KEY


export const HEADERS = {
    'Authorization': TOKEN as string,
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
}


export const PAYMENT_HEADERS = {
    'Authorization': PAYMENT_SECRET_KEY as string,
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
}
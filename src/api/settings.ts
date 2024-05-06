export const API_DOMAIN = "https://aihandler.qsbot.app"
export const API_VERSION: string = "/v1";
export const API_URL = API_DOMAIN + API_VERSION
export const TOKEN = process.env.API_SECRET_KEY


export const HEADERS = {
    'Authorization': TOKEN as string,
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
}
import axios from "axios";
import { API_DOMAIN, API_VERSION, HEADERS } from "./settings";
import { notFound } from "next/navigation";

export interface IAPI {
  token: string;
  method: string;
}

export interface IAPIPost extends IAPI {
  body: {}
  type?: "file"
  clean?: boolean
}


export async function getBaseQuery(method: string, headers = HEADERS) {
  const url = API_DOMAIN + API_VERSION + method;

  const res = await fetch(url, { headers: headers })

  if (!res.ok) {
    return false
  }
  return res.json()
}




export async function getResponse({ token, method }: IAPI) {
  const url = API_DOMAIN + API_VERSION + method;
  const headers = createHeaders(token)
  try {
    const response = await axios.get(url, { headers });
    return response;
  } catch (error) {
    return raiseAxiosError(error)
  }
}


export async function postResponse({ token, body, method }: IAPIPost) {

  const headers = createHeaders(token)
  try {
    const response = await axios.post(method, body, { headers });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Если ошибка является экземпляром AxiosError, возвращаем информацию об ошибке
      const data = error.response ? error.response.data : error.message;
      data['error'] = true
      return data
    } else {
      raiseAxiosError
    }
  }
}

export async function putResponse({ token, body, method }: IAPIPost) {
  const url = API_DOMAIN + API_VERSION + method;
  const headers = createHeaders(token)
  try {
    const response = await axios.put(url, body, { headers });

    return response;
  } catch (error) {
    console.log(error)
    return raiseAxiosError(error)
  }
}

export async function patchResponse({ token, body, method }: IAPIPost) {
  const url = API_DOMAIN + API_VERSION + method;
  const headers = createHeaders(token)
  try {
    const response = await axios.patch(url, body, { headers });

    return response;
  } catch (error) {
    console.log(error)
    return raiseAxiosError(error)
  }
}


export async function deleteResponse({ token, method }: IAPI) {
  const headers = createHeaders(token)
  try {
    const response = await axios.delete(method, { headers });
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

export function createHeaders(token: string) {
  return {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Authorization": token,
  };
}

export function createLiteHeaders(token: string) {
  return {
    "X-Requested-With": "XMLHttpRequest",
    "Authorization": `Token ${token}`,
  };
}

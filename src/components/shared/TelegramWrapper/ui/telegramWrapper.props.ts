interface TelegramWebApp {
    close: () => void;
    sendData: Function;
    initDataUnsafe: {
        query_id: any;
        user: {
            username: string | undefined;
            id: number;
        }
    }
}

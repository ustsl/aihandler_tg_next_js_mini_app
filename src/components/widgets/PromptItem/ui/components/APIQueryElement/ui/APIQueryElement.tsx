import styles from './apiQueryElement.module.css'

export const APIQueryElement = ({ tg, userToken, uuid }: { tg: string, userToken: string, uuid: string }) => {
    return (
        <div className={styles.code}>
            <p>
                URL: https://aihandler.qsbot.app/v1/queries/{tg}
            </p>

            <p>
                Headers: {`{'Authorization': '${userToken}'}`}
            </p>

            <p>
                Body: {`{"prompt_id": "${uuid}",
                                "query": "your text query"
                                }`}
            </p>
        </div>
    )
}
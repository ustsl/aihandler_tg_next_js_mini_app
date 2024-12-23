import React from 'react';
import { CopyBlockContainer } from '@/components/shared/CopyBlockContainer';

export const APIQueryElement = ({ tg, userToken, uuid }: { tg: string, userToken: string, uuid: string }) => {

    const url = `URL: https://aihandler.qsbot.app/v1/queries/${tg}`;
    const headers = `Headers: {'Authorization': '${userToken}'}`;
    const body = `Body: {"prompt_id": "${uuid}", "query": "your text query"}`;
    const textToCopy = `${url}\n${headers}\n${body}`;


    return (
        <CopyBlockContainer textToCopy={textToCopy}>
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
        </CopyBlockContainer>

    )
};

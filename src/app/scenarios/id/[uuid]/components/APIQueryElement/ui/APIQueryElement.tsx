'use client'

import React from 'react';
import { CopyBlockContainer } from '@/components/shared/CopyBlockContainer';
import { useDataStore } from '@/store/useDataStore';
import { useTelegramStore } from '@/store/useTelegramStore';
import { ContainerWrapper } from '@/components/shared/ContainerWrapper';

export const APIQueryElement = ({ uuid }: { uuid: string }) => {

    const { userToken } = useDataStore((state: any) => state);
    const { userId } = useTelegramStore((state: any) => state)

    const url = `URL: https://aihandler.qsbot.app/v1/queries/${userId && userId}/scenario`;
    const headers = `Headers: {'Authorization': '${userToken && userToken}'}`;
    const body = `Body: {"scenario_id": "${uuid}", "query": "your text query"}`;
    const textToCopy = `${url}\n${headers}\n${body}`;


    return (
        <ContainerWrapper>
            <CopyBlockContainer textToCopy={textToCopy}>
                {userId &&
                    <p>
                        URL: https://aihandler.qsbot.app/v1/queries/{userId}/scenario
                    </p>}
                {userToken &&
                    <p>
                        Headers: {`{'Authorization': '${userToken}'}`}
                    </p>}

                <p>
                    Body: {`{"scenario_id": "${uuid}", "query": "your text query"}`}
                </p>
            </CopyBlockContainer>
        </ContainerWrapper>

    )
};

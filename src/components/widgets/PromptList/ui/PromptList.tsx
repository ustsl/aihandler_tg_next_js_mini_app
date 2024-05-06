'use client'

import styles from './promptList.module.css'

import { useEffect, useState } from 'react';

import { getBaseQuery } from '@/api/restAPI';
import { useDataStore } from '@/store/useDataStore';
import { useTelegramStore } from '@/store/useTelegramStore';

import { ContainerWrapper } from '@/components/shared/ContainerWrapper'
import { SearchBlock } from './components/SearchBlock'
import { ItemsBlock } from './components/ItemsBlock';


export const PromptList = () => {

    const [results, setResults] = useState<any>([])
    const [isLoad, setIsLoad] = useState<boolean>(false)

    const { userToken } = useDataStore((state: any) => state);
    const { userId } = useTelegramStore((state: any) => state)

    function userDataCreate() {
        const headers = { 'Authorization': userToken as string } as any
        const queryLink = `/prompts/${userId}`
        getBaseQuery(queryLink, headers).then((res) => {
            if (res?.result) {
                setResults(res?.result)
                setIsLoad(true)
            }
        })
    }

    useEffect(() => {
        if (userId && userToken) {
            userDataCreate()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <ContainerWrapper>
            <section className={styles.block}>
                <h2 className={styles.hint}>
                    Available prompts
                </h2>
                <SearchBlock />
                {isLoad && <ItemsBlock results={results} />}
            </section>
        </ContainerWrapper>
    )
}
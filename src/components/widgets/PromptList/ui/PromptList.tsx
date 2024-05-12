'use client'

import styles from './promptList.module.css'

import { useEffect, useState } from 'react';

import { getBaseQuery } from '@/api/restAPI';
import { useDataStore } from '@/store/useDataStore';
import { useTelegramStore } from '@/store/useTelegramStore';

import { ContainerWrapper } from '@/components/shared/ContainerWrapper'
import { SearchBlock } from './components/SearchBlock'
import { ItemsBlock } from './components/ItemsBlock';
import { Pagination } from './components/Pagination';
import { QuestionDataWrapper } from '@/components/shared/QuestionDataWrapper';


export const PromptList = () => {

    const [results, setResults] = useState<any>([])
    const [offset, setOffset] = useState<number>(0)
    const [limit, setLimit] = useState<number>(0)
    const [isLoad, setIsLoad] = useState<boolean>(false)

    const { userToken } = useDataStore((state: any) => state);
    const { userId } = useTelegramStore((state: any) => state)

    function userDataCreate() {
        const headers = { 'Authorization': userToken as string } as any
        const queryLink = `/prompts/${userId}?offset=${offset}`
        getBaseQuery(queryLink, headers).then((res) => {
            if (res?.result) {
                setResults(res?.result)
                setLimit(parseInt(res?.total))
                setIsLoad(true)
            }
        })
    }

    useEffect(() => {
        if (userId && userToken) {
            userDataCreate()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offset]);

    return (
        <ContainerWrapper>
            <section className={styles.block}>
                <QuestionDataWrapper text={'A list of available prompts is displayed here. Go to any of them to edit, get an API link, or select as a chat preset.'}>
                    <h2 className={styles.hint}>
                        Available prompts
                    </h2>
                </QuestionDataWrapper>
                {isLoad &&
                    results.length > 0 ?
                    <>
                        <SearchBlock />
                        <ItemsBlock results={results} />
                    </>
                    :
                    <p>No available prompts. Create your first prompt</p>

                }
                <Pagination length={results.length} offset={offset} limit={limit} setOffset={setOffset} />
            </section>
        </ContainerWrapper >
    )
}
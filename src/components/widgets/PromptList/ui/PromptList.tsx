'use client'

import styles from './promptList.module.css'
import translate from './promptList.translate.json'

import { useEffect, useState } from 'react';

import { getBaseQuery } from '@/api/restAPI';
import { useDataStore } from '@/store/useDataStore';
import { useTelegramStore } from '@/store/useTelegramStore';

import { ContainerWrapper } from '@/components/shared/ContainerWrapper'
import { SearchBlock } from './components/SearchBlock'
import { ItemsBlock } from './components/ItemsBlock';
import { Pagination } from './components/Pagination';
import { QuestionDataWrapper } from '@/components/shared/QuestionDataWrapper';
import { baseLanguages } from '@/types/baseTypes';


export const PromptList = () => {

    const { userLanguage } = useDataStore((state: any) => state);

    const translation = translate[`${userLanguage as baseLanguages}`]


    const [results, setResults] = useState<any>([])
    const [offset, setOffset] = useState<number>(0)
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [limit, setLimit] = useState<number>(0)
    const [isLoad, setIsLoad] = useState<boolean>(false)

    const { userToken } = useDataStore((state: any) => state);
    const { userId } = useTelegramStore((state: any) => state)

    function userDataCreate() {
        const headers = { 'Authorization': userToken as string } as any
        const queryLink = `/prompts/${userId}?offset=${offset}&search_query=${searchQuery}`
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
    }, [offset, searchQuery]);

    return (
        <ContainerWrapper>
            <section className={styles.block}>
                <QuestionDataWrapper text={translation.hint}>
                    <h2 className={styles.hint}>
                        {translation.title}
                    </h2>
                </QuestionDataWrapper>
                <SearchBlock searchQuery={searchQuery} setSearchQuery={setSearchQuery} text={translation.search} />
                {isLoad &&
                    results.length > 0 ?

                    <ItemsBlock results={results} />
                    :
                    <p>{translation.noResult}</p>
                }
                <Pagination length={results.length} offset={offset} limit={limit} setOffset={setOffset} next={translation.next} prev={translation.prev} />
            </section>
        </ContainerWrapper >
    )
}
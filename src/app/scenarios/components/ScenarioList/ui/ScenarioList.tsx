'use client'


import translate from './scenarioList.translate.json'

import { useEffect, useState } from 'react';

import { getBaseQuery } from '@/api/restAPI';
import { useDataStore } from '@/store/useDataStore';
import { useTelegramStore } from '@/store/useTelegramStore';

import { ContainerWrapper } from '@/components/shared/ContainerWrapper'
import { SearchBlock } from '../../../../../components/features/SearchBlock'
import { ItemsBlock } from '../../../../../components/entities/ItemsBlock';
import { Pagination } from '../../../../../components/entities/Pagination';
import { QuestionDataWrapper } from '@/components/shared/QuestionDataWrapper';
import { baseLanguages } from '@/types/baseTypes';
import { TitleHintComponent } from '@/components/shared/TitleHintComponent';
import { GridBlock } from '@/components/shared/GridBlock';


export const ScenarioList = () => {

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
        const queryLink = `/scenarios/${userId}?offset=${offset}&search_query=${searchQuery}`
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
            <GridBlock gridSize='S'>
                <QuestionDataWrapper text={translation.hint}>
                    <TitleHintComponent text={translation.title} />
                </QuestionDataWrapper>
                <SearchBlock searchQuery={searchQuery} setSearchQuery={setSearchQuery} text={translation.search} />
                {isLoad &&
                    results.length > 0 ?

                    <ItemsBlock results={results} segment='scenarios/id/' />
                    :
                    <p>{translation.noResult}</p>
                }
                <Pagination length={results.length} offset={offset} limit={limit} setOffset={setOffset} next={translation.next} prev={translation.prev} />
            </GridBlock>
        </ContainerWrapper >
    )
}
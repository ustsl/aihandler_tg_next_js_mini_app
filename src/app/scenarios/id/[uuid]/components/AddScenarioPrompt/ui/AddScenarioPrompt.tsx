'use client'

import { SearchBlock } from '@/components/features/SearchBlock'
import styles from './addScenarioPrompt.module.css'
import { MiniButtonComponent } from '@/components/shared/MiniButtonComponent'
import { GridBlock } from '@/components/shared/GridBlock'
import { ContainerWrapper } from '@/components/shared/ContainerWrapper'
import { TitleHintComponent } from '@/components/shared/TitleHintComponent'
import { useEffect, useState } from 'react'
import { getBaseQuery } from '@/api/restAPI'
import { useDataStore } from '@/store/useDataStore'
import { useTelegramStore } from '@/store/useTelegramStore'
import { PromptListItemRaw } from '@/types/raw/prompts'
import useScenarioStore from '@/store/scenario.store'


export const AddScenarioPrompt = () => {

    const [results, setResults] = useState<any>([])
    const [searchQuery, setSearchQuery] = useState<string>('')

    const { addPrompt, prompts } = useScenarioStore()

    const { userToken } = useDataStore((state: any) => state);
    const { userId } = useTelegramStore((state: any) => state)

    function userDataCreate() {
        const headers = { 'Authorization': userToken as string } as any
        const queryLink = `/prompts/${userId}?&search_query=${searchQuery}`
        getBaseQuery(queryLink, headers).then((res) => {
            if (res?.result) {
                setResults(res?.result)
            }
        })
    }

    useEffect(() => {
        if (searchQuery.length === 0) {
            setResults([])
            return
        }
        if (userId && userToken && searchQuery.length > 0) {
            userDataCreate()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery]);

    function handleAddPrompt(prompt: PromptListItemRaw) {

        addPrompt({
            prompt_id: prompt.uuid,
            title: prompt.title,
            description: prompt.description,
            order: prompts.length + 1,
            independent: true,
            model: prompt.model
        })

    }


    return (
        <ContainerWrapper>
            <GridBlock gridSize='S'>
                <GridBlock gridSize='XS'>
                    <TitleHintComponent text="Add element to scenario" />
                    <SearchBlock searchQuery={searchQuery} setSearchQuery={setSearchQuery} text={'Insert prompt name'} />
                </GridBlock>

                {results && results.length > 0 &&
                    <div className={styles.prompts}>
                        {results && results.length > 0 && results.map((item: PromptListItemRaw, index: any) => {
                            return (
                                <button key={index} className={styles.prompt} onClick={() => handleAddPrompt(item)}>
                                    {item.title}
                                </button>)
                        })}</div>}

            </GridBlock>
        </ContainerWrapper>
    )
}
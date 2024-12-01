'use client'

import { getBaseQuery } from "@/api/restAPI";
import { ContainerWrapper } from "@/components/shared/ContainerWrapper";
import { FlexWrapper } from "@/components/shared/FlexWrapper";
import { GridBlock } from "@/components/shared/GridBlock";
import { MiniButtonLinkComponent } from "@/components/shared/MiniButtonComponent";
import { useDataStore } from "@/store/useDataStore";
import { useTelegramStore } from "@/store/useTelegramStore";
import { QueryResultRaw } from "@/types/raw/analytics";
import { useEffect, useState } from "react";
import { QueryBlockComponent } from "./components/QueryBlockComponent/ui/QueryBlockComponent";
import { Pagination } from "@/components/widgets/PromptList/ui/components/Pagination";
import { TitleBlock } from "@/components/shared/TitleElement";


export default function Analytics({ params }: { params: any }) {

    const { userToken } = useDataStore((state: any) => state);
    const { userId } = useTelegramStore((state: any) => state);

    const [story, setStory] = useState<QueryResultRaw[]>([])
    const [limit, setLimit] = useState<number>(0)
    const [offset, setOffset] = useState<number>(0)
    const [isLoad, setIsLoad] = useState<boolean>(false)
    function userDataCreate() {
        const headers = { 'Authorization': userToken as string } as any
        const queryLink = `/queries/${userId}/${params.uuid}?offset=${offset}`
        getBaseQuery(queryLink, headers).then((res) => {
            if (res?.result) {
                setStory(res?.result as QueryResultRaw[])
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

        <>
            <ContainerWrapper>
                <FlexWrapper>

                    <MiniButtonLinkComponent href={`/prompts/id/${params.uuid}`} text="Back to prompt" />
                    <MiniButtonLinkComponent href={`/`} text="Prompt list" />
                </FlexWrapper>
            </ContainerWrapper>
            <ContainerWrapper>
                <TitleBlock tag="h1" text={`Total queries: ${limit}`} />
            </ContainerWrapper>
            <ContainerWrapper>

                {isLoad &&
                    story.length > 0 ? story.map(item => {
                        return (
                            <QueryBlockComponent key={item.uuid} item={item} />
                        )
                    })
                    :
                    <p>No results</p>
                }
            </ContainerWrapper>
            <Pagination length={story.length} offset={offset} limit={limit} setOffset={setOffset} next={"Next"} prev={"Back"} />

        </>


    );
}

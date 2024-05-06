'use client'

import { PromptItem } from "@/components/widgets/PromptItem";

export default function Prompt({ params }: { params: any }) {



    return (

        <>
            <PromptItem uuid={params.uuid} />
        </>


    );
}

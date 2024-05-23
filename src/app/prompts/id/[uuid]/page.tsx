'use client'

import { DeletePromptWidget } from "@/components/widgets/DeletePrompt";
import { PromptItem } from "@/components/widgets/PromptItem";
import { SetPrompt } from "@/components/widgets/SetPrompt";

export default function Prompt({ params }: { params: any }) {



    return (

        <>
            <SetPrompt uuid={params.uuid} />
            <PromptItem uuid={params.uuid} />
            <DeletePromptWidget uuid={params.uuid} />
        </>


    );
}

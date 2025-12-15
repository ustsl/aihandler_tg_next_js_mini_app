'use client'

import { ContainerWrapper } from "@/components/shared/ContainerWrapper";
import { FlexWrapper } from "@/components/shared/FlexWrapper";
import { MiniButtonLinkComponent } from "@/components/shared/MiniButtonComponent";
import { DeletePromptWidget } from "@/components/features/DeletePrompt";
import { PromptItem } from "@/app/components/PromptItem";
import { SetPrompt } from "@/app/components/SetPrompt";
import { use } from "react";

export default function Prompt({
    params,
}: {
    params: Promise<{ uuid: string }>;
}) {
    const { uuid } = use(params);

    return (
        <>

            <PromptItem uuid={uuid} />
            <ContainerWrapper>
                <FlexWrapper justify="spaceBetween">
                    <MiniButtonLinkComponent href={`/prompts/id/${uuid}/analytics`} text="Analytics" />
                    <DeletePromptWidget uuid={uuid} />
                </FlexWrapper>
            </ContainerWrapper>
        </>
    );
}

'use client'

import { ContainerWrapper } from "@/components/shared/ContainerWrapper";
import { FlexWrapper } from "@/components/shared/FlexWrapper";
import { MiniButtonLinkComponent } from "@/components/shared/MiniButtonComponent";
import { DeletePromptWidget } from "@/components/widgets/DeletePrompt";
import { PromptItem } from "@/app/components/PromptItem";
import { SetPrompt } from "@/app/components/SetPrompt";

export default function Prompt({ params }: { params: any }) {

    return (
        <>

            <PromptItem uuid={params.uuid} />
            <ContainerWrapper>
                <FlexWrapper justify="spaceBetween">
                    <MiniButtonLinkComponent href={`/prompts/id/${params.uuid}/analytics`} text="Analytics" />
                    <DeletePromptWidget uuid={params.uuid} />
                </FlexWrapper>
            </ContainerWrapper>
        </>
    );
}

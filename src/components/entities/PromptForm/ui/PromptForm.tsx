import { ButtonComponent } from "@/components/shared/ButtonComponent"
import { ContainerWrapper } from "@/components/shared/ContainerWrapper"
import { DropdownElement } from "@/components/shared/DropdownElement"
import { GridBlock } from "@/components/shared/GridBlock"
import { InputElement } from "@/components/shared/InputElement"
import { QuestionDataWrapper } from "@/components/shared/QuestionDataWrapper"

import { TextAreaElement } from "@/components/shared/TextAreaElement"

export type ModelOptions = 'gpt-3.5-turbo' | 'gpt-4-turbo'

export const modelOptions: ModelOptions[] = [
    'gpt-3.5-turbo',
    'gpt-4-turbo'
]

export type ModelSize = 'no memory' | 'low' | 'medium' | 'large';

export const modelSizeOptions: ModelSize[] = [
    'no memory',
    'low',
    'medium',
    'large'
]


export function modelSizeTranslator(modelSizeOptions: ModelSize): number {
    switch (modelSizeOptions) {
        case 'no memory':
            return 0
        case 'low':
            return 5
        case 'medium':
            return 15
        case 'large':
            return 30
        default:
            return 0
    }
}


export function modelSizeReTranslator(modelSizeOptions: number): ModelSize {
    switch (modelSizeOptions) {
        case 0:
            return 'no memory'
        case 5:
            return 'low'
        case 15:
            return 'medium'
        case 30:
            return 'large'
        default:
            return 'no memory'
    }
}



export const PromptForm = ({ handleChange, fields, saveChangesHandler, isChanged }: {
    handleChange: (name: string, e: any) => void, fields: any, saveChangesHandler: () => void, isChanged: boolean
}) => {

    return (
        <GridBlock gridSize="XS">
            <ContainerWrapper>
                <GridBlock gridSize="S">
                    <InputElement placeholder={"Choose unique name"} name={"Choose unique name"} value={fields.title}
                        onChange={(e: any) => handleChange("title", e.target.value)} />
                    <TextAreaElement label={"Choose description"} value={fields.description} rows={2} cols={1}
                        onChange={(e: any) => handleChange("description", e.target.value)} />

                    <QuestionDataWrapper text="Write detailed instructions. The prompt will act on it. For example, you can write: you are a translator into Turkish. Translate from any language into Turkish. Just return the translation.">
                        <TextAreaElement label={"Create prompt"} value={fields.prompt} rows={10} cols={1}
                            onChange={(e: any) => handleChange("prompt", e.target.value)} />
                    </QuestionDataWrapper>

                    <QuestionDataWrapper text="The list of available models will be updated with both OpenAI models and models of third-party services">
                        <DropdownElement options={modelOptions} selectedValue={fields.model} label={"Choose model"}
                            onChange={(e: any) => handleChange("model", e.target.value)} />
                    </QuestionDataWrapper>

                    <QuestionDataWrapper text="The higher the value, the more previous answers the AI remembers. But the higher the chance that the AI will respond less accurately, and also the higher the cost of use. If the task does not require a dynamic context, do not use memory storage. But it can be useful in complex prompts.">
                        <DropdownElement options={modelSizeOptions} selectedValue={fields.size} label={"Choose memory size"}
                            onChange={(e: any) => handleChange("size", e.target.value)} />
                    </QuestionDataWrapper>

                </GridBlock>
            </ContainerWrapper>
            {isChanged &&
                <ContainerWrapper><ButtonComponent text={'Save'} onClick={saveChangesHandler} /></ContainerWrapper>
            }
        </GridBlock>
    )
}
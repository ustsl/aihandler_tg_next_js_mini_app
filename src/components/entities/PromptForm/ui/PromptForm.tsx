import { PromptDataGenerator } from "@/components/features/PromptDataGenerator"
import { ButtonComponent } from "@/components/shared/ButtonComponent"
import { ContainerWrapper } from "@/components/shared/ContainerWrapper"
import { DropdownElement } from "@/components/shared/DropdownElement"
import { GridBlock } from "@/components/shared/GridBlock"
import { InputElement } from "@/components/shared/InputElement"
import { QuestionDataWrapper } from "@/components/shared/QuestionDataWrapper"

import { TextAreaElement } from "@/components/shared/TextAreaElement"

export type ModelOptions = 'gpt-3.5-turbo' | 'gpt-4-turbo' | 'gpt-4o'

export const modelOptions: ModelOptions[] = [
    'gpt-3.5-turbo',
    'gpt-4-turbo',
    'gpt-4o'
]

export type ModelSize = 'no memory' | 'one message' | 'low' | 'medium' | 'large';

export const modelSizeOptions: ModelSize[] = [
    'no memory',
    'one message',
    'low',
    'medium',
    'large'
]

export type isOpen = 'private' | 'open'

export const isOpenOptions: isOpen[] = [
    'private',
    'open'
]


export function modelSizeTranslator(modelSizeOptions: ModelSize): number {
    switch (modelSizeOptions) {
        case 'no memory':
            return 0
        case 'one message':
            return 1
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
        case 1:
            return 'one message'
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

export function isOpenTranslator(isOpen: isOpen): boolean {
    switch (isOpen) {
        case 'open':
            return true
        case 'private':
            return false
    }
}


export function isOpenReTranslator(isOpen: boolean): isOpen {
    switch (isOpen) {
        case true:
            return 'open'
        case false:
            return 'private'
    }
}


export const PromptForm = ({ handleChange, fields, saveChangesHandler, isChanged }: {
    handleChange: (name: string, e: any) => void, fields: any, saveChangesHandler: () => void, isChanged: boolean
}) => {



    const titleQuestion = PromptDataGenerator('Use a concise and clear name for comfortable navigation.',
        "Choose unique name")
    const descriptionQuestion = PromptDataGenerator('The description of the prompt does not affect its functionality and serves as a navigation hint.',
        "Choose description")
    const promptQuestion = PromptDataGenerator('Write detailed instructions. The prompt will act on it. For example, you can write: you are a translator into Turkish. Translate from any language into Turkish. Just return the translation.',
        "Create prompt")
    const modelQuestion = PromptDataGenerator('The list of available models will be updated with both OpenAI models and models of third-party services',
        "Choose model")

    const memoryQuestion = PromptDataGenerator('The higher the value, the more previous answers the AI remembers. But the higher the chance that the AI will respond less accurately, and also the higher the cost of use. If the task does not require a dynamic context, do not use memory storage. But it can be useful in complex prompts.', 'Choose memory size')

    const isOpenQuestion = PromptDataGenerator('Private prompts can only be used within the context of working with your account. Open prompts are available to everyone. You will receive 10% of the funds in your account from the amount of their use.', 'Access to prompt')

    return (
        <GridBlock gridSize="XS">
            <ContainerWrapper>
                <GridBlock gridSize="S">
                    <InputElement placeholder={"Choose unique name"} label={titleQuestion} name={"Choose unique name"} value={fields.title}
                        onChange={(e: any) => handleChange("title", e.target.value)} />
                    <TextAreaElement label={descriptionQuestion} value={fields.description} rows={2} cols={1}
                        placeholder="Choose description"
                        onChange={(e: any) => handleChange("description", e.target.value)} />
                    <TextAreaElement placeholder={"Create Prompt"} label={promptQuestion} value={fields.prompt} rows={10} cols={1}
                        onChange={(e: any) => handleChange("prompt", e.target.value)} />
                    <DropdownElement options={modelOptions} selectedValue={fields.model} label={modelQuestion}
                        onChange={(e: any) => handleChange("model", e.target.value)} />
                    <DropdownElement options={modelSizeOptions} selectedValue={fields.size} label={memoryQuestion}
                        onChange={(e: any) => handleChange("size", e.target.value)} />
                    <DropdownElement options={isOpenOptions} selectedValue={fields.isOpen} label={isOpenQuestion}
                        onChange={(e: any) => handleChange("isOpen", e.target.value)} />

                </GridBlock>
            </ContainerWrapper>
            {isChanged &&
                <ContainerWrapper><ButtonComponent text={'Save'} onClick={saveChangesHandler} /></ContainerWrapper>
            }
        </GridBlock>
    )
}
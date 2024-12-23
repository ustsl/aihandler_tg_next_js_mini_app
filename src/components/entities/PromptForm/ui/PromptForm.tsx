import translate from './promptField.translate.json'

import { ButtonComponent } from "@/components/shared/ButtonComponent"
import { ContainerWrapper } from "@/components/shared/ContainerWrapper"
import { DropdownElement } from "@/components/shared/DropdownElement"
import { GridBlock } from "@/components/shared/GridBlock"
import { InputElement } from "@/components/shared/InputElement"
import { TextAreaElement } from "@/components/shared/TextAreaElement"
import {
    descriptionQuestion, isOpenQuestion, memoryQuestion,
    modelQuestion, promptQuestion, qualityQuestion, sizeQuestion, styleQuestion, titleQuestion
} from "./promptFieldDescriptions"
import {
    isOpenOptions, modelOptions, modelSizeOptions,
    tuningQualityOptions, tuningSizeOptions, tuningStyleOptions
} from "./promptFieldOptions"
import { useDataStore } from "@/store/useDataStore"
import { baseLanguages } from '@/types/baseTypes'



export const PromptForm = ({ handleChange, fields, saveChangesHandler, isChanged }: {
    handleChange: (name: string, e: any) => void, fields: any, saveChangesHandler: () => void, isChanged: boolean
}) => {

    const { userLanguage } = useDataStore((state: any) => state);
    const translation = translate[`${userLanguage as baseLanguages}`]

    return (
        <GridBlock gridSize="XS">
            <ContainerWrapper>
                <GridBlock gridSize="S">
                    <InputElement placeholder={translation.titleQuestion.title} label={titleQuestion(userLanguage)}
                        name={translation.titleQuestion.title} value={fields.title}
                        onChange={(e: any) => handleChange("title", e.target.value)} />
                    <TextAreaElement
                        label={descriptionQuestion(userLanguage)}
                        value={fields.description}
                        rows={2}
                        cols={1}
                        placeholder={translation.descriptionQuestion.title}
                        onChange={(e: any) => handleChange("description", e.target.value)} />
                    <TextAreaElement placeholder={translation.promptQuestion.title}
                        label={promptQuestion(userLanguage)} value={fields.prompt} rows={10} cols={1}
                        onChange={(e: any) => handleChange("prompt", e.target.value)} />
                    <DropdownElement options={modelOptions} selectedValue={fields.model}
                        label={modelQuestion(userLanguage)}
                        onChange={(e: any) => handleChange("model", e.target.value)} />
                    {
                        fields.model === 'dall-e-3' &&
                        <>
                            <DropdownElement
                                options={tuningStyleOptions}
                                selectedValue={fields.tuning?.style}
                                label={styleQuestion(userLanguage)}
                                onChange={(e) => {
                                    const updatedTuning = {
                                        ...fields.tuning,
                                        style: e.target.value
                                    };
                                    handleChange("tuning", updatedTuning);
                                }}
                            />

                            <DropdownElement options={tuningSizeOptions} selectedValue={fields.tuning?.size} label={sizeQuestion(userLanguage)}
                                onChange={(e) => {
                                    const updatedTuning = {
                                        ...fields.tuning,
                                        size: e.target.value
                                    };
                                    handleChange("tuning", updatedTuning);
                                }} />
                            <DropdownElement options={tuningQualityOptions} selectedValue={fields.tuning?.quality}
                                label={qualityQuestion(userLanguage)}
                                onChange={(e) => {
                                    const updatedTuning = {
                                        ...fields.tuning,
                                        quality: e.target.value
                                    };
                                    handleChange("tuning", updatedTuning);
                                }} />
                        </>
                    }
                    <DropdownElement options={modelSizeOptions} selectedValue={fields.size}
                        label={memoryQuestion(userLanguage)}
                        onChange={(e: any) => handleChange("size", e.target.value)} />
                    <DropdownElement options={isOpenOptions} selectedValue={fields.isOpen}
                        label={isOpenQuestion(userLanguage)}
                        onChange={(e: any) => handleChange("isOpen", e.target.value)} />

                </GridBlock>
            </ContainerWrapper>
            {isChanged &&
                <ContainerWrapper><ButtonComponent text={translation.saveButton} onClick={saveChangesHandler} /></ContainerWrapper>
            }
        </GridBlock>
    )
}
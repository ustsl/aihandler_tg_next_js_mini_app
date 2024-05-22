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



export const PromptForm = ({ handleChange, fields, saveChangesHandler, isChanged }: {
    handleChange: (name: string, e: any) => void, fields: any, saveChangesHandler: () => void, isChanged: boolean
}) => {

    return (
        <GridBlock gridSize="XS">
            <ContainerWrapper>
                <GridBlock gridSize="S">
                    <InputElement placeholder={"Choose unique name"} label={titleQuestion}
                        name={"Choose unique name"} value={fields.title}
                        onChange={(e: any) => handleChange("title", e.target.value)} />
                    <TextAreaElement
                        label={descriptionQuestion}
                        value={fields.description}
                        rows={2}
                        cols={1}
                        placeholder="Choose description"
                        onChange={(e: any) => handleChange("description", e.target.value)} />
                    <TextAreaElement placeholder={"Create Prompt"} label={promptQuestion} value={fields.prompt} rows={10} cols={1}
                        onChange={(e: any) => handleChange("prompt", e.target.value)} />
                    <DropdownElement options={modelOptions} selectedValue={fields.model} label={modelQuestion}
                        onChange={(e: any) => handleChange("model", e.target.value)} />
                    {
                        fields.model === 'dall-e-3' &&
                        <>
                            <DropdownElement
                                options={tuningStyleOptions}
                                selectedValue={fields.tuning?.style}
                                label={styleQuestion}
                                onChange={(e) => {
                                    const updatedTuning = {
                                        ...fields.tuning,
                                        style: e.target.value
                                    };
                                    handleChange("tuning", updatedTuning);
                                }}
                            />

                            <DropdownElement options={tuningSizeOptions} selectedValue={fields.tuning?.size} label={sizeQuestion}
                                onChange={(e) => {
                                    const updatedTuning = {
                                        ...fields.tuning,
                                        size: e.target.value
                                    };
                                    handleChange("tuning", updatedTuning);
                                }} />
                            <DropdownElement options={tuningQualityOptions} selectedValue={fields.tuning?.quality} label={qualityQuestion}
                                onChange={(e) => {
                                    const updatedTuning = {
                                        ...fields.tuning,
                                        quality: e.target.value
                                    };
                                    handleChange("tuning", updatedTuning);
                                }} />
                        </>
                    }
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
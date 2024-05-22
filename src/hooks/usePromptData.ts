
import { ModelTuning } from '@/components/entities/PromptForm';
import { ModelOptions, ModelSize, isOpenType } from '@/components/entities/PromptForm/ui/promptForm.props';
import { useState } from 'react';

export interface PromptFormFields {
    title: string;
    description: string;
    prompt: string;
    model: ModelOptions;
    isOpen: isOpenType;
    size: ModelSize;
    tuning: ModelTuning;
}


export function usePromptFormFields(initialState: PromptFormFields) {
    const [fields, setFields] = useState(initialState);
    const [isChanged, setIsChanged] = useState(false);

    function handleChange(field: string, data: any, hold?: true) {
        setFields((prevState: any) => ({
            ...prevState,
            [field]: data
        }));
        if (!hold) {
            setIsChanged(true);
        }
    }



    return { fields, handleChange, isChanged, setIsChanged };
}

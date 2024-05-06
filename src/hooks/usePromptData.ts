import { useState } from 'react';

export function usePromptFormFields(initialState: any) {
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

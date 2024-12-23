
import translate from './createPrompt.translate.json'

import { ContainerWrapper } from '@/components/shared/ContainerWrapper';
import { useDataStore } from '@/store/useDataStore';
import { baseLanguages } from '@/types/baseTypes';
import { ButtonLinkComponent } from '@/components/shared/ButtonComponent';


export const CreatePrompt = () => {

    const { userLanguage } = useDataStore((state: any) => state);


    function getText(userLanguage: baseLanguages | ''): string {
        if (userLanguage) {
            const text = translate.createPrompt[userLanguage];
            return text ? text : '';
        }
        return ''
    }

    return (
        <ContainerWrapper>
            <ButtonLinkComponent href="/prompts/create" text={getText(userLanguage)} />
        </ContainerWrapper>
    )
}
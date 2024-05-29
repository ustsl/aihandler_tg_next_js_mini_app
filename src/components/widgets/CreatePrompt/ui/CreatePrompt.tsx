import styles from './createPrompt.module.css';

import translate from './createPrompt.translate.json'

import { ContainerWrapper } from '@/components/shared/ContainerWrapper';

import Link from 'next/link';
import { useDataStore } from '@/store/useDataStore';
import { baseLanguages } from '@/types/baseTypes';


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
            <Link href="/prompts/create" className={styles.button}>{getText(userLanguage)}</Link>
        </ContainerWrapper>
    )
}
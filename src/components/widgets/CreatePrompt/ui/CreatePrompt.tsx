import { ContainerWrapper } from '@/components/shared/ContainerWrapper';
import styles from './createPrompt.module.css';
import Link from 'next/link';

export const CreatePrompt = () => {
    return (
        <ContainerWrapper>
            <Link href="/prompts/create" className={styles.button}>Create Prompt</Link>
        </ContainerWrapper>
    )
}
'use client'

import translate from './footerComponent.translate.json'

import { ContainerWrapper } from '@/components/shared/ContainerWrapper'
import styles from './footerComponent.module.css'
import { CardBlock } from '@/components/shared/CardBlock'
import { useDataStore } from '@/store/useDataStore'
import { baseLanguages } from '@/types/baseTypes'


export const FooterComponent = () => {

    const { userLanguage } = useDataStore((state: any) => state);
    const translation = translate[`${userLanguage as baseLanguages}`]


    return (
        <ContainerWrapper>
            <footer className={styles.footer}>
                <CardBlock href={'/about'} title={translation.about.title}
                    description={translation.about.description} />
                <CardBlock href={'/api'} title={translation.api.title} description={translation.api.description} />
            </footer>
        </ContainerWrapper>

    )
}
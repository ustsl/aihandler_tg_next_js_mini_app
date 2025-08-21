"use client"

import styles from './baseMenuBlock.module.css'
import translate from './baseMenuBlock.translate.json'


import { baseLanguages } from '@/types/baseTypes';

import { MenuLinkComponent } from './MenuLinkComponent';
import { usePathname } from 'next/navigation';
import { useDataStore } from '@/store/useDataStore';

export const BaseMenuBlock = () => {

    const router = usePathname();

    const { userLanguage } = useDataStore((state: any) => state);
    const translation = translate[`${userLanguage as baseLanguages}`]

    return (
        <div className={styles.block}>
            <MenuLinkComponent href='/' text={translation.prompts} isActive={router.includes('prompts') || router == '/'} />
            <MenuLinkComponent href='/scenarios' text={translation.scenario} isActive={router.includes('scenarios')} />
            <MenuLinkComponent href='/about' text={translation.about} isActive={router.includes('about')} />

        </div>
    )
}
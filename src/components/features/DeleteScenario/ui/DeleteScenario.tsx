'use client'

import translate from './deletePrompt.translate.json'

import { MiniButtonComponent } from '@/components/shared/MiniButtonComponent'
import styles from './deletePrompt.module.css'


import { ModalComponent, useModal } from '@/components/shared/ModalComponent';
import { TitleBlock } from '@/components/shared/TitleElement';
import { API_DOMAIN, API_VERSION } from '@/api/settings';
import { useDataStore } from '@/store/useDataStore';
import { useTelegramStore } from '@/store/useTelegramStore';
import { useNotificationStore } from '../../../widgets/NotificationWidget';
import { useRouter } from 'next/navigation';
import { deleteResponse } from '@/api/restAPI';
import { baseLanguages } from '@/types/baseTypes';

export const DeleteScenario = ({ uuid }: { uuid: string }) => {

    const { userLanguage } = useDataStore((state: any) => state);
    const translation = translate[`${userLanguage as baseLanguages}`]

    const { isOpen, openModal, closeModal } = useModal();
    const router = useRouter();

    const { userToken } = useDataStore((state: any) => state);
    const { userId } = useTelegramStore((state: any) => state)
    const { setNotification } = useNotificationStore((state: any) => state);


    function deletePromptHandler(uuid: string) {
        const url = `${API_DOMAIN}${API_VERSION}/scenarios/${userId}/${uuid}`

        deleteResponse({ token: userToken, method: url }).then((res) => {
            if (res?.status === 200) {
                setNotification({ message: translation.success, type: "success" })
                router.push(`/scenarios`)
            } else {
                setNotification({ message: translation.error, type: "error" })
            }
        })
    }


    return (
        <>
            <div className={styles.block}>
                <MiniButtonComponent text={translation.button} onClick={openModal} color='danger' />
            </div>

            <ModalComponent isOpen={isOpen} onClose={closeModal}>
                <>
                    <TitleBlock tag='h4' text={translation.question} />
                    <div className={styles.flex}>
                        <MiniButtonComponent text={translation.no} onClick={closeModal} />
                        <MiniButtonComponent text={translation.button} onClick={() => deletePromptHandler(uuid)} />
                    </div>
                </>
            </ModalComponent>
        </>

    )
}
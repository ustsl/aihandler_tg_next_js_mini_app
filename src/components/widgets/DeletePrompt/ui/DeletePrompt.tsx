import { MiniButtonComponent } from '@/components/shared/MiniButtonComponent'
import styles from './deletePrompt.module.css'

import { ContainerWrapper } from "@/components/shared/ContainerWrapper"
import { ModalComponent, useModal } from '@/components/shared/ModalComponent';
import { TitleBlock } from '@/components/shared/TitleElement';
import { API_DOMAIN, API_VERSION } from '@/api/settings';
import { useDataStore } from '@/store/useDataStore';
import { useTelegramStore } from '@/store/useTelegramStore';
import { useNotificationStore } from '../../NotificationWidget';
import { useRouter } from 'next/navigation';
import { deleteResponse } from '@/api/restAPI';

export const DeletePromptWidget = ({ uuid }: { uuid: string }) => {

    const { isOpen, openModal, closeModal } = useModal();
    const router = useRouter();

    const { userToken } = useDataStore((state: any) => state);
    const { userId } = useTelegramStore((state: any) => state)
    const { setNotification } = useNotificationStore((state: any) => state);


    function deletePromptHandler(uuid: string) {
        const url = `${API_DOMAIN}${API_VERSION}/prompts/${userId}/${uuid}`
        console.log(url)
        deleteResponse({ token: userToken, method: url }).then((res) => {
            if (res?.status === 200) {
                setNotification({ message: "Prompt was deleted", type: "success" })
                router.push(`/`)
            } else {
                setNotification({ message: "Unknown error", type: "error" })
            }
        })
    }


    return (
        <ContainerWrapper>
            <div className={styles.block}>
                <MiniButtonComponent text="Delete prompt" onClick={openModal} />
            </div>

            <ModalComponent isOpen={isOpen} onClose={closeModal}>
                <>
                    <TitleBlock tag='h4' text='Are you sure?' />
                    <div className={styles.flex}>
                        <MiniButtonComponent text="No" onClick={closeModal} />
                        <MiniButtonComponent text="Delete prompt" onClick={() => deletePromptHandler(uuid)} />
                        <MiniButtonComponent text="No, sure" onClick={closeModal} />
                    </div>
                </>
            </ModalComponent>
        </ContainerWrapper>
    )
}
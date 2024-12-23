"use client"

import translate from './createScenario.translate.json'

import { ContainerWrapper } from '@/components/shared/ContainerWrapper';
import { useDataStore } from '@/store/useDataStore';
import { baseLanguages } from '@/types/baseTypes';
import { ButtonComponent } from '@/components/shared/ButtonComponent';
import { useTelegramStore } from '@/store/useTelegramStore';
import { API_DOMAIN, API_VERSION } from '@/api/settings';
import { postResponse } from '@/api/restAPI';
import { useNotificationStore } from '@/components/widgets/NotificationWidget';
import { YMCOUNTER } from '@/const';
import { useRouter } from 'next/navigation';


export const CreateScenario = () => {

    const router = useRouter();
    const { userLanguage } = useDataStore((state: any) => state);

    const text = translate[userLanguage as baseLanguages];

    const { userId } = useTelegramStore((state: any) => state);
    const { userToken } = useDataStore((state: any) => state);
    const { setNotification } = useNotificationStore((state: any) => state);

    function createScenario() {

        const body = {
            "title": "scenario",
            "description": "",
        }


        const url = `${API_DOMAIN}${API_VERSION}/scenarios/${userId}`
        const response = postResponse({ token: userToken, body: body, method: url }).then((res) => {
            if (res?.error) {
                setNotification({ message: res.detail[0].msg, type: "warning" })
            } else {
                setNotification({ message: "Scenario was created", type: "success" })
                window.ym(YMCOUNTER, 'reachGoal', 'createScenario');
                window.dataLayer.push({
                    'event': 'createPrompt',
                });
                router.push(`/scenarios/id/${res.data.id}`)
            }
        })

    }


    return (
        <ContainerWrapper>
            <ButtonComponent text={text} onClick={createScenario} />
        </ContainerWrapper>
    )
}
'use client'

import { putResponse } from "@/api/restAPI"
import { ButtonComponent } from "@/components/shared/ButtonComponent"
import { ContainerWrapper } from "@/components/shared/ContainerWrapper"
import { useNotificationStore } from "@/components/widgets/NotificationWidget"
import useScenarioStore from "@/store/scenario.store"
import { useDataStore } from "@/store/useDataStore"
import { useTelegramStore } from "@/store/useTelegramStore"

export const SaveScenarioComponent = ({ uuid }: { uuid: string }) => {

    const { title, description, prompts } = useScenarioStore()
    const { userId } = useTelegramStore((state: any) => state)
    const { userToken } = useDataStore((state: any) => state);
    const { setNotification } = useNotificationStore((state: any) => state);

    function saveChangesHandler() {
        console.log(title)
        console.log(description)
        console.log(prompts)
        const body = {
            "title": title,
            "description": description,
            "prompts": prompts,

        }

        const url = `/scenarios/${userId}/${uuid}`
        putResponse({ token: userToken, body: body, method: url })
        setNotification({ message: "Is saved", type: "success" })

    }


    return (
        <ContainerWrapper>
            <ButtonComponent text={"Save"} onClick={saveChangesHandler} />
        </ContainerWrapper>

    )
}
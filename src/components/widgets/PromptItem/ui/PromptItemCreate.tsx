import { postResponse } from "@/api/restAPI"
import { useDataStore } from "@/store/useDataStore"
import { useTelegramStore } from "@/store/useTelegramStore"
import { usePromptFormFields } from "@/hooks/usePromptData"
import { modelSizeTranslator, PromptForm } from "@/components/entities/PromptForm"
import { useRouter } from 'next/navigation'
import { useNotificationStore } from "../../NotificationWidget"
import { API_DOMAIN, API_VERSION } from "@/api/settings"
import { isOpenTranslator } from "@/components/entities/PromptForm/ui/PromptForm"

export const PromptItemCreate = () => {


    const router = useRouter();

    const { userToken } = useDataStore((state: any) => state);
    const { userId } = useTelegramStore((state: any) => state)
    const { setNotification } = useNotificationStore((state: any) => state);

    const { fields, handleChange, isChanged, setIsChanged } = usePromptFormFields({
        title: '',
        description: '',
        prompt: '',
        model: 'gpt-4o',
        isOpen: 'open',
        size: 'no memory',
    });

    function saveChangesHandler() {

        const body = {
            "title": fields.title,
            "description": fields.description,
            "prompt": fields.prompt,
            "model": fields.model,
            "is_open": isOpenTranslator(fields.isOpen),
            "context_story_window": modelSizeTranslator(fields.size)
        }
        const url = `${API_DOMAIN}${API_VERSION}/prompts/${userId}`
        postResponse({ token: userToken, body: body, method: url }).then((res) => {
            if (res?.error) {
                const detail = res.detail
                if (typeof (detail) === "string") {
                    setNotification({ message: "Choose another title. Must be unique", type: "success" })
                } else {
                    setNotification({ message: res.detail[0].msg, type: "warning" })
                }
            } else {
                router.push(`/prompts/id/${res.data.id}`)
            }
        })
        setIsChanged(false)
    }

    return (

        <PromptForm handleChange={handleChange} fields={fields}
            saveChangesHandler={saveChangesHandler} isChanged={isChanged} />

    )
}
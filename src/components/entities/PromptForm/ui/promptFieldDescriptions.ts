import { PromptDataGenerator } from "@/components/features/PromptDataGenerator"

export const titleQuestion = PromptDataGenerator('Use a concise and clear name for comfortable navigation.',
    "Choose unique name")

export const descriptionQuestion = PromptDataGenerator('The description of the prompt does not affect its functionality and serves as a navigation hint.',
    "Choose description")

export const promptQuestion = PromptDataGenerator('Write detailed instructions. The prompt will act on it. For example, you can write: you are a translator into Turkish. Translate from any language into Turkish. Just return the translation.',
    "Create prompt")

export const modelQuestion = PromptDataGenerator('The list of available models will be updated with both OpenAI models and models of third-party services',
    "Choose model")

export const styleQuestion = PromptDataGenerator('In graphic prompts, an optional format allows you to define additional filters on the image, making it either more realistic or more vibrant.',
    "Set additional image style")

export const qualityQuestion = PromptDataGenerator('Generating an image in a standard format is cheaper. If you need the highest possible quality, then choose HD.',
    "Set image quality")

export const sizeQuestion = PromptDataGenerator('The image can be generated in one of three selected proportions and sizes.',
    "Set image size")

export const memoryQuestion = PromptDataGenerator('The higher the value, the more previous answers the AI remembers. But the higher the chance that the AI will respond less accurately, and also the higher the cost of use. If the task does not require a dynamic context, do not use memory storage. But it can be useful in complex prompts.', 'Choose memory size')

export const isOpenQuestion = PromptDataGenerator('Private prompts can only be used within the context of working with your account. Open prompts are available to everyone. You will receive 10% of the funds in your account from the amount of their use.', 'Access to prompt')

import { DaleeImageQuality, DaleeImageSize, DaleeImageStyle, ModelOptions, ModelSize, isOpenType } from "./promptForm.props"

export const modelOptions: ModelOptions[] = [
    'gpt-4o-mini',
    'gpt-4o-mini-audio-preview',
    'gpt-3.5-turbo',
    'gpt-3.5-turbo-0125',
    'gpt-4-turbo',
    'gpt-4-turbo-2024-04-09',
    'gpt-4o',
    'gpt-4o-audio-preview',
    'o1',
    'dall-e-3'
];

export const modelSizeOptions: ModelSize[] = [
    'no memory',
    'one message',
    'low',
    'medium',
    'large'
]

export const isOpenOptions: isOpenType[] = [
    'private',
    'open'
]

export const tuningStyleOptions: DaleeImageStyle[] = [
    "natural",
    "vivid",
    "not installed"
]

export const tuningSizeOptions: DaleeImageSize[] = [
    "1024x1024",
    "1024x1792",
    "1792x1024",
    "not installed"
]

export const tuningQualityOptions: DaleeImageQuality[] = [
    "hd",
    "not installed"
]

export type ModelOptions =
    | 'gpt-3.5-turbo'
    | 'gpt-3.5-turbo-0125'
    | 'gpt-4-turbo'
    | 'gpt-4-turbo-2024-04-09'
    | 'gpt-4o'
    | 'gpt-4o-audio-preview'
    | 'gpt-4o-mini'
    | 'gpt-4o-mini-audio-preview'
    | 'o1'
    | 'dall-e-3';

export type ModelSize = 'no memory' | 'one message' | 'low' | 'medium' | 'large';

export type isOpenType = 'private' | 'open'

export type DaleeImageSize = "1024x1792" | "1792x1024" | "1024x1024" | "not installed"

export type DaleeImageQuality = "hd" | "not installed"

export type DaleeImageStyle = "natural" | "vivid" | "not installed"


export interface ModelTuning {
    size?: DaleeImageSize
    quality?: DaleeImageQuality
    style?: DaleeImageStyle
}
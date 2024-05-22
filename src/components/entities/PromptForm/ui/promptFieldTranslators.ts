import { ModelSize, isOpenType } from "./promptForm.props"

export function modelSizeTranslator(modelSizeOptions: ModelSize): number {
    switch (modelSizeOptions) {
        case 'no memory':
            return 0
        case 'one message':
            return 1
        case 'low':
            return 5
        case 'medium':
            return 15
        case 'large':
            return 30
        default:
            return 0
    }
}


export function modelSizeReTranslator(modelSizeOptions: number): ModelSize {
    switch (modelSizeOptions) {
        case 0:
            return 'no memory'
        case 1:
            return 'one message'
        case 5:
            return 'low'
        case 15:
            return 'medium'
        case 30:
            return 'large'
        default:
            return 'no memory'
    }
}

export function isOpenTranslator(isOpen: isOpenType): boolean {
    switch (isOpen) {
        case 'open':
            return true
        case 'private':
            return false
    }
}


export function isOpenReTranslator(isOpen: boolean): isOpenType {
    switch (isOpen) {
        case true:
            return 'open'
        case false:
            return 'private'
    }
}


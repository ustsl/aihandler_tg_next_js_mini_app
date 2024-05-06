export interface ITextArea {
    placeholder?: string
    label: string
    value: string
    rows: number
    cols: number
    onChange: (data: any) => void
}
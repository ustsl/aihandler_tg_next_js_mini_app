export interface ITextArea {
    placeholder?: string
    label?: React.ReactNode
    value: string
    rows: number
    cols: number
    onChange: (data: any) => void
}
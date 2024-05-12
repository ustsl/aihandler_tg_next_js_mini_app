export interface IDropdownElement {
    options: string[]
    selectedValue: string
    label: React.ReactNode
    onChange: (data: any) => void
}
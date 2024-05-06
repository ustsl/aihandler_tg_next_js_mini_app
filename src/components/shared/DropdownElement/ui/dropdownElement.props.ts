export interface IDropdownElement {
    options: string[]
    selectedValue: string
    label: string
    onChange: (data: any) => void
}
import styles from './inputElement.module.css'


interface IInputElement {
    placeholder: string
    name: string
    value: string
    label?: string
    onChange: (event: any) => void
    required?: true
}

export const InputElement = ({ placeholder, name, value, label, onChange, required }: IInputElement) => {
    return (
        <div className={styles.block}>
            {label && <label>{label}</label>}
            <input
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    )
}
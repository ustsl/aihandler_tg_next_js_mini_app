import styles from './textAreaElement.module.css'

import { ChangeEvent } from 'react'

import { ITextArea } from './textAreaElement.props'

export const TextAreaElement = ({ placeholder, label, value, rows, cols, onChange }: ITextArea) => {
    return (
        <div className={styles.block}>
            <label>{label}</label>
            <textarea
                className={styles.area}
                placeholder={placeholder}
                value={value}
                rows={rows}
                cols={cols}
                onChange={(event: ChangeEvent<HTMLTextAreaElement>) => onChange(event)}
            />
        </div>
    )
}
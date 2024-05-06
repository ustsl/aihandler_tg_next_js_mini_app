import styles from './textAreaElement.module.css'

import { ChangeEvent } from 'react'

import { ITextArea } from './textAreaElement.props'

export const TextAreaElement = ({ placeholder, label, value, rows, cols, onChange }: ITextArea) => {
    return (
        <textarea
            className={styles.block}
            placeholder={placeholder ? placeholder : label}
            value={value}
            rows={rows}
            cols={cols}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => onChange(event)}
        />
    )
}
import styles from './dropdownElement.module.css'

import React from 'react';
import { IDropdownElement } from './dropdownElement.props';

export const DropdownElement = ({ options, selectedValue, label, onChange }: IDropdownElement) => {
    const selectId = React.useId();
    const uniqueOptions = Array.from(new Set(options)).filter(option => option !== selectedValue);

    return (
        <div className={styles.block}>
            <label htmlFor={selectId}>{label}</label>
            <select id={selectId} value={selectedValue} onChange={onChange}>
                <option value={selectedValue}>{selectedValue}</option>
                {uniqueOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

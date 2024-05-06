import styles from './dropdownElement.module.css'

import React from 'react';
import { IDropdownElement } from './dropdownElement.props';

export const DropdownElement = ({ options, selectedValue, label, onChange }: IDropdownElement) => {

    return (
        <div className={styles.block}>
            <label htmlFor="dropdown">{label}</label>
            <select id="dropdown" value={selectedValue} onChange={onChange}>
                <option value={selectedValue}>{selectedValue}</option>
                {options.map(option => (
                    option !== selectedValue && (
                        <option key={option} value={option}>{option}</option>
                    )
                ))}
            </select>
        </div>
    );
};

'use client'

import styles from './searchBlock.module.css'

import { useState } from 'react'

import { InputElement } from "@/components/shared/InputElement"
import { ContainerWrapper } from '@/components/shared/ContainerWrapper'

export const SearchBlock = () => {

    const [query, setQuery] = useState('')

    function handleInputChange(event: any) {
        setQuery(event?.target?.value)
    }

    return (
        <InputElement
            placeholder="Prompt search panel"
            name="text"
            value={query}
            onChange={handleInputChange}
            required
        />

    )
}
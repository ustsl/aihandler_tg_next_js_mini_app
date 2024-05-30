import { InputElement } from "@/components/shared/InputElement"
import { debounce } from "@/utils/debounce";
import { useState, useRef } from "react";

interface ISearchQuery {
    searchQuery: string
    setSearchQuery: (data: string) => void
    text: string
}


export const SearchBlock = ({ searchQuery, setSearchQuery, text }: ISearchQuery) => {
    const [localQuery, setLocalQuery] = useState(searchQuery)

    const debounceRef = useRef(debounce((value: string) => {
        setSearchQuery(value);
    }, 1000));

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        setLocalQuery(value);
        debounceRef.current(value);
    }

    return (
        <InputElement
            placeholder={text}
            name="text"
            value={localQuery}
            onChange={handleInputChange}
            required
        />
    )
}

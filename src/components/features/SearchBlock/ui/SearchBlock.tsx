import { GridBlock } from "@/components/shared/GridBlock";
import { InputElement } from "@/components/shared/InputElement"
import { LoaderComponent } from "@/components/shared/LoaderComponent";
import { debounce } from "@/utils/debounce";
import { useState, useRef } from "react";

interface ISearchQuery {
    searchQuery: string
    setSearchQuery: (data: string) => void
    text: string
}


export const SearchBlock = ({ searchQuery, setSearchQuery, text }: ISearchQuery) => {
    const [localQuery, setLocalQuery] = useState(searchQuery)
    const [isSearchProcess, setIsSearchProcess] = useState(false)

    const debounceRef = useRef(debounce((value: string) => {
        setIsSearchProcess(false);
        setSearchQuery(value);
    }, 1000));

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setIsSearchProcess(true)
        const { value } = event.target;
        setLocalQuery(value);
        debounceRef.current(value);
    }

    return (
        <GridBlock gridSize="S">
            <InputElement
                placeholder={text}
                name="text"
                value={localQuery}
                onChange={handleInputChange}
                required
            />
            {isSearchProcess && <LoaderComponent />}
        </GridBlock>
    )
}

import { MiniButtonComponent } from '@/components/shared/MiniButtonComponent'
import styles from './pagination.module.css'
import { baseLanguages } from '@/types/baseTypes';

export const Pagination = ({ length, offset, limit, setOffset, next, prev }:
    { length: number, offset: number, limit: number, setOffset: (data: number) => void, next: string, prev: string }) => {

    function handlePagination(change: 'next' | 'prev') {
        switch (change) {
            case "next":
                setOffset(offset + 30)
                break;
            case "prev":
                setOffset(offset - 30)
                break;
            default:
                console.log("Error");
        }
    }

    return (
        <div className={styles.pagination}>
            {offset > 0 ? <MiniButtonComponent text={prev} onClick={() => handlePagination("prev")} /> : <div></div>}
            {length + offset < limit && <MiniButtonComponent text={next} onClick={() => handlePagination("next")} />}
        </div>
    )
}
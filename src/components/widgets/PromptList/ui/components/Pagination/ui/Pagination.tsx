import { MiniButtonComponent } from '@/components/shared/MiniButtonComponent'
import styles from './pagination.module.css'

export const Pagination = ({ length, offset, limit, setOffset }:
    { length: number, offset: number, limit: number, setOffset: (data: number) => void }) => {

    function handlePagination(change: 'next' | 'prev') {
        switch (change) {
            case "next":
                setOffset(offset + 10)
                break;
            case "prev":
                setOffset(offset - 10)
                break;
            default:
                console.log("Error");
        }
    }

    return (
        <div className={styles.pagination}>
            {offset > 0 ? <MiniButtonComponent text="Prev" onClick={() => handlePagination("prev")} /> : <div></div>}
            {length + offset < limit && <MiniButtonComponent text="Next" onClick={() => handlePagination("next")} />}
        </div>
    )
}
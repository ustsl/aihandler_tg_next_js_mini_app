import classNames from 'classnames';
import styles from './dangerTextComponent.module.css'
import { baseSizes } from '@/types/baseTypes';


export const DangerTextComponent = ({ text, size, gapSize }: { text: string, size?: baseSizes, gapSize: baseSizes }) => {
    const cl = classNames(
        styles.text,
        gapSize && styles[`gap${gapSize}`],
        size && styles[`size${size}`]
    );
    return <div dangerouslySetInnerHTML={{ __html: text }} className={cl} />
}
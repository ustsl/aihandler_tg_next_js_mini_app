import styles from './adaptiveImageContainer.module.css';

import Image, { StaticImageData } from 'next/image';

interface IAdaptiveImageContainer {
    image: string | StaticImageData;
    alt: string;
    width: number;
    height: number;
}

export const AdaptiveImageContainer = ({ image, alt, width, height }: IAdaptiveImageContainer) => {
    return (
        <div className={styles.imageContainer}>
            <Image src={image} alt={alt} width={width} height={height} quality={98} />
        </div>
    )
}
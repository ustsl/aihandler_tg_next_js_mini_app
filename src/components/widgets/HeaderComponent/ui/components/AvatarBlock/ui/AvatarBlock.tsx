
import styles from './avatarBlock.module.css';
import Image from 'next/image';
import icon from './icon.svg';
import Link from 'next/link';

export const AvatarBlock = () => {



    return (
        <Link href="/">
            <Image src={icon} alt={"Avatar"} width={50} height={50} className={styles.image} />
        </Link>


    )
}
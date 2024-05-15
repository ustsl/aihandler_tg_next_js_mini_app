'use client'

import { useDataStore } from '@/store/useDataStore';
import styles from './walletBlock.module.css';

import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from 'next/link';


export const WalletBlock = () => {
    const { userBalance, } = useDataStore((state: any) => state);

    return (
        <Link href="/payment" className={styles.block}>
            {userBalance && <span>${userBalance.toFixed(3)}</span>}
            <FontAwesomeIcon icon={faPlus} height={30} width={30} />
        </Link>
    )
}
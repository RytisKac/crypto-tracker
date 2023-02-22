import { Data } from '@/utils/types';
import Link from 'next/link';
import React from 'react';
import CryptoCard from './CryptoCard';
import styles from './CryptoCard.module.scss';

interface Props {
	data: Data[];
}

const CryptoData = ({ data }: Props) => {
	return (
		<div className={styles.itemsContainer}>
			{data.map((item) => {
				return (
					<Link href={`/coins/${item.id}`} key={item.id}>
						<CryptoCard data={item} />
					</Link>
				);
			})}
		</div>
	);
};

export default CryptoData;

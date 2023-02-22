import { Exchange } from '@/utils/types';
import React from 'react';
import ExchangeCard from './ExchangeCard';
import styles from './Exchange.module.scss';
import Link from 'next/link';

interface Props {
	exchanges: Exchange[];
}

const ExchangeData = ({ exchanges }: Props) => {
	return (
		<div className={styles.itemsContainer}>
			{exchanges.map((item) => {
				return (
					<Link href={item.url} key={item.id} target="_blank">
						<ExchangeCard exchange={item} />
					</Link>
				);
			})}
		</div>
	);
};

export default ExchangeData;

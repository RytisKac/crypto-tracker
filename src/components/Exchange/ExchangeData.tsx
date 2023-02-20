import { Exchange } from '@/utils/types';
import React from 'react';
import ExchangeCard from './ExchangeCard';
import styles from './Exchange.module.scss';

interface Props {
	exchanges: Exchange[];
}

const ExchangeData = ({ exchanges }: Props) => {
	return (
		<div className={styles.itemsContainer}>
			{exchanges.map((item) => {
				return <ExchangeCard key={item.id} exchange={item} />;
			})}
		</div>
	);
};

export default ExchangeData;

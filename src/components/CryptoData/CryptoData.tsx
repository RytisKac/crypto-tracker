import { Data } from '@/utils/types';
import React from 'react';
import CryptoCard from './CryptoCard';
import styles from './CryptoCard.module.scss';

interface Props {
	data: Data[];
}

const CryptoData = ({ data }: Props) => {
	return (
		<div>
			{data.map((item) => {
				return <CryptoCard key={item.symbol} data={item} />;
			})}
		</div>
	);
};

export default CryptoData;

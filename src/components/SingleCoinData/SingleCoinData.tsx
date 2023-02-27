import { formatCurrency, formatNumber } from '@/utils/formatter';
import React from 'react';
import styles from './SingleCoinData.module.scss';
import SingleCoinDataCard from './SingleCoinDataCard';

interface Props {
	data: {
		circulatingSupply: number;
		totalSupply: number;
		marketCap: number;
		totalVolume: number;
		high24h: number;
		low24h: number;
	};
}

const SingleCoinData = ({ data }: Props) => {
	return (
		<div className={styles.container}>
			<SingleCoinDataCard
				title="Circulating supply"
				amount={formatNumber(data.circulatingSupply)}
			/>
			<SingleCoinDataCard title="Total supply" amount={formatNumber(data.totalSupply)} />
			<SingleCoinDataCard title="Market cap" amount={formatCurrency(data.marketCap)} />
			<SingleCoinDataCard title="Total volume" amount={formatCurrency(data.totalVolume)} />
			<SingleCoinDataCard
				title="High 24h"
				amount={formatCurrency(data.high24h)}
			/>
			<SingleCoinDataCard
				title="Low 24h"
				amount={formatCurrency(data.low24h)}
			/>
		</div>
	);
};

export default SingleCoinData;

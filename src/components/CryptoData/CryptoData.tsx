import React from 'react';
import CryptoCard from './CryptoCard';

type Props = {};

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

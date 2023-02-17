import React from 'react';
import CryptoCard from './CryptoCard';

interface Data {
	name: string;
	symbol: string;
	current_price: number;
}

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

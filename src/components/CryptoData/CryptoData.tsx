import React from 'react';
import CryptoCard from './CryptoCard';

type Props = {};

const CryptoData = ({ data }: Props) => {
	return (
		<div>
			{data.map((item) => {
				return <CryptoCard data={item} />;
			})}
		</div>
	);
};

export default CryptoData;

import { Exchange } from '@/utils/types';
import React from 'react';
import ExchangeCard from './ExchangeCard';

interface Props {
	exchanges: Exchange[];
}

const ExchangeData = ({ exchanges }: Props) => {
	return (
		<div>
			{exchanges.map((item) => {
				return <ExchangeCard key={item.id} exchange={item} />;
			})}
		</div>
	);
};

export default ExchangeData;

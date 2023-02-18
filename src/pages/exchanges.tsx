import React from 'react';
import Head from 'next/head';
import { Exchange } from '@/utils/types';
import ExchangeData from '@/components/Exchange/ExchangeData';
import Header from '@/components/Header/Header';

interface Props {
	exchanges: Exchange[];
}

const Exchanges = ({ exchanges }: Props) => {
	return (
		<>
			<Head>
				<title>Exchanges | Crypto Tracker</title>
				<meta
					name="description"
					content="List of all exchanges using CoinGecko API"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header title="Exchanges" />
			<ExchangeData exchanges={exchanges} />
		</>
	);
};

export async function getServerSideProps() {
	const res = await fetch(
		'https://api.coingecko.com/api/v3/exchanges?per_page=20&page=1'
	);
	const exchanges = await res.json();

	return {
		props: { exchanges },
	};
}

export default Exchanges;

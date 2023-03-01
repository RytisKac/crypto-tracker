import React from 'react';
import Head from 'next/head';
import { Exchange, NewsData } from '@/utils/types';
import ExchangeData from '@/components/Exchange/ExchangeData';
import Header from '@/components/Header/Header';
import News from '@/components/News/News';

interface Props {
	exchanges: Exchange[];
	news: NewsData[];
}

const Exchanges = ({ exchanges, news }: Props) => {
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
			<News
				data={news}
			/>
		</>
	);
};

export async function getServerSideProps() {
	const [exchangesRes, newsRes] = await Promise.all([
		fetch(`https://api.coingecko.com/api/v3/exchanges?per_page=20&page=1`),
		fetch(
			`https://cryptopanic.com/api/v1/posts/?auth_token=${process.env.CRYPTO_PANIC_API_KEY}`
		),
	]);

	const [exchanges, news] = await Promise.all([
		exchangesRes.json(),
		newsRes.json(),
	]);

	return {
		props: { exchanges, news: news.results }, // will be passed to the page component as props
	};
}

export default Exchanges;

import CoinChart from '@/components/CoinChart/CoinChart';
import CoinHeader from '@/components/CoinHeader/CoinHeader';
import Header from '@/components/Header/Header';
import News from '@/components/News/News';
import SingleCoinData from '@/components/SingleCoinData/SingleCoinData';
import { CoinData, NewsData } from '@/utils/types';
import Head from 'next/head';
import React from 'react';

interface Data {
	data: Number[];
}

interface Props {
	coin: CoinData;
	prices: { labels: String[]; datasets: Data[] };
	news: NewsData[];
}

interface Params {
	params: {
		id: string;
	};
}

export default function Coin({ coin, prices, news }: Props) {
	return (
		<>
			<Head>
				<title>{coin.name} | Crypto Tracker</title>
				<meta name="description" content="Crypto tracker using CoinGecko API" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header title={coin.name} image={coin.image.large} />
			<CoinHeader
				name={coin.name}
				symbol={coin.symbol}
				currentPrice={coin.market_data.current_price.usd}
				priceChange24h={coin.market_data.price_change_24h}
			/>
			<CoinChart data={prices} />
			<SingleCoinData
				data={{
					circulatingSupply: coin.market_data.circulating_supply,
					totalSupply: coin.market_data.total_supply,
					totalVolume: coin.market_data.total_volume.usd,
					marketCap: coin.market_data.market_cap.usd,
					high24h: coin.market_data.high_24h.usd,
					low24h: coin.market_data.low_24h.usd,
				}}
			/>
			<News
				data={news}
			/>
		</>
	);
}

export async function getServerSideProps({ params }: Params) {
	const [coinRes, marketChartRes, newsRes] = await Promise.all([
		fetch(`https://api.coingecko.com/api/v3/coins/${params.id}`),
		fetch(
			`https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=30&interval=daily`
		),
		fetch(
			`https://cryptopanic.com/api/v1/posts/?auth_token=${process.env.CRYPTO_PANIC_API_KEY}`
		),
	]);

	const [coin, marketChart, news] = await Promise.all([
		coinRes.json(),
		marketChartRes.json(),
		newsRes.json()
	]);

	interface Dataset {
		label: string,
		data: number[]
	}

	const labels: string[] = [];
	const datasets: Dataset[] = [
		{
			label: 'Price',
			data: [],
		},
	];

	marketChart.prices.forEach((price: [number, number]) => {
		labels.push(
			new Date(price[0]).toDateString()
		);
		datasets[0].data.push(price[1]);
	});

	return { props: { coin, prices: { labels, datasets }, news: news.results } };
}

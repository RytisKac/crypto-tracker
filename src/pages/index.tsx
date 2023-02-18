import Head from 'next/head';
import { Inter } from '@next/font/google';
import CryptoData from '@/components/CryptoData/CryptoData';
import { Data } from '@/utils/types';
import Header from '@/components/Header/Header';

const inter = Inter({ subsets: ['latin'] });

interface Props {
	data: Data[];
}

export default function Home({ data }: Props) {
	return (
		<>
			<Head>
				<title>Coins | Crypto Tracker</title>
				<meta name="description" content="Crypto tracker using CoinGecko API" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header title="Coins" />
			<CryptoData data={data} />
		</>
	);
}

export async function getServerSideProps() {
	const res = await fetch(
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d'
	);
	const data = await res.json();

	// const promises = datas.map(async (coin: Data) => {
	// 	const chartRes = await fetch(
	// 		`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=14&interval=daily`
	// 	);
	// 	const chartData = await chartRes.json();
	// 	const formattedChartData = chartData.prices.map(([time, price]) => ({
	// 		time,
	// 		price,
	// 	}));
	// 	return {
	// 		...coin,
	// 		chartData: formattedChartData,
	// 	};
	// });

	// const data = await Promise.all(promises);

	return {
		props: { data }, // will be passed to the page component as props
	};
}

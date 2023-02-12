import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import CryptoData from '@/components/CryptoData/CryptoData';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ data }) {
	return (
		<>
			<Head>
				<title>Crypto Tracker</title>
				<meta name="description" content="Crypto tracker using CoinGecko API" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<CryptoData data={data} />
		</>
	);
}

export async function getServerSideProps() {
	const res = await fetch(
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d'
	);
	const data = await res.json();

	return {
		props: { data }, // will be passed to the page component as props
	};
}

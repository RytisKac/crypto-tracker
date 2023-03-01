import Head from 'next/head';
import { Inter } from '@next/font/google';
import CryptoData from '@/components/CryptoData/CryptoData';
import { Data, NewsData } from '@/utils/types';
import Header from '@/components/Header/Header';
import News from '@/components/News/News';

const inter = Inter({ subsets: ['latin'] });

interface Props {
	data: Data[];
	news: NewsData[]
}

export default function Home({ data, news }: Props) {
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
			<News
				data={news}
			/>
		</>
	);
}

export async function getServerSideProps() {
	const [coinsRes, newsRes] = await Promise.all([
		fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`),
		fetch(
			`https://cryptopanic.com/api/v1/posts/?auth_token=${process.env.CRYPTO_PANIC_API_KEY}`
		),
	]);

	const [coins, news] = await Promise.all([
		coinsRes.json(),
		newsRes.json(),
	]);

	return {
		props: { data: coins, news: news.results }, // will be passed to the page component as props
	};
}

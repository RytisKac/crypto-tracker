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

interface Params {
	params: {
		query: string;
	}
}

export default function Search({ data, news }: Props) {
	return (
		<>
			<Head>
				<title>Coins | Crypto Tracker</title>
				<meta name="description" content="Crypto tracker using CoinGecko API" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header title="Coins" />
			<CryptoData data={data} minimal />
			<News
				data={news}
			/>
		</>
	);
}

export async function getServerSideProps({ params }: Params) {
	const [searchRes, newsRes] = await Promise.all([
		fetch(`https://api.coingecko.com/api/v3/search?query=${params.query}`),
		fetch(
			`https://cryptopanic.com/api/v1/posts/?auth_token=${process.env.CRYPTO_PANIC_API_KEY}`
		),
	]);

	const [searchData, news] = await Promise.all([
		searchRes.json(),
		newsRes.json(),
	]);

	return {
		props: { data: searchData.coins, news: news.results }, // will be passed to the page component as props
	};
}

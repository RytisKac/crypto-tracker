import Header from '@/components/Header/Header';
import { CoinData } from '@/utils/types';
import React from 'react';

interface Props {
	coin: CoinData;
}

interface Params {
	params: {
		id: string;
	};
}

export default function Coin({ coin }: Props) {
	return (
		<>
			<Header title={coin.name} image={coin.image.large} />
			<div>Coin</div>
		</>
	);
}

export async function getServerSideProps({ params }: Params) {
	// params contains the post `id`.
	// If the route is like /posts/1, then params.id is 1
	const res = await fetch(
		`https://api.coingecko.com/api/v3/coins/${params.id}`
	);
	const coin = await res.json();

	// Pass coin data to the page via props
	return { props: { coin } };
}

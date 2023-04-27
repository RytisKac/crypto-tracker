export interface Data {
	id: string;
	name: string;
	symbol: string;
	current_price: number;
	image: string;
	price_change_percentage_1h_in_currency: number;
	price_change_percentage_24h_in_currency: number;
	price_change_percentage_7d_in_currency: number;
	price_change_24h: number;
	circulating_supply: number;
	market_cap: number;
	large: string;
}

export interface Exchange {
	id: string;
	name: string;
	year_established: number;
	country: string;
	description: string;
	url: string;
	image: string;
	has_trading_incentive: boolean;
	trust_score: number;
	trust_score_rank: number;
	trade_volume_24h_btc: number;
	trade_volume_24h_btc_normalized: number;
}

export interface CoinData {
	id: string;
	name: string;
	symbol: string;
	market_data: {
		current_price: {
			usd: number;
		};
		market_cap: {
			usd: number;
		};
		total_volume: {
			usd: number;
		};
		high_24h: {
			usd: number;
		};
		low_24h: {
			usd: number;
		};
		price_change_24h: number;
		total_supply: number;
		circulating_supply: number;
	};
	image: {
		small: string;
		large: string;
		thumb: string;
	};
}

export interface NewsData {
	id: 17764763;
	kind: string;
	domain: string;
	source: {
		title: string;
		region: string;
		path: string | null;
		domain: string;
	};
	title: string;
	published_at: string;
	slug: string;
	url: string;
	created_at: string;
}

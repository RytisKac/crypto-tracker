export interface Data {
	id: string;
	name: string;
	symbol: string;
	current_price: number;
	image: string;
	price_change_percentage_1h_in_currency: number;
	price_change_percentage_24h_in_currency: number;
	price_change_percentage_7d_in_currency: number;
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

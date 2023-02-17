import Image from 'next/image';
import React from 'react';
import styles from './CryptoCard.module.scss';
import Bitcoin from '../../assets/images/bitcoin-btc-logo.svg';
import { formatCurrency } from '@/utils/currencyFormatter';

interface Props {
	data: {
		name: string;
		symbol: string;
		current_price: number;
	};
}

const CryptoCard = ({ data }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.cryptoInfo}>
				<div className={styles.logo}>
					<Image src={Bitcoin} width={30} height={30} alt="bitcoin logo" />
				</div>
				<div className={styles.name}>
					<h3>{data.name}</h3>
					<span>{data.symbol.toUpperCase()}</span>
				</div>
				<div className={styles.price}>
					<h3>{formatCurrency(data.current_price)}</h3>
					<span>$659.67</span>
				</div>
			</div>
			<div className={styles.priceChanges}>
				<div>
					<h3>1.4%</h3>
					<span>1h</span>
				</div>
				<div>
					<h3>1.9%</h3>
					<span>24h</span>
				</div>
				<div>
					<h3>17.1%</h3>
					<span>7 days</span>
				</div>
			</div>
		</div>
	);
};

export default CryptoCard;

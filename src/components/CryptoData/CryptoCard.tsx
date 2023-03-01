import Image from 'next/image';
import React from 'react';
import styles from './CryptoCard.module.scss';
import Bitcoin from '../../assets/images/bitcoin-btc-logo.svg';
import { formatCurrency, formatNumber, formatPercentage } from '@/utils/formatter';
import classNames from 'classnames';
import { Data } from '@/utils/types';

interface Props {
	data: Data;
}

const CryptoCard = ({ data }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.cryptoInfo}>
				<div className={styles.logo}>
					<Image src={data.image} width={30} height={30} alt="bitcoin logo" />
				</div>
				<div className={styles.name}>
					<h3>{data.name}</h3>
					<span>{data.symbol.toUpperCase()}</span>
				</div>
				<div className={styles.price}>
					<h3>{formatCurrency(data.current_price)}</h3>
					<span
						className={classNames(
							data.price_change_24h > 0 ? styles.positive : styles.negative
						)}
					>
						{formatCurrency(data.price_change_24h)}
					</span>
				</div>
			</div>
			<div className={styles.priceChanges}>
				<div>
					<h3
						className={classNames(
							data.price_change_percentage_1h_in_currency > 0
								? styles.positive
								: styles.negative
						)}
					>
						{formatPercentage(data.price_change_percentage_1h_in_currency)}
					</h3>
					<span>1h</span>
				</div>
				<div>
					<h3
						className={classNames(
							data.price_change_percentage_24h_in_currency > 0
								? styles.positive
								: styles.negative
						)}
					>
						{formatPercentage(data.price_change_percentage_24h_in_currency)}
					</h3>
					<span>24h</span>
				</div>
				<div>
					<h3
						className={classNames(
							data.price_change_percentage_7d_in_currency > 0
								? styles.positive
								: styles.negative
						)}
					>
						{formatPercentage(data.price_change_percentage_7d_in_currency)}
					</h3>
					<span>7 days</span>
				</div>
			</div>
			<div className={styles.cryptoNumbers}>
				<div className={styles.name}>
					<h3>{formatCurrency(data.market_cap)}</h3>
					<span>Market cap</span>
				</div>
				<div className={styles.name}>
					<h3>{formatNumber(data.circulating_supply)}</h3>
					<span>Circulating supply</span>
				</div>
			</div>
		</div>
	);
};

export default CryptoCard;

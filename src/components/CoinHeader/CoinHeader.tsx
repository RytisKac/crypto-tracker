import { formatCurrency } from '@/utils/formatter';
import { CoinData } from '@/utils/types';
import classNames from 'classnames';
import React from 'react';
import styles from './CoinHeader.module.scss';

interface Props {
	name: string;
	symbol: string;
	currentPrice: number;
	priceChange24h: number;
}

const CoinHeader = ({ name, symbol, currentPrice, priceChange24h }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.cryptoInfo}>
				<div className={styles.name}>
					<h3>{name}</h3>
					<span>{symbol.toUpperCase()}</span>
				</div>
				<div className={styles.price}>
					<h3>{formatCurrency(currentPrice)}</h3>
					<span
						className={classNames(
							priceChange24h > 0 ? styles.positive : styles.negative
						)}
					>
						{formatCurrency(priceChange24h)}
					</span>
				</div>
			</div>
			<div>
				<ul className={styles.chartTimeList}>
					<li className={styles.selected}>1h</li>
					<li>24h</li>
					<li>7d</li>
					<li>1M</li>
					<li>1Y</li>
				</ul>
			</div>
		</div>
	);
};

export default CoinHeader;

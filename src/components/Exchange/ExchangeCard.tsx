import { formatCurrency } from '@/utils/formatter';
import { Exchange } from '@/utils/types';
import Image from 'next/image';
import React from 'react';
import styles from './Exchange.module.scss';

interface Props {
	exchange: Exchange;
}

const ExchangeCard = ({ exchange }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.cryptoInfo}>
				<div className={styles.logo}>
					<Image
						src={exchange.image}
						width={30}
						height={30}
						alt="bitcoin logo"
					/>
				</div>
				<div className={styles.name}>
					<h3>{exchange.name}</h3>
					<span>{exchange.country}</span>
				</div>
				<div className={styles.price}>
					<h3>{formatCurrency(exchange.trade_volume_24h_btc)}</h3>
				</div>
			</div>
			{/* <div className={styles.priceChanges}>
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
			</div> */}
		</div>
	);
};

export default ExchangeCard;

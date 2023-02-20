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
			<div className={styles.info}>
				<div className={styles.top}>
					<div className={styles.logo}>
						<Image
							src={exchange.image}
							width={40}
							height={40}
							alt={`${exchange.name} logo`}
						/>
					</div>
					<div className={styles.name}>
						<h3>{exchange.name}</h3>
						<span>{exchange.country}</span>
					</div>
				</div>
				<div className={styles.middle}>
					<div className={styles.data}>
						<h3>{formatCurrency(exchange.trade_volume_24h_btc)}</h3>
						<span>Trade volume 24h</span>
					</div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.data}>
						<h3>{exchange.trust_score}</h3>
						<span>Trust score</span>
					</div>
					<div className={styles.data}>
						<h3>{exchange.year_established}</h3>
						<span>Est.</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExchangeCard;

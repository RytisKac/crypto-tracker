import React from 'react';
import styles from './SingleCoinData.module.scss';

interface Props {
	title: string;
	amount: number | string;
}

const SingleCoinDataCard = ({ title, amount }: Props) => {
	return (
		<div className={styles.cardContainer}>
			<h3>{title}</h3> <p>{amount}</p>
		</div>
	);
};

export default SingleCoinDataCard;

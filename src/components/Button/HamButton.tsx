import React from 'react';
import styles from './HamButton.module.scss';

type Props = {};

const HamButton = (props: Props) => {
	return (
		<div className={styles.hamButton}>
			<b></b>
			<b></b>
			<b></b>
		</div>
	);
};

export default HamButton;

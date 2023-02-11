import classNames from 'classnames';
import React from 'react';
import styles from './HamButton.module.scss';

interface Props {
	isOpen: boolean;
	toggle: () => void;
}

const HamButton = ({ isOpen, toggle }: Props) => {
	return (
		<div className={styles.container}>
			<div
				className={classNames(styles.hamButton, { [styles.open]: isOpen })}
				onClick={toggle}
			>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	);
};

export default HamButton;

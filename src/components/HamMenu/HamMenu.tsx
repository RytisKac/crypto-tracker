import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../assets/images/bitcoin-btc-logo.svg';
import Coin from '../Images/Coin';
import Exchange from '../Images/Exchange';
import styles from './HamMenu.module.scss';

interface Props {
	isOpen: boolean;
}

const HamMenu = ({ isOpen }: Props) => {
	return (
		<div className={classNames(styles.container, { [styles.open]: isOpen })}>
			<div className={styles.wrapper}>
				<Image
					src={Logo}
					alt="Logo"
					width={40}
					height={40}
					className={styles.logoIcon}
				/>
				<ul className={styles.menuList}>
					<li>
						<Link href="/">
							<Coin className={styles.menuIcon} />
						</Link>
					</li>
					<li>
						<Link href="/exchanges">
							<Exchange className={styles.menuIcon} />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HamMenu;

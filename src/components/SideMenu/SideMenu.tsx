import Image from 'next/image';
import React from 'react';
import Logo from '../../assets/images/bitcoin-btc-logo.svg';
import Coin from '../Images/Coin';
import Exchange from '../Images/Exchange';
import Bitcoin from '../Images/Bitcoin';
import styles from './SideMenu.module.scss';
import Report from '../Images/Report';

const SideMenu = () => {
	return (
		<div className={styles.container}>
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
						<Coin className={styles.menuIcon} />
					</li>
					<li>
						<Exchange className={styles.menuIcon} />
					</li>
					<li>
						<Report className={styles.menuIcon} />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SideMenu;

import Image from 'next/image';
import React from 'react';
import Logo from '../../assets/images/bitcoin-btc-logo.svg';
import Coin from '../Images/Coin';
import Exchange from '../Images/Exchange';
import styles from './SideMenu.module.scss';
import Link from 'next/link';

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

export default SideMenu;

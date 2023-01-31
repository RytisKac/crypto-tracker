import Image from 'next/image';
import React from 'react';
import Logo from '../../assets/images/bitcoin-btc-logo.svg';
import Bitcoin from '../Images/Bitcoin';
import styles from './SideMenu.module.scss';

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
						<Bitcoin className={styles.menuIcon} />
					</li>
					<li>
						<Bitcoin className={styles.menuIcon} />
					</li>
					<li>
						<Bitcoin className={styles.menuIcon} />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SideMenu;

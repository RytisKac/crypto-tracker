import Image from 'next/image';
import React from 'react';
import Logo from '../../assets/images/bitcoin-btc-logo.svg';
import Bitcoin from '../../assets/images/currency-bitcoin.svg';
import styles from './SideMenu.module.scss';

const SideMenu = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<Image src={Logo} alt="Logo" width={30} height={30} />
				<ul className={styles.menuList}>
					<li>
						<Image src={Bitcoin} alt="Bitcoin" width={30} height={30} />
					</li>
					<li>
						<Image src={Bitcoin} alt="Bitcoin1" width={30} height={30} />
					</li>
					<li>
						<Image src={Bitcoin} alt="Bitcoin2" width={30} height={30} />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SideMenu;

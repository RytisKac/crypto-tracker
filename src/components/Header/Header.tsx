import Image from 'next/image';
import React from 'react';
import Home from '../../assets/images/home.svg';
import HamButton from '../Button/HamButton';
import SearchInput from '../SearchInput/SearchInput';
import styles from './Header.module.scss';

type Props = {};

const Header = (props: Props) => {
	return (
		<div className={styles.container}>
			<HamButton />
			<div className={styles.pageName}>
				<Image src={Home} alt="Home" width={30} height={30} />
				<span>Dashboard</span>
			</div>
			<div>
				<SearchInput />
			</div>
		</div>
	);
};

export default Header;

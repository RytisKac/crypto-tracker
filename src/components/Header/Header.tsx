import Image from 'next/image';
import React, { useState } from 'react';
import Home from '../../assets/images/home.svg';
import HamButton from '../Button/HamButton';
import HamMenu from '../HamMenu/HamMenu';
import SearchInput from '../SearchInput/SearchInput';
import styles from './Header.module.scss';
import useMediaQuery from '@/hooks/useMediaQuery';

const Header = () => {
	const [open, setOpen] = useState(false);
	const isMobile = useMediaQuery('(max-width: 992px)');
	return (
		<div className={styles.container}>
			{isMobile && (
				<div>
					<HamButton isOpen={open} toggle={() => setOpen(!open)} />
					<HamMenu isOpen={open} />
				</div>
			)}
			<div className={styles.pageName}>
				<Image src={Home} alt="Home" width={30} height={30} />
				<h3>Dashboard</h3>
			</div>
			<div>
				<SearchInput />
			</div>
		</div>
	);
};

export default Header;

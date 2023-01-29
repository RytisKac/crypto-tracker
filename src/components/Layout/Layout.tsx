import React from 'react';
import SideMenu from '../SideMenu/SideMenu';
import styles from './Layout.module.scss';

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div className={styles.container}>
			<SideMenu />
			{children}
		</div>
	);
};

export default Layout;

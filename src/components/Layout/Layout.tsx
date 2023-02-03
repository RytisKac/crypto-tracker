import React from 'react';
import News from '../News/News';
import SideMenu from '../SideMenu/SideMenu';
import styles from './Layout.module.scss';

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div className={styles.container}>
			<SideMenu />
			<div className={styles.content}>{children}</div>
			<News
				data={[
					{
						title: 'test news',
						excerpt: 'this is text news article...',
						date: '2023-01-23',
					},
				]}
			/>
		</div>
	);
};

export default Layout;

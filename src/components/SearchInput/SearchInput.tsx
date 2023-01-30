import Image from 'next/image';
import React from 'react';
import Search from '../../assets/images/search.svg';
import styles from './SearchInput.module.scss';

interface Props {}

const SearchInput = (props: Props) => {
	return (
		<div className={styles.container}>
			<Image
				className={styles.searchIcon}
				src={Search}
				alt="Search icon"
				width={20}
				height={20}
			/>
			<input
				{...props}
				className={styles.searchInput}
				placeholder="Search..."
			/>
		</div>
	);
};

export default SearchInput;

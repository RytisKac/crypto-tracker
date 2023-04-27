import Image from 'next/image';
import React, { useState } from 'react';
import Search from '../../assets/images/search.svg';
import styles from './SearchInput.module.scss';
import { useRouter } from 'next/router';

interface Props { }

const SearchInput = (props: Props) => {
	const [query, setQuery] = useState('');
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		router.push(`/search/${query}`)
	}

	return (
		<form className={styles.container} onSubmit={handleSubmit}>
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
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
		</form>
	);
};

export default SearchInput;

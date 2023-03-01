import Link from 'next/link';
import React from 'react';
import styles from './NewsCard.module.scss';

interface Props {
	title: string;
	excerpt: string;
	date: string;
}

const NewsCard = ({ title, excerpt, date, }: Props) => {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.excerpt}>{excerpt}</p>
			<p className={styles.date}>{date}</p>
		</div>

	);
};

export default NewsCard;

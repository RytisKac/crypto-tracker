import React from 'react';
import styles from './NewsCard.module.scss';

interface Props {
	title: string;
	excerpt: string;
	date: string;
}

const NewsCard = ({ title, excerpt, date }: Props) => {
	return <div className={styles.container}>NewsCard</div>;
};

export default NewsCard;

import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import styles from './News.module.scss';

interface News {
	title: string;
	excerpt: string;
	date: string;
}

interface Props {
	data: News[];
}

const News = ({ data }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.headerContainer}>
					<h3>News</h3>
				</div>
				<div className={styles.newsList}>
					{data.map((item) => {
						return (
							<NewsCard
								key={item.title}
								title={item.title}
								excerpt={item.excerpt}
								date={item.date}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default News;

import { NewsData } from '@/utils/types';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import styles from './News.module.scss';

interface Props {
	data: NewsData[];
}

const News = ({ data }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.headerContainer}>
					<h3>Latest News</h3>
				</div>
				<div className={styles.newsList}>
					{data.map((item) => {
						return (
							<NewsCard
								key={item.id}
								title={item.title}
								excerpt={item.slug}
								date={item.published_at}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default News;

import styles from "./Content.module.css";
import NewsCard from "./NewsCard";

const Content = (props) => {

	const newsList = props.news.news.articles.map((news) => {
		return (
			<NewsCard
				imgUrl={news.urlToImage}
				title={news.title}
				author={news.author}
			></NewsCard>
		);
	})

	return (
		<div className={styles.box}>
			{newsList}
		</div>
	)
}

export default Content;
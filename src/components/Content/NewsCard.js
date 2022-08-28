import styles from "./NewsCard.module.css";

const NewsCard = (props) => {
	return (
		<div className={styles.card}>
			<div >
				<img className={styles.img} src={props.imgUrl} />
			</div>
			<div>
				<h2> {props.title}</h2>
				<p>{props.author}</p>
			</div>
		</div>
	)
}

export default NewsCard;
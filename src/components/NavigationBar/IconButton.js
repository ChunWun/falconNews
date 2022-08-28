import styles from "./IconButton.module.css";

const IconButton = (props) => {
	return (
		<button className={styles.iconButton}>
			<img className={styles.icon} src={props.url} />
			<p className={styles.text}>{props.title}</p>
		</button>
	)
}

export default IconButton;
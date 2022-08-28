import styles from "./NavigationBar.module.css";
import icon from "../../asset/icon.svg";
import IconButton from "./IconButton";

const NavigationBar = () => {

	const buttonsList = [
		{
			url: icon,
			title: "熱門報導"
		},
		{
			url: icon,
			title: "台灣"
		}, {
			url: icon,
			title: "中國"
		}, {
			url: icon,
			title: "全球"
		}, {
			url: icon,
			title: "娛樂"
		}, {
			url: icon,
			title: "商業"
		}, {
			url: icon,
			title: "運動"
		},
		{
			url: icon,
			title: "科技"
		},
	]

	const iconButtons = buttonsList.map((btn) => {
		return (
			<IconButton
				url={btn.url}
				title={btn.title}
			></IconButton>
		);
	})

	return (
		<div className={styles.box}>
			<div className={styles.bar}>
				{iconButtons}
			</div>
		</div>
	)

}

export default NavigationBar;
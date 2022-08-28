import Package from "../../../package.json";
import styles from "./PageInfo.module.css";

const PageInfo = () => {
	const version = Package.version;

	return (
		<span className={styles.version}>
			<p>版權隱私和cookie</p>
			<p>法律聲明</p>
			<p>廣告</p>
			<p>我們的廣告</p>
		</span>
	);
}

export default PageInfo;
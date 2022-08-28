import Header from "./components/Header/Header.js";
import React, { useEffect, useState } from "react";
import PageInfo from "./components/FooterInfo/PageInfo.js";
import NavigationBar from "./components/NavigationBar/NavigationBar.js";
import Content from "./components/Content/Content.js";
import styles from "./App.module.css";

function App() {
	const [newsData, setNewsData] = useState('');

	useEffect(() => {
		fetch("https://newsapi.org/v2/top-headlines?country=tw&apiKey=c14ac1132c5b4fabac7ee0bb1818ea79")
			.then(response => response.json())
			.then(data => setNewsData({ news: data }))
	}, []);

	return (
		<div>
			<Header />
			<main className={styles.main}>
				<NavigationBar />
				{(newsData) ? <Content news={newsData} /> : <p>打滿了</p>}
			</main>
			<footer>
				<PageInfo />
			</footer>
		</div >
	);
}

export default App;

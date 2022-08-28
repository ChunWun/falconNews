import React from 'react';
import styles from "./Header.module.css";


const Header = (props) => {

	return (
		<React.Fragment>
			<header className={styles.header}>
				<img className={styles.logo} src='https://1000logos.net/wp-content/uploads/2017/12/Bing-logo.png' />
				<div >
					<input class={styles.searchBar} type="text" name="search" id="search" placeholder="輸入名稱" />
				</div>
			</header>
		</React.Fragment >
	)
}

export default Header;
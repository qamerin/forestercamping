import Head from "next/head";
import styles from "./layout.module.css";
import utilStyle from "../styles/utils.module.css";
import Link from "next/link";

const name ="Forester Camping Blog";
export const siteTitle="Forester Camping Blog"

function Layout({children,home}) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" hfref="/favicon.ico" />
			</Head>
			<header className={styles.header}>
				{ home ? (
					<>
						<img
						 className={`${utilStyle.borderCircle} ${styles.headerHomeImage}`} 
						 src="/images/profile.jpg"></img>
						<h1 className={utilStyle.heading2Xl}>{name}</h1>
					</>
				) :(
					<>
						<img
						 className={`${utilStyle.borderCircle} ${styles.headerImage}`} 
						 src="/images/profile.jpg"></img>
						<h1 className={utilStyle.heading2Xl}>{name}</h1>
					</>
				
				)}
			</header>
			<main>
				{children}
				{!home && (
					<div>
						<Link href="/">ホームへ戻る</Link>
					</div>
				)}
			</main>
		</div>
	);
}

export default Layout;
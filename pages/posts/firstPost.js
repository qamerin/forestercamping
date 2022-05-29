import Head from 'next/head';
import Link from 'next/link';

export default function FirstPost() {
	return (
		<div>
			<Head>
				<title>firstPost</title>
			</Head>
			
			<h1>最初の投稿</h1>
			<Link href="/"><h1>ホームへ戻る</h1></Link>
		</div>
	);
}
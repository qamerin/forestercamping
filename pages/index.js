import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Layout,{siteTitle} from '../components/Layout'
import utilStyle from "../styles/utils.module.css"
import { getPostsData } from '../lib/post'

// SSGの場合
export async function getStaticProps(){
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return {
    props:{
      allPostsData,
    }
  }
}

// // SSRの場合
// export async function getServerSidePros(context){
//   return {
//     props:{
//       // コンポーネントにわたすためのPrpos

//     }
//   }
// }


export default function Home({allPostsData}) {
  return (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`} >
      <p>ほげほげほげ</p>
    </section>
    <section  className={`${utilStyle.headingMd} ${utilStyle.padding1px}`} >
      <h2>✍エンジニアのメモ</h2>
      <div className={styles.grid}>
        {allPostsData.map(({id,title,date,thumbnail}) =>(
        <article key={id}>
          <Link href={`/posts/${id}`}>
            <img 
             className ={styles.thumbnailImage} 
             src={`${thumbnail}`} alt="" />
          </Link>
          <Link href={`/posts/${id}`}>
            <a className={utilStyle.boldText}>{title}</a>
          </Link>
          <br />
          <small className={utilStyle.lightText}>
            {date}
          </small>
         </article>

        ))}
      </div>
    </section>
  </Layout>
  )
}

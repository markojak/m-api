import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>markojak.xyz</title>
        <meta name="description" content="Marko Jak API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <p className={styles.description}>
          <code className={styles.code}>markojak.com</code>
        </p>

        <div className={styles.grid}>
          <a href="https://markojak.com" className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>Read my essays on building products that people want and finding meaning in your life. </p>
          </a>

          <a href="https://twitter.com/markojak_" className={styles.card}>
            <h2>Twitter &rarr;</h2>
            <p>Connect / Follow me on Twitter and show me what you&apos;re working on 💪 </p>
          </a>

        </div>
      </main>
    </div>
  )
}

export default Home

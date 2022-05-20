import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Job Tracker</title>
        <meta name="description" content="job tracker if is a website for finding job for developers." />
        <link rel="icon" href="./images/favicon-32x32.png" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

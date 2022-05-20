import Head from 'next/head'
import Image from 'next/image'
import Jobs from '../src/components/Jobs/Jobs'
import theme from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={theme.container}>
      <Head>
        <title>Job Tracker</title>
        <meta name="description" content="job tracker if is a website for finding job for developers." />
        <link rel="icon" href="./images/favicon-32x32.png" />
      </Head>

      <main className={theme.main}>
        <Jobs />
      </main>

      <footer className={theme.footer}>
      </footer>
    </div>
  )
}

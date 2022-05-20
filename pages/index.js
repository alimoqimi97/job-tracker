import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { DATA_URL } from '../js/constants/constants'
import { setJobs } from '../js/redux/slices/jobs/jobsSlice'
import JobOpportunity from '../src/components/JobOpportunity/JobOpportunity'
import Jobs from '../src/components/Jobs/Jobs'
import theme from '../styles/Home.module.css'

function Home({jobs}) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setJobs(jobs));
  },[jobs])


  return (
    <div className={theme.container}>
      <Head>
        <title>Job Tracker</title>
        <meta name="description" content="job tracker if is a website for finding job for developers." />
        <link rel="icon" href="./images/favicon-32x32.png" />
      </Head>

      <main className={theme.main}>
        <Jobs />
        {/* <JobOpportunity {...jobs[0]} /> */}
      </main>

      <footer className={theme.footer}>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {

  const response = await fetch(DATA_URL);
  const data = await response.json();

  return {
    props: {
      jobs: data,
    }
  }
}

export default Home;
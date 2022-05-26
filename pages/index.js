import Head from 'next/head'
import React , { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DATA_URL from '../js/constants/constants';
import { addToBookmarks, setJobs } from '../js/redux/slices/jobs/jobsSlice'
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
      </main>

      <footer className={theme.footer}>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {

  const response = await fetch(DATA_URL);
  const data = await response.json();

  // let temp = data[2].logo.split('//');
  // let tmp1 = temp[1];

  // tmp1 = tmp1.split('/');
  // tmp1.pop();
  // tmp1.pop();
  // const result = tmp1.join('/');
  // console.log(temp[0] + '//' + result);

  // let editedData = data.map((element) => {
  //    element.logo = element.logo.replace('ffffff','');
  //    element.logo = element.logo.replace('dddddd','');

  //     return element;

  // });

  return {
    props: {
      jobs: data,
    }
  }
}

export default Home;
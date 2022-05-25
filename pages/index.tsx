import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from '@components/pages/Home/Home'
import MREftekhari from '../public/images/MrEftekhariOptimized.jpg'
console.log('here is mr efte:', MREftekhari)
const Home: NextPage = () => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Amverse</title>
        <meta name="description" content="Amverse" />
        <link rel="icon" href="/android-chrome-192x192.png" />
      </Head>

      <main className={`${styles.main} s
      !bg-dark-Default relative`}
    
       >
        <div className='video absolute w-full h-full t-0 left-0'>
           <video controls width="100%" height='100%' className=' relative top-[-67px]'>
                <source src="/videos/cyrpusDrone.mp4"
                          type="video/mp4"/>

              Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
        <HomePage />


      </main>

      {/* <footer className={styles.footer}>
        
      </footer> */}
    </div>
  )
}

export default Home

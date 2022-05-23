import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from '@components/pages/Home/Home'
import MREftekhari from '../public/images/MrEftekhariOptimized.jpg'
console.log('here is mr efte:', MREftekhari)
const Home: NextPage = () => {
  
//   const styling = {
//     backgroundImage: `url('${MREftekhari.src}')`,
//     // width:"100%",
//     // height:"100%",
//     'background-size': 'cover',
//     'background-repeat': 'no-repeat',
//     'background-position': 'center'
// }
  return (
    <div className={styles.container}>
      <Head>
        <title>Amverse</title>
        <meta name="description" content="Amverse" />
        <link rel="icon" href="/android-chrome-192x192.png" />
      </Head>

      <main className={`${styles.main} s
      !bg-dark-Default relative`}
      //  style={styling}
       >
        {/* <div className='overlay w-full h-full absolute border-4 border-blue-400 bg-[#292929] opacity-80'></div> */}
        <HomePage />


      </main>

      {/* <footer className={styles.footer}>
        
      </footer> */}
    </div>
  )
}

export default Home

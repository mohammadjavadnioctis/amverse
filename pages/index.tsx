
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import HomePage from "@components/pages/Home/Home"
import MREftekhari from "../public/images/MrEftekhariOptim.jpg"
const Home: NextPage = () => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Amverse</title>
        <meta name="description" content="Amverse" />
        <link rel="icon" href="/android-chrome-192x192.png" />
      </Head>

      <main className={`${styles.main} !bg-dark-Default relative`}
    
       >
        <div className="video absolute w-full h-full t-0 left-0">
           <video width="100%" height='100%' className=' relative top-[-67px]' muted autoPlay loop>
                <source src="/videos/cyrpusDrone.mp4"
                          type="video/mp4"/>

              Sorry, your browser does not support embedded videos.
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

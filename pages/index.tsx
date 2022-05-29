
import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import HomePage from "@components/pages/Home/Home"
import Image from "next/image"
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
        <div className="video absolute w-full h-full">
          
           <video width="100%" height='100%' className=' relative hidden top-[-57px] xl:inline-block ' muted autoPlay loop>
                <source src="/videos/cyrpusDrone.mp4"
                          type="video/mp4"/>

              Sorry, your browser does not support embedded videos.
          </video>
          <div className="hidden xl:relative w-full h-full z-[1]">

              <Image 
                src={'/images/MrEftekhariOptim.jpg'}
                layout={'fill'}
                objectFit={'cover'}
                objectPosition={'center'}
              />
          <div className="absolute w-full h-full top-0 left-0 bg-dark-50 opacity-80"></div>

          </div>
          <div className="absolute w-full h-full top-0 left-0 bg-dark-50 opacity-80"></div>
        </div>
        <HomePage />


      </main>

      {/* <footer className={styles.footer}>
        
      </footer> */}
    </div>
  )
}

export default Home

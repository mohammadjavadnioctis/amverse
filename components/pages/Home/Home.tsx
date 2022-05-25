import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SubCompanies from './SubCompanies'

const HomePage: NextPage = () => {
  return (
      <div className='container grid grid-cols-[1fr_2fr]  h-full '>
        <div className='slider-container w-[340] h-[340] overflow-hidden relative' >
          <div className='absolute w-full h-full  shadow-[rgb(41_41_41)_0px_0px_42px_53px_inset] z-10'></div>
        <Image src={'/images/MrEftekhariOptimized.jpg'} layout='responsive' width={300} height={400} />
            
        </div>       
   
        <div className='sub-companies-container '>
        
        <SubCompanies />

        </div>

      </div>
  )
}

export default HomePage

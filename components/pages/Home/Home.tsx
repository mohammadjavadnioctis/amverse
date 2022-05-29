import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SubCompanies from './SubCompanies'

const HomePage: NextPage = () => {
  return (
      <div className='container grid xl:grid-cols-[1fr_2fr] grid-rows-[380px] h-full xl:overflow-hidden'>
        <div className='hidden xl:inline slider-container overflow-hidden relative rounded-md' >
          <div className=''>
          
          <div className='absolute w-full h-full  shadow-[rgb(41_41_41)_0px_0px_42px_53px_inset] z-[5]'></div>
            <Image 
              src={'/images/MrEftekhariOptim.jpg'} 
              layout='responsive' 
              width={130} 
              height={120}
              alt={'amir-hossein-eftekhari'}
            />

          </div>
            
        </div>       
   
        <div className='sub-companies-container z-10'>
        
        <SubCompanies />

        </div>

      </div>
  )
}

export default HomePage

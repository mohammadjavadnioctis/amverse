import Image from "next/image"
import { FC, PropsWithChildren, ReactNode } from "react"
import styles from  './layoutAnimation.module.css'


const Layout : FC<PropsWithChildren<{}>> = ({children}) => {
    
    return(
        <>
                   
         <div className={`${styles.animation_background} aspect-w-1 aspect-h-1`} ></div>
         <div className={`${styles.header_wrapper}  w-full absolute t-0 l-0 z-30 flex justify-center items-center`}>
             <div className="container relative">

                <div className="inline-block">
                        
                        <Image 
                            className={styles.hiddenLogo} 
                            src={'/AmverseLogoCropped.png'} 
                            width={100} 
                            height={100}
                            alt={'amverse-logo'}
                            /> 

                </div>
             <div className={`${styles.logo_container} -translate-x-1/2 xl:translate-x-0`}>

                        <Image 
                            className={styles.logo} 
                            src={'/AmverseLogoCropped.png'}
                            width={100} 
                            height={100}
                            alt={'amverse-logo'}
                            />
             
             </div>
             </div>
         </div>
            {children}
      {/*  <span>'footer'</span> */}
        
        </>
    )
}

export default Layout
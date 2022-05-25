import Image from "next/image"
import { FC, PropsWithChildren, ReactNode } from "react"

const Layout : FC<PropsWithChildren<{}>> = ({children}) => {
    
    return(
        <>
         <div className="w-full absolute t-0 l-0 z-30 flex justify-center items-center">
             <div className="container flex justify-end">

                <Image src={'/AmverseLogoCropped.png'} width={150} height={100} />
             
             </div>
         </div>
            {children}
      {/*  <span>'footer'</span> */}
        
        </>
    )
}

export default Layout
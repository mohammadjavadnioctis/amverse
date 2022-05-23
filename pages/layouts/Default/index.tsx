import Image from "next/image"
import { FC, PropsWithChildren, ReactNode } from "react"

const Layout : FC<PropsWithChildren<{}>> = ({children}) => {
    
    return(
        <>
         <div className="w-full flex justify-center items-center">
             <div className="container flex justify-end mr-32">

                <Image src={'/AmverseLogoCropped.png'} width={150} height={100} />
             
             </div>
         </div>
            {children}
      {/*  <span>'footer'</span> */}
        
        </>
    )
}

export default Layout
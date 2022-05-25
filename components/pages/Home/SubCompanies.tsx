import { FC, useId } from "react";
import Image from 'next/image'

const Images = [
    {
        name: 'Real-Estate',
        src: '/images/Real.jpg'
    },
    {
        name: 'Music',
        src: '/images/music.jpeg'
    },
    {
        name: 'Tourism Services',
        src: '/images/tourism.jpg'
    },
    {
        name: 'Restaurant',
        src: '/images/restaurant.jpg'
    },
    {
        name: 'Academic',
        src: '/images/academy.jpg'
    },
    {
        name: 'Corporation',
        src: '/images/Corporation.jpg'
    }
]


const SubCompanies: FC = () => {
    const id = useId()
    return (
        <div className="SubCompanies-container w-full h-full">
            
            <div className="companies grid grid-cols-3  gap-8 justify-items-center  items-center
                             text-white w-full h-full">
                {Images && Images.length > 0 && Images.map((image) => (
                     <div className="relative flex flex-col justify-between cursor-pointer  bg-dark-50 rounded-md  w-full h-full overflow-hidden" key={id + image.name}>
                         <div className="aspect-w-3 aspect-h-2">
                            <div className="overflow-hidden rounded-md ">
                                <div className="w-full h-full relative">
                                    
                                    <Image 
                                        src={image.src}
                                        layout='fill'
                                        objectFit="cover"
                                        objectPosition='center'
                                    />
                                    
                                 </div>
                             </div>
                         
                         </div>
                         <span className="mb-2 ml-2">{image.name}</span>

                     </div>
                     
                     ) )
                }
               
             </div>

        </div>
    )
}


export default SubCompanies
import { FC, useId } from "react";
import Image from 'next/image'

const Images = [
    {
        name: 'Real-Estate',
        src: '/images/real.jpg'
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
            
            <div className="companies grid grid-cols-[repeat(3,_minmax(0,_200px))] grid-rows-[repeat(2,minmax(0,200px))] gap-8 justify-center items-center
                             text-white w-[100%] h-[100%] border-2 border-orange-400">
                {Images && Images.length > 0 && Images.map((image) => (
                     <div className="relative flex flex-col justify-between cursor-pointer  bg-dark-50 rounded-md  w-full h-full overflow-hidden" key={id + image.name}>
                                <div className="w-full h-full relative overflow-hidden rounded-md flex justify-center ">
                                    
                                    <Image 
                                        src={image.src}
                                        // layout='fill'
                                        // objectFit="cover"
                                        // objectPosition='center'
                                        width={200}
                                        height={150}
                                        alt={image.name}
                                    />
                                    
                                 </div>
                         
                         <span className="my-2 ml-2 text-sm">{image.name}</span>

                     </div>
                     
                     ) )
                }
               
             </div>

        </div>
    )
}


export default SubCompanies
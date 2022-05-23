import { FC, useId } from "react";
import Image from 'next/image'

const Images = [
    {
        name: 'Real-Estate',
        src: '/images/svg/RealEstate.svg'
    },
    {
        name: 'Tourism Services',
        src: '/images/svg/touristServices.svg'
    },
    {
        name: 'Restaurant',
        src: '/images/svg/restaurant.svg'
    },
    {
        name: 'Music',
        src: '/images/svg/microphone.svg'
    },
    {
        name: 'Academic',
        src: '/images/svg/academic.svg'
    },
    {
        name: 'Corporation',
        src: '/images/svg/corp-reg.svg'
    }
]


const SubCompanies: FC = () => {
    const id = useId()
    return (
        <div className="SubCompanies-container w-full h-full">
            
            <div className="companies grid grid-cols-3 grid-rows-2 gap-8 justify-items-center  items-center
                             text-Mangold w-full h-full">
                {Images && Images.length > 0 && Images.map((image) => (
                     <div className="flex flex-col justify-center cursor-pointer">
                         <span className="mb-4">{image.name}</span>
                         <Image src={image.src} width={50} height={50} key={id + image.name} />
                     </div>
                     
                     ) )
                }
               
             </div>

        </div>
    )
}


export default SubCompanies
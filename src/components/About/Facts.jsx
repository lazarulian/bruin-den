import React from 'react'
import Image from "next/image";
import Rainbow from "../../../public/assets/rainbow.png"
import Youth from "../../../public/assets/youth.png"
import Stress from "../../../public/assets/stress.png"


const Facts = () => {
  return (
    <div className='bg-sky-900 grid grid-cols-6 gap-2 pt-20'>
        <div className='col col-span-2 flex items-center justify-center'>
         <Image src={Rainbow}  height={159} alt="Rainbow" />
        </div>
        <div className='col col-span-2 flex items-center justify-center'>  
        <Image src={Youth}  height={150} alt="Youth" />
        </div>
        <div className='col col-span-2 flex items-center justify-center'>
        <Image src={Stress}  height={150} alt="Stress" />
        </div>

    </div>
    
  );
  
}

export default Facts
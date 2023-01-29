import React from 'react'
import Image from "next/image";

const Info = () => {
  return (
    <div className='bg-blue-200 grid grid-cols-6 gap-2  font-serif pb-20'>
        <div className = 'text-center col col-span-2  pl-28 pr-28 pt-5' >
            The LGBTQIA community are more likely to 
            experience victimization and abuse by social workers
        </div>
        <div className = 'text-center col col-span-2  pl-28 pr-28 pt-5 ' >   
            40% of homeless youth identify as LGBTQIA. Many report being forced to 
            leave their homes due to rejection or abuse from family members
        </div>
        <div className ='text-center col col-span-2  pl-28 pr-28 pt-5'>
        LGBTQIA members with unstable housing report worse school 
        functioning, higher substance use, and poorer mental health
        </div>

    </div>
    
  );
}

export default Info
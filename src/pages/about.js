import React from 'react'
import Image from "next/image";
import HouseImg from "../../public/assets/houseImage.png";

const about = () => {
  return (
    <div>
      <div>
      <div>
      <Image src={HouseImg} alt="HouseImage" /> 
      </div>
      <h1 className = "text-5xl text-center">
      About Us 
      </h1>
      </div>

    </div>
  )
}

export default about
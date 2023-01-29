import React from "react";
import Image from "next/image";
import HouseImg from "../../../public/assets/houseImage.png";

const House = () => {
  return (
    <div className="bg-white grid grid-cols-6 gap-2">
      <div className="col col-span-2"></div>

      <div className="text-center col col-span-2 flex items-center justify-center">
        <Image src={HouseImg} width={200} alt="House" />
      </div>

      <div className="col col-span-2"> </div>
    </div>
  );
};

export default House;

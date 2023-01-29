import React from "react";
import Image from "next/image";
import BannerImage from "../../../public/assets/BufferTransparent@3x.png"

const Banner = () => {
  return (
    <div className="w-screen h-screen">
      <div className="bg-turquoise-100">
        <Image src={BannerImage} alt="Banner"/>
      </div>
    </div>
  );
};

export default Banner;

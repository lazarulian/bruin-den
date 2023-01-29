import React from "react";
import Image from "next/image";
import BannerImage from "../../../public/assets/BufferImage@3x.png"

const Banner = () => {
  return (
    <div className="w-screen">
        <Image src={BannerImage} alt="Banner"/>
    </div>
  );
};

export default Banner;

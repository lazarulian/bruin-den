import React from "react";
import Image from "next/image";
import Logo from "../../../public/assets/logo.png"

const Couches = () => {
  return (
    <div className=" bg-black">
      <div className=" flex items-center justify-center">
        <Image src={Logo} height = {300} width={300} alt="Logo"/>
      </div>
      <div className="flex justify-center">
        <h1 className = "text-white text-3xl mb-10"> A Qwer Hacks Project </h1>
      </div>
    </div>
    

  );
};

export default Couches;

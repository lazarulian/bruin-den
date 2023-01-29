import { BeachAccessSharp } from "@mui/icons-material";
import React from "react";
import Image from "next/image";
import Bear from "../../../public/assets/Bear.png"

const Mission = () => {
  return (
    <div className=" bg-slate-50 flex h-full text-center m-2 justify-center items-center ">
      <div className="lg:w-1/3 w-1/2">
        <h1 className ="text-6xl">OUR MISSION</h1>
        <p className="m-10"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
      </div>
      <div className="col col-span-1 object-center p-20">
        <Image src={Bear} height={450} alt="Bear"/>
      </div>
    </div>
    
  );
};

export default Mission;

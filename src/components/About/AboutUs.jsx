import React from "react";
import Image from "next/image";
import House from "../../../public/assets/houseImage.png";

const AboutUs = () => {
  return (
    <div className="bg-white grid grid-cols-6 gap-2">
      <div className="col col-span-2"></div>
      <div className="text-center col col-span-2">
        <h1 className="font-serif text-6xl p-10 pt-0">About Us</h1>
        <p className="font-serif text-l pl-10 pr-10 mb-10">
          Bruin Den is a platform that provides authentic information for
          apartment-hunters to ensure equitable pricing for all
        </p>
      </div>
      <div className="col col-span-2"></div>
    </div>
  );
};

export default AboutUs;

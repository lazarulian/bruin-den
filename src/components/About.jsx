import React from "react";
import { House, AboutUs, Facts, Info, Paragraphs } from "./";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";


const About = () => {
  return (
    <div className="container mx-auto lg:px-10 mb-8 px-2">
      <House />
      <AboutUs />
      <Facts />
      <Info />
      <Paragraphs />
      <div className = "bg-black text-white font-serif text-center p-10">
      <div className = "text-3xl pb-10">
            Helpful Resources at UCLA!
        </div>

        <a
        className="text-center p-5 rounded-lg bg-sky-900  hover:bg-orange-600 duration-300"
        href="https://bruinshelter.org/"
        target="_blank"
        rel="noreferrer" >
        Bruin Shelter
        </a>
        <a className = "p-5"></a>

        <a
        className="text-center p-5 rounded-lg  bg-sky-900  hover:bg-orange-600 duration-300"
        href="https://lgbtq.ucla.edu/"
        target="_blank"
        rel="noreferrer" >
        UCLA LGBTQ Center
        </a>
        <a className = "p-5"></a>

        <a
        className="text-center p-5 rounded-lg bg-sky-900  hover:bg-orange-600 duration-300"
        href="https://cpo.ucla.edu/cpo/foodcloset/"
        target="_blank"
        rel="noreferrer" >
        UCLA Food Closet
        </a>
      </div>

      <div className="bg-black flex items-center justify-center">
      <Image src={Logo} height = {300} width={300} alt="Logo"/>

      </div>
    </div>
  );
};

export default About;

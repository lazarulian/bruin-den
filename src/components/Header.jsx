/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/logo.png"
import Home from "../../public/assets/Home_icon.png"
import Save from "../../public/assets/Save_icon.png"
import User from "../../public/assets/User_icon.png"
import {BiHomeAlt, BiUser, BiWorld} from 'react-icons/bi'

export default function Header() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="bg-gray-200 grid grid-cols-6 gap-2 h-70">
      <div className="col col-span-2 h-full pl-8">
        <Image src={Logo} width={70} height={70} alt="Logo"/>
      </div>

      <div className="col col-span-2 flex items-center justify-center" >
        <Link href='/about'>
          <span class = "font-serif align-text-bottom pr-5 hover:text-red-300 duration-300"> about</span>
        </Link>
        <Link href='/apartments'>
        <span class = "font-serif align-text-bottom pr-5 hover:text-red-300 duration-300"> apartments</span>
        </Link>
        <Link href='/apartments'> 
        {/* change to create listing */}
        <span class = "font-serif align-text-bottom pr-5 hover:text-red-300 duration-300"> create listing</span>
        </Link>
      </div>

      <div className="col col-span-2 flex items-center justify-center pl-8">
      {/* <Image src = {Home} width={25} height={25} alt ="Home" /> */}
      <Link href='/'>
        <BiHomeAlt className="mx-1"/>
      </Link>
      <BiUser className="mx-1"/>
      <BiWorld className="mx-1"/>
      </div>
    </div>
  );
}

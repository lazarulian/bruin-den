import Link from "next/link";
import React from "react";
import Image from "next/image";
import Bear from "../../../public/assets/Bear.png";

const Mission = () => {
  return (
    <div className=" bg-slate-50 flex h-full text-center m-2 justify-center items-center ">
      <div className="lg:w-1/3 w-1/2">
        <h1 className="text-6xl">OUR MISSION</h1>
        <p className="mx-10 mt-10">
          Our mission is to promote equity and accessibility in housing for
          marginalized students at UCLA by providing a resource to
          ensure that all students have access to safe and affordable housing
          options that meet their unique circumstances.
        </p>
        <br />
        <p className="mb-7">
          We believe that transparency is the key to preventing exploitation and
          unfair practices that occur daily within the real estate realm. Learn more
          below.
        </p>
        <Link href="/about">
          <button class="hover:opacity-50 bg-sky-800 duration-300 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </Link>
      </div>
      <div className="col col-span-1 object-center p-20">
        <Image src={Bear} height={450} alt="Bear" />
      </div>
    </div>
  );
};

export default Mission;

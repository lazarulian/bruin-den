import React from "react";
import Image from "next/image";
import { AddApartment } from "@/components";
import uploadImage from "../../public/assets/uploadImage.png";

const addApartment = () => {
  return (
    <div className="px-12 py-8 my-8 h-screen bg-slate-100 align-middle content-center">
      <div className="container mx-auto lg:px-10 mb-8 px-2 ">
        <div className="grid lg:grid-cols-2 lg:gap-3 bg-white rounded-xl">
          <div className="text-center content-center align-middle m-8 p-8 ">
            <h1 className="font-semibold text-gray-700 text-4xl pb-4">
              Add Apartment
            </h1>
            <AddApartment />
          </div>
          <div className="col-span-1">
            <div className="flex h-full align-bottom items-center justify-center ">
              <Image src={uploadImage} alt="Upload Image"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default addApartment;

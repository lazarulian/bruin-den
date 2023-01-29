import React from "react";
import { House, AboutUs, Facts, Info, Paragraphs } from "./";

const About = () => {
  return (
    <div className="container mx-auto lg:px-10 mb-8 px-2">
      <House />
      <AboutUs />
      <Facts />
      <Info />
      <Paragraphs />
    </div>
  );
};

export default About;

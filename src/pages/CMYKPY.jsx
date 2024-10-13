import React from "react";
import Hero from "../components/Hero/Hero";
import Link from "../components/Hero/Link";

const CMYKPY = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen p-5">
        <h1 className="font-bold text-3xl mb-5 text-center">
          Rohini Venture by BVG
        </h1>
        <Hero />
      <Link />
      </div>
    </>
  );
};

export default CMYKPY;

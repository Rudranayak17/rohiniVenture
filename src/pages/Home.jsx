import React from "react";
import Slider from "../components/slider/horizontalSlider";
import BookSlider from "../components/slider/BookSlider";
import About from "../components/about/About";

const Home = () => {
  return (
    <>
      <Slider />
      <h1 className="text-center font-bold text-lg md:text-xl lg:text-xl m-5 p-4">
        Internship, Apprenticeship, Job and Business Opportunities Across BVG
        Group Companies
      </h1>
      <div className="relative max-w-md h-3/4 overflow-hidden mx-auto mb-4">
        <BookSlider />
      </div>
      <About />
    </>
  );
};

export default Home;

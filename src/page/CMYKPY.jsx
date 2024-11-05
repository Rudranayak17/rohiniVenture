import React from "react";
import Hero from "../components/Hero/Hero.jsx";
import Link from "../components/Hero/Link.jsx";


const CMYKPY = () => {
    return (
        <>

            <div className="flex flex-col items-center justify-center h-auto p-5 max-w-full ">
                <h1 className="font-bold text-3xl mb-5 text-black tracking-wide">
                    Rohini Venture by BVG
                </h1>
                <Hero />
                <Link />
            </div>
        </>
    );
};

export default CMYKPY;
import React from "react";
import Women from "../img/woman_hero.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className=" bg-hero bg-no-repeat h-[800px] bg-cover bg-center py-24 ">
      <div className="container mx-auto px-6 md:py-12 lg:flex items-center justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] mr-3 bg-red-500"></div>New trend
          </div>
          <h1 className="uppercase text-[70px] leading-[1.1] font-light">
            Autumn sale stylish
            <br />
            <span className="font-semibold">Women</span>
          </h1>
          <Link
            to={""}
            className="font-semibold border-b-2 uppercase border-primary self-start"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={Women} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

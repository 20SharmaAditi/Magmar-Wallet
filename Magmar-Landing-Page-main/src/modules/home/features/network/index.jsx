import React from "react";
import one from "../../assets/Asset 4.png";
import two from "../../assets/Asset 5.png";
import three from "../../assets/Asset 6.png";
import four from "../../assets/Asset 7.png";
import Marquee from "react-fast-marquee";

export default function Network() {
  return (
    <div>
      <div className="sm:flex   mt-[2%] justify-center items-center flex-col pt-[3%] px-[5%]">
        <h5 className="text-white/50 text-center sm:text-base text-sm">
          Powering the next generation of builders
        </h5>
        <div className="flex sm:flex-row flex-col gap-3 items-center sm:mt-[-10px] sm:mb-[40px]">
          <Marquee className="mq" direction="left" speed={60}>
            <img className="w-[100px] mr-5" src={three} alt="buildorz" />

            <img className="w-[100px] mr-5" src={two} alt="buildorz" />

            <img className="w-[100px] mr-5" src={four} alt="buildorz" />
            <img className="w-[150px] mr-5" src={one} alt="buildorz" />
            <img className="w-[100px] mr-5" src={three} alt="buildorz" />

            <img className="w-[100px] mr-5" src={two} alt="buildorz" />

            <img className="w-[100px] mr-5" src={four} alt="buildorz" />
            <img className="w-[150px] mr-5" src={one} alt="buildorz" />
            <img className="w-[100px] mr-5" src={three} alt="buildorz" />

            <img className="w-[100px] mr-5" src={two} alt="buildorz" />

            <img className="w-[100px] mr-5" src={four} alt="buildorz" />
            <img className="w-[150px] mr-5" src={one} alt="buildorz" />
          </Marquee>
        </div>
      </div>
    </div>
  );
}

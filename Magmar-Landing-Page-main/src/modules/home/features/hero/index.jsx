import Spline from "@splinetool/react-spline";
import React from "react";
import Navbar from "../navbar";



export default function Hero() {
  return (
    <div className="relative w-full h-[100vh]" id="home">
      <Spline
        className="absolute  left-0 w-full h-full z-10"
        scene="https://prod.spline.design/HXtrvfpheoREhBFV/scene.splinecode"
      />
      <div className="absolute top-0 left-0 z-20 w-full">
        <Navbar />
      </div>
      <div className="absolute inset-0 bg-transparent h-[90vh] mt-[10vh] opacity-70 z-[10] "></div>
      <div className="max-w-[1440px] mx-auto ">
        <div className=" absolute bottom-[15%]  z-[10] px-[5%] ">
          <h1 className="text-white  font-bold text-[45px] leading-[50px]  ">
            Simplifying Crypto <br />
            Transactions
          </h1>
          <p className="text-white font-medium sm:text-lg text-base  sm:w-[500px]  w-full mt-[3%]">
            An ERC-4337 toolkit enhancing gasless transactions, social login,
            multichain support and much more making DeFi accessibile and secure.
          </p>
        </div>
      </div>
    </div>
  );
}

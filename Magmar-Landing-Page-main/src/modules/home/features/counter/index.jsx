import React from "react";
import Numbers from "./numbers";
import bg from "../../assets/bg.png"
export default function Counter() {
  return (
    <div className=" pb-[10%] sm:mt-0  -mt-[20%]  px-[5%]">
      <div className="h-[400px]  relative">
        <img className="absolute w-full h-full rounded-[30px]" src={bg} />
        <div className=" px-[5%] absolute z-[10] flex items-center h-full  text-white">
          <div className="grid sm:grid-cols-2 grid-cols-1  items-center">
            <div className="col-span-1">
              <h2 className="sm:text-[50px] text-[24px] font-bold sm:leading-[50px] leading-[35px]">
                We set standards for seamless blockchain transactions, so you
                can scale with effortless UX
              </h2>
            </div>
            <div className="col-span-1 w-full ">
              <Numbers />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

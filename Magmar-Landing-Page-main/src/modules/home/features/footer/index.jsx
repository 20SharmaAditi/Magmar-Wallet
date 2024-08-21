import React from "react";
import telegram from "../../assets/telegram.png"
import twitter from "../../assets/twitter.png";
export default function Footer() {
  return (
    <div className="px-[5%] py-[5%] text-white mt-[3%]  border-t border-[#18181A]">
      <div className="flex sm:flex-row flex-col justify-between items-start">
        <div className="flex flex-col  ">
          <h5 className="sm:w-[300px] w-full text-sm  text-white">
            Magmar Wallet is built on the Ethereum blockchain and leverages
            ERC-4337 standard. It is a smart wallet designed to simplify
            cryptocurrency transactions and asset management.{" "}
          </h5>
          <h6 className="sm:flex hidden text-xs mt-[2%] text-white/60">
            Copyright © 2024 Magmar Wallet
          </h6>
        </div>
        <div className="flex flex-col sm:items-end sm:mt-0 mt-[4%]">
          <div className="flex items-center sm:gap-7 gap-3 sm:mb-5 mb-3">
            <img
              className="sm:w-[40px] w-[30px]"
              src={telegram}
              alt="telegram"
            />
            <img
              className="sm:w-[40px] w-[30px]"
              src={twitter}
              alt="telegram"
            />
          </div>
          <h6 className="text-sm sm:w-[300px] sm:text-right">
            You can email magmar@wallet.org to provide feedback for support
            requests
          </h6>
          <h6 className="sm:hidden  flex text-xs mt-[2%] text-white/60">
            Copyright © 2024 Magmar Wallet
          </h6>
          <h6 className="text-xs   mt-[2%] underline text-white/60">
            Privacy Policy
          </h6>
        </div>
      </div>
    </div>
  );
}

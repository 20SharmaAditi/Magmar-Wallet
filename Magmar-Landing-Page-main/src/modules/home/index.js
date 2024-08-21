import React from "react";
import Hero from "./features/hero";
import Offers from "./features/offers";
import Feature from "./features/feature";
import Counter from "./features/counter";
import Wallet from "./features/wallet";
import Network from "./features/network";
import Portfolio from "./features/portfolio";
import Footer from "./features/footer";


export default function Home() {
  return (
    <div className="">
      <Hero />

      <div className="max-w-[1440px] mx-auto">
        <Network />
        <Offers />
        <Counter />
        <Feature />
        <Wallet />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Greeter() {
  return (
    <>
      <div className="flex flex-rows m-5 ">
        <div>
          <div className=" m-4 text-5xl font-bold text-white antialiased">
          <h1>  Discover </h1>
          <h1>And</h1>
          <h1>Collect</h1>
          <h1>Rare NFTs</h1>
          </div>
          <p className="text-white m-4">
            The most secure marketplace for buyingand selling unique crypto
            assets.
          </p>
        </div>
        <Image src={"/monitor.png"} width={300} height={300} alt="logo" />
      </div>

      <Button className="m-3">Buy NFTs</Button>
      <Button className="m-3">Sell NFTs</Button>
    </>
  );
}

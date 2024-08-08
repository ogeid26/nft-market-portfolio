import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Greeter() {
  return (
    <>
      <div className="flex flex-col m-5 sm:flex-row ">

        <div className=" m-4  text-white antialiased">
          <h1 className="text-5xl font-bold">
            {" "}
            Discover and collect Rare NFTs{" "}
          </h1>
          <p className="text-white mt-4 text-sm ">
            The most secure marketplace for buying and selling unique crypto
            assets.
          </p>
        </div>

        <div className="m-4">
          <img src={"/monitor.png"} width={500} height={300} alt="A screen" />
        </div>
      </div>
      <div className=" container mx-auto flex flex-row items-center justify-center">
      <Button className="text-transform: uppercase font-medium m-3 text-xs border-0 bg-[#8080D7]">Buy NFTs</Button>
      <Button className="m-3 font-bold">Sell NFTs</Button>
      </div>
    </>
  );
}

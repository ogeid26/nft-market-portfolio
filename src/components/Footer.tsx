import React from "react";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <div className="flex flex-row m-5 gap-20">
      <div>
        {" "}
        <h1>Krypto</h1>
      </div>

      <div>
        <div className="text-xs space-y-2">
        <h1 className="text-sm font-bold">Krypto</h1>
          <p>Home</p>
          <p>About</p>
          <p>Buy NFTs</p>
          <p>Sell NFTs</p>
        </div>
      </div>
      <div>
        <div className="text-xs space-y-2">
        <h1 className="text-sm font-bold">Krypto</h1>
          <p>Home</p>
          <p>About</p>
          <p>Buy NFTs</p>
          <p>Sell NFTs</p>
        </div>
      </div>
      <div>
        <div className="text-xs space-y-2">
        <h1 className="text-sm font-bold">Krypto</h1>
          <p>Home</p>
          <p>About</p>
          <p>Buy NFTs</p>
          <p>Sell NFTs</p>
        </div>
      </div>
    <div>
        <h1>Join our newsletter</h1>
        <Input 
        className="rounded-3xl w-40 h-10 mt-4"
        type="email" placeholder="Email Adress"></Input>
    </div>
    </div>
  );
}

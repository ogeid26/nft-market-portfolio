import React from "react";
import { Button } from "./ui/button";

export default function Billboard() {
  return (
    <div w-full>
    <div className="flex flex-col items-center bg-gradient-to-r from-indigo-400 to-yellow-100 rounded-xl shadow-md">
        <div className="p-3 flex flex-col items-center place-content-center">
          <div>
            <p className="font-bold text-xs text-black text-transform: uppercase">
              Are you ready?
            </p>
          </div>
          <div>
            <h1 className=" justify-center text-center mt-4 text-2xl  font-bold text-white">
              Be a Part Of the Next Big Thing
            </h1>
          </div>
          <div>
            <Button className="rounded-3xl block mt-3">Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center m-4">
      <div>
        <p className="text-transform: uppercase text-xs">Testimonials</p>
      </div>
      <div>
        <h1 className="text-5xl font-bold m-4 text-center ">Read What Others Have To Say</h1>
      </div>

      <div className="flex flex-col items-center">
        <div className="">
          <div>
            <Card className="w-72 bg-[#0F1351] border-0  shadow-inner">
              <CardHeader className="items-center">
            <Avatar className="w-20 h-20 ">
              <AvatarImage src="/monitor.png"></AvatarImage>
            </Avatar>
                <CardTitle className="text-white text-transform: uppercase text-lg">
                  Olivia Cole
                </CardTitle>
                <CardDescription className="text-xs font-light antialiased text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ullamcorper scelerisque mi, in malesuada felis malesuada vel.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

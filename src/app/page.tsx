import Analytics from "@/components/Analytics";
import Billboard from "@/components/Billboard";
import CallToAction from "@/components/CallToAction";
import Greeter from "@/components/Greeter";
import Sponsored from "@/components/Sponsored";
import Testimonials from "@/components/Testimonials";
import React from "react";

export default function page() {
  return (
      <div className="bg-gradient-to-r from-slate-500 to-indigo-900">
      <div className=" flex flex-col items-center text-white max-w-md mx-auto md:max-w-3xl">

        <div className="">
          <Greeter />
        </div>

        <div>
          <Sponsored/>
        </div>

        <div>
        <Analytics/>
        </div>
        
        <div>
          <CallToAction/>
        </div>

        <div>
          <Testimonials/>
        </div>


        <div>
          <Billboard/>
        </div>

      </div>
      </div>
  );
}

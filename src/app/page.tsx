import Analytics from "@/components/Analytics";
import CallToAction from "@/components/CallToAction";
import Greeter from "@/components/Greeter";
import Sponsored from "@/components/Sponsored";
import Testimonials from "@/components/Testimonials";
import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-[#010922] flex flex-col items-center p-3 m-3 text-white">

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

      </div>
    </>
  );
}

import Analytics from "@/components/Analytics";
import Billboard from "@/components/Billboard";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Greeter from "@/components/Greeter";
import Sponsored from "@/components/Sponsored";
import Testimonials from "@/components/Testimonials";
import React from "react";

export default function page() {
  return (
      <div className="bg-gradient-to-tl from-darkpurple to-blue-900  inset-0 relative overflow-hidden">
      <div className="  m-5 flex flex-col items-center text-white max-w-md mx-auto md:max-w-3xl">

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

        <div>
          <Footer/>
        </div>



      </div>
      </div>
  );
}

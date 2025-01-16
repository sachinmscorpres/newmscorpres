import React from "react";
import { TextHoverEffect } from "../ui/text-hover-effect";
import ServiceSlider from "../slider/ServiceSlider";
import AboutUsSlider from "../slider/AboutUsSlider";

const Services: React.FC = () => {
  return (
    <div className="w-full bg-black p-[50px] rounded-t-[100px] rounded-b-[100px] relative">
      <div className="w-[60%] flex items-center justify-center mx-auto">
        <TextHoverEffect text="Services" />
      </div>
      <div className="mt-[-120px] flex items-center justify-center">
        <h1 className="text-white text-[50px] text-center font-bold border-b border-dashed border-teal-600 inline-block">Our services</h1>
      </div>
      <div className="mt-[50px]">
        <ServiceSlider />
      </div>
      <div className="w-[60%] flex items-center justify-center mx-auto">
        <TextHoverEffect text="Who We Are" size="text-3xl" />
      </div>
      <div className="mt-[-120px] flex items-center justify-center">
        <h1 className="text-white text-[50px] text-center font-bold border-b border-dashed border-teal-600 inline-block">Who We Are</h1>
      </div>
      <div className="grid grid-cols-2 gap-[50px] mt-[50px] px-[100px] ">
        <h3 className="text-white text-4xl">We aspire to become a global execution partner for businesses.</h3>
        <p className="text-slate-400">We are a company with a straightforward and simple vision and mission is &quot;To make our customers successful.&quot;</p>
      </div>
      <div className="mt-[50px] px-[100px]">
        <AboutUsSlider />
      </div>
    </div>
  );
};

export default Services;

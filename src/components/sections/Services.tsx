import React from "react";
import { TextHoverEffect } from "../ui/text-hover-effect";
import ServiceSlider from "../slider/ServiceSlider";
import AboutUsSlider from "../slider/AboutUsSlider";

const Services: React.FC = () => {
  return (
    <div className="w-full bg-black lg:p-[50px] p-[10px]  lg:rounded-t-[100px] lg:rounded-b-[100px] rounded-t-[50px] rounded-b-[50px] relative">
      <div className="w-[60%] flex items-center justify-center mx-auto">
        <TextHoverEffect text="Services" />
      </div>
      <div className="lg:mt-[-120px] mt-[-40px] flex items-center justify-center">
        <h1 className="text-white lg:text-5xl text-3xl text-center font-bold border-b border-dashed border-teal-600 inline-block">Our services</h1>
      </div>
      <div className="mt-[50px] ">
        <ServiceSlider />
      </div>
      <div className="w-[60%] flex items-center justify-center mx-auto">
        <TextHoverEffect text="Who We Are" size="text-3xl" />
      </div>
      <div className="lg:mt-[-120px] mt-[-40px] flex items-center justify-center">
        <h1 className="text-white lg:text-5xl text-3xl text-center font-bold border-b border-dashed border-teal-600 inline-block">Who We Are</h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[50px] gap-[20px] mt-[50px] lg:px-[100px] px-[20px] ">
        <h3 className="text-white lg:text-4xl text-2xl">We aspire to become a global execution partner for businesses.</h3>
        <p className="text-slate-400">We are a company with a straightforward and simple vision and mission is &quot;To make our customers successful.&quot;</p>
      </div>
      <div className="mt-[50px] lg:px-[100px] px-[20px]">
        <AboutUsSlider />
      </div>
    </div>
  );
};

export default Services;

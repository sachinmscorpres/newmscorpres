"use client";
import React from "react";
import { Spotlight } from "../ui/Spotlight";

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="">
        <div className="min-h-screen h-auto w-full  flex md:items-center md:justify-center bg-[url('/hero.svg')] after:content-['']  after:bg-black/20 after:absolute  after:top-0 after:bottom-0 after:w-full antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center w-full container lg:p-0 pt-[100px]">
            <div className="pl-[50px]">
              <h2 className="lg:text-3xl text-2xl font-bold  text-white">Drive Growth</h2>
              <h1 className="text-3xl md:text-5xl font-bold  text-white">WITH OUR EXPERT SERVICES & SOLUTIONS</h1>
              <p className="mt-4 text-white  ">Seamless And Cost Effective Solutions For Finance, Legal, IT, Admin & More.</p>
            </div>
            <div className="flex items-center lg:justify-end justify-center lg:pr-[50px] pr-[0] lg:py-[0] py-[50px]">
              <div className="relative">
                <div className="absolute top-0 left-[-25px] lg:w-[400px] w-[300px] lg:h-[400px] h-[300px]  bg-teal-500 rounded-full "></div>
                <div className="relative bg-[#5E5E5E] text-white p-8 rounded-full lg:w-[400px] w-[300px] lg:h-[400px] h-[300px]">
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <h1 className="lg:text-3xl text-[17px] font-bold mb-4">
                      Ek Kadam <br /> ERP Ki Aur
                    </h1>
                    <p className="lg:text-[16px] md:text-[13px] text-[12px] leading-6 text-center">
                      &apos;Ek kadam ERP ki aur!&apos; A tagline that perfectly sums up the journey of Oakter. With the help of setups in ERP, this company has taken a huge jump toward success and growth. Let&apos;s dig in deeper into their story and see how ERP has played a
                      crucial role in their success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

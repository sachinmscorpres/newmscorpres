"use client";
import React from "react";
import styled from "styled-components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceListSlider from "@/components/slider/ServiceListSlider";
import ServiceSlider2 from "@/components/slider/ServiceSlider2";
export const metadata = {
  title: "Services | MsCorpres Automation",
};

export const Head = () => (
  <>
    <meta name="google-site-verification" content="KKOvYSdxhIKXdM5mcrwSqgylO-ZYk3OsBaAKfF59F0s" />
  </>
);
const page: React.FC = () => {
  return (
    <Section>
      <div className="header w-full h-[80vh]  bg-cover  bg-center flex items-center justify-center">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:px-[50px] px-[20px] space-y-2">
            <h1 className="font-bold lg:text-5xl text-3xl text-teal-400">OUR TOP SERVICES</h1>
            <p className="text-white lg:text-[15px] text-[13px]">
              At MSCorpres, our groundbreaking services are backed by a stellar team that turns business growth aspirations into reality. Guided by innovation and a positive mindset, our team&apos;s unique viewpoints lead the way. Meet our dedicated members and witness the embodiment
              of our core values in action.
            </p>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <div className="py-[50px]">
          <div className="relative text-center">
            <h1 className="text-gray-200 lg:text-7xl text-3xl font-bold">Services We Provide</h1>

            <h2 className="absolute inset-0 lg:top-[60px] top-[30px] text-black text-2xl font-semibold ">
              Our Top <span className="text-teal-500"> Services</span>
            </h2>

            <div className="absolute inset-0 lg:top-12 top-7 flex justify-center">
              <div className="mt-12 border-b-2 border-dashed border-teal-600 w-[200px]"></div>
            </div>
          </div>
        </div>
        <div className=" w-full bg-[url('/wave.svg')] object-cover bg-cover bg-no-repeat pb-[100px]">
          <div className=" lg:pt-[200px] pt-[100px] overflow-hidden">
            <Tabs defaultValue="setups" className="w-full">
              <div className="flex items-center justify-center flex-wrap">
                <TabsList className="flex lg:gap-[50px] gap-[10px]  bg-white py-[10px] px-[20px] h-[50px] rounded-full shadow-md">
                  <TabsTrigger value="operations" className="rounded-full data-[state=active]:bg-teal-600 data-[state=active]:text-white py-[5px] px-[10px]">
                    OPERATIONS
                  </TabsTrigger>
                  <TabsTrigger value="setups" className="rounded-full data-[state=active]:bg-teal-600 data-[state=active]:text-white py-[5px] px-[10px]">
                    SET UPS
                  </TabsTrigger>
                  <TabsTrigger value="automation" className="rounded-full data-[state=active]:bg-teal-600 data-[state=active]:text-white py-[5px] px-[10px]">
                    AUTOMATION
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="operations">
                <div className="py-[20px] lg:px-[100px] px-[10px]">
                  <ServiceListSlider />
                </div>
              </TabsContent>
              <TabsContent value="setups">
                {" "}
                <div className="py-[20px]  lg:px-[100px] px-[10px]">
                  <ServiceListSlider />
                </div>
              </TabsContent>
              <TabsContent value="automation">
                {" "}
                <div className="py-[20px]  lg:px-[100px] px-[10px]">
                  <ServiceListSlider />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="py-[100px]">
          <ServiceSlider2/>
        </div>
      </div>
    </Section>
  );
};
const Section = styled.section`
  .header {
    background-image: linear-gradient(to right, rgba(56, 56, 56, 0.7), rgba(56, 56, 56, 0.7), rgba(56, 56, 56, 0.7)), url("/services.svg");
  }
`;

export default page;

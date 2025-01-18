"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const page: React.FC = () => {
  return (
    <Section>
      <div className="header h-[90vh] flex items-center justify-center bg-teal-500">
        <div className="grid grid-cols-2">
          <div className="flex justify-center flex-col">
            <h1 className="text-5xl font-bold  text-slate-800">
              Get in touch <span className="text-white">with Us</span>
            </h1>
            <p className=" text-white">If you need any assistance or have a question, feel free to reach out. We’re here to help...</p>
          </div>
          <div className="flex justify-end">
            <Image src={"/contact.svg"} alt="service1" width={400} height={400} layout="responsive" className="max-w-[70%]" />
          </div>
        </div>
      </div>
      <div className="flex gap-[30px] px-[100px] py-[50px]">
        <div className="min-w-[400px] max-w-[400px] rounded-t-full mt-[-100px] bg-white border-2 border-teal-500 px-[50px] pb-[100px] pt-[150px] overflow-hidden relative">
          <h4 className="text-slate-900 font-semibold">Our Location</h4>
          <p className="text-sm text-gray-500">B88, B Block, Sector 83, Noida, Uttar Pradesh - 201305</p>
          <div className="flex flex-col gap-[10px] mt-[20px]">
            <div className="text-teal-500 text-sm flex gap-[10px] items-center">
              <Phone size={15} />
              <p>+91 75 29 939393 (For Recruitment)</p>
            </div>
            <div className="text-teal-500 text-sm flex gap-[10px] items-center">
              <Phone size={15} />
              <p>+91 88 26 788880 (For Sales)</p>
            </div>
          </div>
          <div className="mt-[10px]">
            <h4 className="text-slate-900 font-semibold">Our Location (2)</h4>
            <p className="text-sm text-gray-500">A 123, Dubai Silicon Oasis, DDP, Building A3, Dubai, United Arab Emirates PO Box: 418425</p>
          </div>
          <div className="flex flex-col gap-[10px] mt-[20px]">
            <div className="text-teal-500 text-sm flex gap-[10px] items-center">
              <Phone size={15} />
              <p>+971 44218356 s</p>
            </div>
            <div className="text-teal-500 text-sm flex gap-[10px] items-center">
              <Mail size={15} />
              <p>marketing@mscorpres.in</p>
            </div>
          </div>
          <div className="w-[300px] h-[300px] absolute right-[-100px] bottom-[-200px] border-[15px] border-teal-200/30 rounded-full"></div>
        </div>
        <div className="w-full ">
          <form action="">
            <div className="grid grid-cols-2 gap-[30px]">
              <Input className="px-[20px] py-[25px] bg-teal-500/10 rounded-full border-2 border-teal-400 w-full" placeholder="Name" />
              <Input className="px-[20px] py-[25px] bg-teal-500/10 rounded-full border-2 border-teal-400 w-full" placeholder="Email" />
              <Input className="px-[20px] py-[25px] bg-teal-500/10 rounded-full border-2 border-teal-400 w-full" placeholder="Phone no." />
              <Input className="px-[20px] py-[25px] bg-teal-500/10 rounded-full border-2 border-teal-400 w-full" placeholder="Subject" />
            </div>
            <div className="mt-[30px]">
              <Textarea rows={10} className="px-[20px] py-[25px] bg-teal-500/10 rounded-[30px] border-2 border-teal-400 w-full" />
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};
const Section = styled.section``;
export default page;

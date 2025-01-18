"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa6";
import AboutMsSlider from "@/components/slider/AboutMsSlider";
import Image from "next/image";

const page: React.FC = () => {
  return (
    <Section>
      <div>
        <div className="header w-full h-[70vh]  bg-cover bg-center flex items-center justify-center">
          <div className="max-w-[600px]">
            <h1 className="text-teal-400 text-[40px] font-bold text-center">About Us</h1>
            <p className="text-white text-center">We aspire to become a trusted global execution partner for businesses, enabling success through innovation and excellence</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-[-100px]">
          <div className="video flex items-center justify-center bg-cover bg-center max-w-[600px] min-w-[600px] rounded-md overflow-hidden h-[350px] ">
            <Button className="rounded-full bg-teal-600 text-white p-0 h-[50px] w-[50px] animate-pulse hover:bg-teal-600">
              <FaPlay size={30} />
            </Button>
          </div>
        </div>
        <div className=" py-[50px] ">
          <div className="relative text-center">
            <h1 className="text-gray-200 text-7xl font-bold">Get to know us</h1>

            <h2 className="absolute inset-0 top-[60px] text-black text-2xl font-semibold ">
              About <span className="text-teal-500">MsCorpres</span>
            </h2>

            <div className="absolute inset-0 top-12 flex justify-center">
              <div className="mt-12 border-b-2 border-dashed border-teal-600 w-[200px]"></div>
            </div>
          </div>
          <div className="mt-[70px] px-[50px] mb-[-100px]">
            <AboutMsSlider />
          </div>
          <div className="rounded-b-[100px] bg-black pt-[150px]">
            <div className="">
              <div className="relative text-center max-h-max pb-9">
                <h1 className="text-gray-700 text-7xl font-bold">Principal</h1>

                <h2 className="absolute inset-0 top-[60px] text-white text-2xl font-semibold ">Principle and Values</h2>

                <div className="absolute inset-0 top-12 flex justify-center">
                  <div className="mt-12 border-b-2 border-dashed border-teal-600 w-[200px]"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="py-[20px] space-y-1 max-w-[600px]">
                <p className="text-teal-600 text-center text-[18px] font-[600]">At MsCorpres, our team follows five principles as its value</p>
                <p className="text-sm text-white text-center">
                  We are a company with a straightforward and simple vision and mission is &quot;To make our customers successful.&quot; We believe that your success is our business. To achieve our vision and mission, we bring customized
                </p>
              </div>
            </div>
            <div className="py-[60px] grid grid-cols-2 gap-[30px] px-[30px]">
              <div>
                <ol className="flex flex-col gap-[15px] text-white list-decimal pl-[20px]">
                  <li className="">
                    <span className="text-teal-600 font-[600]">Innovation:</span> We grab creativity and forward-thinking to develop cutting-edge solutions tailored to each client &apos;s needs. Continuously explore new technologies and methodologies to stay ahead of the curve.
                  </li>
                  <li className="">
                    <span className="text-teal-600 font-[600]"> Efficiency:</span> Strive for optimal performance and resource utilization in every aspect of our work. Streamline processes, automate repetitive tasks, and maximize productivity to deliver results swiftly and
                    effectively.
                  </li>
                  <li>
                    <span className="text-teal-600 font-[600]">Collaboration:</span>Foster a culture of teamwork and cooperation both within our team and with our clients. Recognize the value of diverse perspectives and leverage collective expertise to solve complex challenges
                    and achieve shared goals.
                  </li>
                  <li>
                    <span className="text-teal-600 font-[600]">Integrity:</span>Uphold the highest standards of honesty, transparency, and ethical behavior in all interactions. Build trust with clients by delivering on promises, maintaining confidentiality, and conducting
                    business with integrity and professionalism.
                  </li>
                  <li>
                    <span className="text-teal-600 font-[600]">Continuous Improvement:</span>Commit to ongoing learning and development to enhance our skills and adapt to evolving industry trends. Embrace feedback, reflect on experiences, and proactively seek opportunities for
                    growth and innovation to consistently deliver value to our clients.
                  </li>
                </ol>
              </div>
              <div className="p-[30px] relative">
                <Image src={"/dotgrid.svg"} alt="" width={100} height={100} layout="responsive" className="max-w-[100px] max-h-[100px] absolute top-0 left-0 " />
                <div className="bottom-[-40px] absolute right-[50px] h-[300px] w-[300px]  border-[20px] border-teal-800 rounded-full"></div>
                <Image src={"/team.svg"} alt="" width={400} height={300} layout="responsive" className="sticky w-full " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
const Section = styled.section`
  .header {
    background-image: linear-gradient(to right, rgba(0, 26, 59, 0.8), rgba(0, 26, 59, 0.8), rgba(0, 26, 59, 0.8)), url("/about.svg");
  }
  .video {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/video.svg");
  }
`;
export default page;

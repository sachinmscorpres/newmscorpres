"use client";
import React from "react";
import styled from "styled-components";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import JobSlider from "@/components/slider/JobSlider";
import Head from "next/head";

const page: React.FC = () => {
  return (
    <>
      <Head>
        <title>Careers | MsCorpres</title>
        <meta name="google-site-verification" content="KKOvYSdxhIKXdM5mcrwSqgylO-ZYk3OsBaAKfF59F0s" />
        <meta name="description" content="Join our team! Explore exciting career opportunities at MsCorpres." />
        <meta name="keywords" content="Careers at MsCorpres, Job Openings, Work With Us" />
      </Head>

      <Section>
        <div className="header h-[90vh] flex items-center justify-center bg-center bg-cover">
          <div className="max-w-[600px] flex items-center justify-center flex-col gap-[10px]">
            <h1 className="lg:text-3xl text-2xl font-bold text-center text-white">
              Careers At <span className="text-teal-400">MsCorpres Automation</span>
            </h1>
            <h3 className="text-white font-bold lg:text-2xl text-[17px]">7 Open Roles</h3>
            <div>
              <div className="max-w-max relative">
                <Input type="text" placeholder="Search..." className="lg:min-w-[350px] min-w-[300px] rounded-full bg-white pr-[50px]" />
                <Button variant="ghost" className="absolute right-0 top-0 rounded-full">
                  <Search />
                </Button>
              </div>
            </div>
            <div className="flex lg:flex-nowrap flex-wrap items-center justify-center gap-[20px]">
              <Select>
                <SelectTrigger className="w-[300px] bg-white rounded-full">
                  <SelectValue placeholder="Job Title" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[300px] bg-white rounded-full">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="py-[50px]">
          <div className="relative text-center">
            <h1 className="text-gray-200 lg:text-7xl text-4xl font-bold">Featured Jobs</h1>

            <h2 className="absolute inset-0 lg:top-[60px] top-[30px] text-black text-2xl font-semibold ">
              About <span className="text-teal-500">Featured Jobs</span>
            </h2>

            <div className="absolute inset-0 lg:top-12 top-8 flex justify-center">
              <div className="mt-12 border-b-2 border-dashed border-teal-600 w-[200px]"></div>
            </div>
          </div>
        </div>
        <div className="lg:mt-[50px] mt-[20px] lg:px-[100px] px-[10px]">
          <JobSlider />
        </div>
      </Section>
    </>
  );
};
const Section = styled.section`
  .header {
    background-image: linear-gradient(to right, rgba(56, 56, 56, 0.7), rgba(56, 56, 56, 0.7), rgba(56, 56, 56, 0.7)), url("/career.svg");
  }
`;
export default page;

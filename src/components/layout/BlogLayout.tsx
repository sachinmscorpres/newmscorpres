"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import styled from "styled-components";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { axiosInstance } from "@/utils/axiosInstance";

type Props = {
  children: React.ReactNode;
};
const BlogLayout: React.FC<Props> = ({ children }) => {
  const [category, setCategory] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  console.log(loading)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/blog/fetchCategory`);
        setCategory(response.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(category);
  return (
    <Section>
      <div className="header h-[80vh] flex items-center justify-center bg-center bg-cover">
        <div className="max-w-[600px] flex items-center justify-center flex-col gap-[10px]">
          <h1 className="lg:text-5xl text-3xl font-bold text-center text-teal-400">Blog</h1>
          <p className="text-center text-white">Empowering productivity and efficiency with cutting-edge solutions—welcome to the future of work</p>
          <Select>
            <SelectTrigger className="w-[300px] bg-white rounded-full h-[50px]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {category?.map((item: any) => (
                <SelectItem key={item?._id} value={item?._id}>
                  {item?.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="py-[50px] lg:px-[30px] md:px-[20px] px-[10px]">
        <div className="flex lg:flex-row flex-col gap-[20px]">
          <div className="w-full">{children}</div>
          <div className="min-w-[300px] lg:max-w-[300px] w-full">
            <div className="category">
              <h3 className="text-slate-600 text-[20px] font-semibold">Categories</h3>
              <Separator />
              <ul className="flex flex-col gap-[10px] mt-[10px]">
                <li>
                  <Link href={"#"}>All(000)</Link>
                </li>
                <li>
                  <Link href={"#"}>Production(10)</Link>
                </li>
                <li>
                  <Link href={"#"}>Design(1)</Link>
                </li>
                <li>
                  <Link href={"#"}>Development(0)</Link>
                </li>
              </ul>
            </div>
            <div className="recent-post mt-[50px]">
              <h3 className="text-slate-600 text-[20px] font-semibold">Recent Posts</h3>
              <Separator />
              <div className="mt-[10px] flex flex-col gap-[10px]">
                <article className="flex items-center gap-[10px]">
                  <div className="w-[130px]">
                    <Image src={"/team.svg"} width={100} height={50} alt="" className="max-w-[100px]" layout={"responsive"} />
                  </div>
                  <div>
                    <h4 className="text-slate-700 text-[15px]">Sustainable Practices in Electronic Comp ...</h4>
                    <p className="text-slate-500 text-[13px]">4 months ago, (03-09-2024)</p>
                  </div>
                </article>
                <article className="flex items-center gap-[10px]">
                  <div className="w-[130px]">
                    <Image src={"/video.svg"} width={100} height={50} alt="" className="max-w-[100px]" layout={"responsive"} />
                  </div>
                  <div>
                    <h4 className="text-slate-700 text-[15px]">Sustainable Practices in Electronic Comp ...</h4>
                    <p className="text-slate-500 text-[13px]">4 months ago, (03-09-2024)</p>
                  </div>
                </article>
                <article className="flex items-center gap-[10px]">
                  <div className="w-[130px]">
                    <Image src={"/blogbg.svg"} width={100} height={50} alt="" className="max-w-[100px]" layout={"responsive"} />
                  </div>
                  <div>
                    <h4 className="text-slate-700 text-[15px]">Sustainable Practices in Electronic Comp ...</h4>
                    <p className="text-slate-500 text-[13px]">4 months ago, (03-09-2024)</p>
                  </div>
                </article>
                <article className="flex items-center gap-[10px]">
                  <div className="w-[130px]">
                    <Image src={"/team.svg"} width={100} height={50} alt="" className="max-w-[100px]" layout={"responsive"} />
                  </div>
                  <div>
                    <h4 className="text-slate-700 text-[15px]">Sustainable Practices in Electronic Comp ...</h4>
                    <p className="text-slate-500 text-[13px]">4 months ago, (03-09-2024)</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="popular-tags mt-[50px]">
              <h3 className="text-slate-600 text-[20px] font-semibold">Popular Tags</h3>
              <Separator />
              <div className="mt-[10px] flex items-center gap-[10px] flex-wrap">
                <span className="px-[10px] py-[5px] rounded-full bg-teal-200">AI</span>
                <span className="px-[10px] py-[5px] rounded-full bg-teal-200">Production</span>
                <span className="px-[10px] py-[5px] rounded-full bg-teal-200">Design</span>
                <span className="px-[10px] py-[5px] rounded-full bg-teal-200">Development</span>
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
    background-image: linear-gradient(to right, rgba(56, 56, 56, 0.7), rgba(56, 56, 56, 0.7), rgba(56, 56, 56, 0.7)), url("/blogbg.svg");
  }
`;
export default BlogLayout;

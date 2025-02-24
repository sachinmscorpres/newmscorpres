"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

const ContactPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const response = await axios.post(`https://msclientcontact.mscorpres.net/contactUsMsC/contactUsMsC`, {
        userName: data.name,
        userEmail: data.email,
        userPhone: data.phone,
        sub: data.subject,
        msg: data.message,
      });
      if (response.status === 200) {
        reset();
        alert("Message sent successfully!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | MsCorpres</title>
        <meta name="google-site-verification" content="KKOvYSdxhIKXdM5mcrwSqgylO-ZYk3OsBaAKfF59F0s" />
        <meta name="description" content="Get in touch with us for any inquiries or assistance." />
        <meta name="keywords" content="Contact, Support, MsCorpres" />
      </Head>
      <Section>
        <div className="header lg:h-[90vh] h-auto flex items-center justify-center bg-teal-500">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
            <div className="flex justify-center flex-col lg:mt-[0] mt-[100px] lg:px-[0] px-[20px]">
              <h1 className="lg:text-5xl text-3xl font-bold  text-slate-800">
                Get in touch <span className="text-white">with Us</span>
              </h1>
              <p className=" text-white">If you need any assistance or have a question, feel free to reach out. We’re here to help...</p>
            </div>
            <div className="flex lg:justify-end lg:mt-[0] mt-[30px] lg:pb-0 pb-[50px] justify-center items-center">
              <Image src={"/contact.svg"} alt="service1" width={400} height={400} layout="responsive" className="max-w-[70%]" />
            </div>
          </div>
        </div>
        <div className="flex gap-[30px] justify-center lg:flex-nowrap flex-wrap lg:px-[100px] px-[10px] py-[50px]">
          <div className="lg:min-w-[400px] lg:max-w-[400px] min-w-[300px] max-w-[300px]  rounded-t-full mt-[-100px] bg-white border-2 border-teal-500 lg:px-[50px] px-[20px] pb-[100px] lg:pt-[150px] pt-[100px] overflow-hidden relative">
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
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-[20px]">
                <div>
                  <Input {...register("name", { required: true })} className="px-[20px] py-[25px] bg-teal-500/10 rounded-full border-2 border-teal-400 w-full" placeholder="Name" />
                  {errors.name?.message && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <Input {...register("email", { required: true })} className="px-[20px] py-[25px] bg-teal-500/10 rounded-full border-2 border-teal-400 w-full" placeholder="Email" />
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <div>
                  <Input {...register("phone", { required: true })} className="px-[20px] py-[25px] bg-teal-500/10 rounded-full border-2 border-teal-400 w-full" placeholder="Phone no." />
                  {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                </div>
                <div>
                  <Input {...register("subject", { required: true })} className="px-[20px] py-[25px] bg-teal-500/10 rounded-full border-2 border-teal-400 w-full" placeholder="Subject" />
                  {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
                </div>
              </div>
              <div className="mt-[30px]">
                <Textarea placeholder="Message" {...register("message", { required: true })} rows={10} className="px-[20px] py-[25px] bg-teal-500/10 rounded-[30px] border-2 border-teal-400 w-full" />
                {errors.message && <p className="text-red-500">{errors.message.message}</p>}
              </div>
              <Button disabled={loading} type="submit" className="mt-[20px] rounded-full h-[40px]  px-[30px] bg-teal-600 hover:bg-teal-700">
                {loading && <FaSpinner className="animate-spin" />} Submit
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};
const Section = styled.section``;
export default ContactPage;

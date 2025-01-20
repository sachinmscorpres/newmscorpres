"use client";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import Image from "next/image";

const Footer: React.FC = () => {
  const placeholders = ["What's the first rule of Fight Club?", "Who is Tyler Durden?", "Where is Andrew Laeddis Hiding?", "Write a Javascript method to reverse a string", "How to assemble your own PC?"];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="border-t-2 rounded-t-[100px] border-teal-600 overflow-hidden">
      <div className="lg:px-[100px] md:px-[50px] px-[20px] flex justify-between gap-[20px] flex-wrap">
        <div className="py-[50px] max-w-[350px] flex flex-col gap-[10px]">
          <div className="logo">
            <Image src="/mslogo.png" width={200} height={50} alt="" className="max-w-[200px]" layout="responsive" />
          </div>
          <p className="text-slate-600 text-[13px]">Whether you are an Indian startup looking for support or an MNC planning to enter India, we can help you thrive in the tough market environment here.</p>
          <a href="#" className="text-sm">
             marketing@mscorpres.in
          </a>
          <p className="text-sm">+91 75 29 939393 (For Recruitment)</p>
          <p className="text-sm">+91 88 26 788880 (For Sales)</p>
        </div>
        <div className="py-[50px]">
          <h4 className="text-[19px] font-[600] text-slate-600">Our Link</h4>
          <div className="flex flex-col gap-[20px] mt-[20px]">
            <Link href="/" className="text-sm">
              Home
            </Link>
            <Link href="/about" className="text-sm">
              About
            </Link>
            <Link href="/services" className="text-sm">
              Blogs
            </Link>
            <Link href="/contact" className="text-sm">
              Career
            </Link>
          </div>
        </div>
        <div className="py-[50px]">
          <h4 className="text-[19px] font-[600] text-slate-600">Legal</h4>
          <div className="flex flex-col gap-[20px] mt-[20px]">
            <Link href="/" className="text-sm">
              Service
            </Link>
            <Link href="/about" className="text-sm">
              Terms Of services
            </Link>
            <Link href="/services" className="text-sm">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-sm">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="py-[50px]">
          <h4 className="text-[19px] font-[600] text-slate-600">Our Address</h4>
          <div className="flex flex-col gap-[20px] mt-[20px]">
            <p className="text-sm text-slate-600">B88, B Block, Sector 83, Noida, Uttar Pradesh - 201305</p>
            <p className="text-sm">
              <span className="text-teal-600">GSTIN/UIN:</span> 09AANCM0798D1Z4
            </p>
            <p className="text-sm">
              <span className="text-teal-600">CIN:</span> U52601RJ2019PTC067024
            </p>
            <div className="social flex items-center gap-[5px] ">
              <a href="" className="text-slate-600 hover:text-teal-600">
                <FaLinkedin size={25} />
              </a>
              <a href="" className="text-slate-600 hover:text-teal-600">
                <FaTwitterSquare size={25} />
              </a>
              <a href="" className="text-slate-600 hover:text-teal-600">
                <FaFacebookSquare size={25} />
              </a>
            </div>
            <div>
              <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-center py-[20px]">
          © Copyright <span className="text-teal-500">MsCorpres</span> | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-[20px] left-[100px] right-[100px] z-50">
      <div className="bg-white rounded-lg flex justify-between items-center p-4 shadow-md">
        <div>
          <Image layout="responsive" width={300} height={50} src="/mslogo.png" alt="" className="max-w-[300px]" />
        </div>
        <div>
          <ul className="flex items-center gap-[20px] uppercase">
            <li className="flex flex-col ">
              <Link href="/" className={`${pathname === "/" ? "text-teal-600" : ""} font-[500] `}>
                Home
              </Link>
              <span className={pathname === "/" ? "w-full h-[2px] bg-teal-600 transition-all" : "w-0 transition-all"}></span>
            </li>
            <li className="flex flex-col ">
              <Link href="/about">About</Link>
              <span className={pathname === "/about" ? "w-full h-[2px] bg-teal-600 transition-all" : "w-0 transition-all"}></span>
            </li>
            <li>
              <Link href="/">Sevices</Link>
            </li>
          </ul>
        </div>
        <Button className="bg-teal-600 text-white rounded-full hover:bg-teal-700">CMS LOGIN</Button>
      </div>
    </nav>
  );
};

export default Navigation;

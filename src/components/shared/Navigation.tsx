"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const handleopenDialog = () => {
    setOpenDialog(true);
  };
  const handlecloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogTitle></DialogTitle>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px] mt-[20px]">
            <Button className="bg-teal-600 hover:bg-teal-700">ESS PORTAL</Button>
            <Button className="bg-teal-600 hover:bg-teal-700">IMS[SERVER 1]</Button>
            <Button className="bg-teal-600 hover:bg-teal-700">IMS[SERVER 2]</Button>
            <Button className="bg-teal-600 hover:bg-teal-700">HR TOS</Button>
            <Button className="bg-teal-600 hover:bg-teal-700">HR AERM</Button>
            <Button className="bg-teal-600 hover:bg-teal-700">HRMS</Button>
          </div>
        </DialogContent>
      </Dialog>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side={"right"}>
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <ul className="flex flex-col gap-[20px] uppercase">
              <li className="flex flex-col ">
                <Link href="/" onClick={() => setOpen(false)} className={`${pathname === "/" ? "text-teal-600" : ""} font-[500] `}>
                  Home
                </Link>
                <span className={pathname === "/" ? "w-full h-[2px] bg-teal-600 transition-all" : "w-0 transition-all"}></span>
              </li>
              <li className="flex flex-col ">
                <Link onClick={() => setOpen(false)} href="/about">
                  About
                </Link>
                <span className={pathname === "/about" ? "w-full h-[2px] bg-teal-600 transition-all" : "w-0 transition-all"}></span>
              </li>
              <li className="flex flex-col ">
                <Link onClick={() => setOpen(false)} href="/services">
                  Services
                </Link>
                <span className={pathname === "/services" ? "w-full h-[2px] bg-teal-600 transition-all" : "w-0 transition-all"}></span>
              </li>
              <li className="flex flex-col ">
                <Link onClick={() => setOpen(false)} href="/blog">
                  BLOG
                </Link>
                <span className={pathname === "/blog" ? "w-full h-[2px] bg-teal-600 transition-all" : "w-0 transition-all"}></span>
              </li>
              <li className="flex flex-col ">
                <Link onClick={() => setOpen(false)} href="/career">
                  Career
                </Link>
                <span className={pathname === "/career" ? "w-full h-[2px] bg-teal-600 transition-all" : "w-0 transition-all"}></span>
              </li>
              <li className="flex flex-col ">
                <Link onClick={() => setOpen(false)} href="/contact">
                  Contact
                </Link>
                <span className={pathname === "/contact" ? "w-full h-[2px] bg-teal-600 transition-all" : "w-0 transition-all"}></span>
              </li>
            </ul>
            <Button onClick={handleopenDialog} className="bg-teal-600 text-white rounded-full hover:bg-teal-700 ">
              CMS LOGIN
            </Button>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <nav className="fixed lg:top-[20px] lg:left-[100px] lg:right-[100px] top-[10px] left-[20px] right-[20px] z-50">
        <div className="backdrop-blur-sm bg-white/70 rounded-lg flex justify-between items-center lg:p-4 md:p-2 p-2 shadow-md">
          <div>
            <Image layout="responsive" width={300} height={50} src="/mslogo.png" alt="" className="max-w-[300px]" />
          </div>
          <div className="lg:block hidden">
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
              <li className="flex flex-col ">
                <Link href="/services">Services</Link>
                <span className={pathname === "/services" ? "w-full h-[2px] bg-teal-600 transition-all" : "w-0 transition-all"}></span>
              </li>
              <li className="flex flex-col ">
                <Link href="/blog">BLOG</Link>
                <span className={pathname === "/blog" ? "w-full h-[2px] bg-teal-600 transition-all" : "w-0 transition-all"}></span>
              </li>
              <li className="flex flex-col ">
                <Link href="/career">Career</Link>
                <span className={pathname === "/career" ? "w-full h-[2px] bg-teal-600 transition-all" : "w-0 transition-all"}></span>
              </li>
              <li className="flex flex-col ">
                <Link href="/contact">Contact</Link>
                <span className={pathname === "/contact" ? "w-full h-[2px] bg-teal-600 transition-all" : "w-0 transition-all"}></span>
              </li>
            </ul>
          </div>
          <Button onClick={handleopenDialog} className="bg-teal-600 text-white rounded-full hover:bg-teal-700 lg:block hidden">
            CMS LOGIN
          </Button>
          <Button variant={"ghost"} className="lg:hidden block text-teal-500 text-[30px]" onClick={() => setOpen(true)}>
            <AlignJustify />
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

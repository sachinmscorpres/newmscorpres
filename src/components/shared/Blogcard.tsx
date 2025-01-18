import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Blogcard = () => {
  return (
    <Card className="bg-white overflow-hidden ">
      <Image src={"/hero.svg"} alt="service1" width={200} height={200} layout="responsive" className="" />
      <CardContent className="text-slate-600 pt-[10px] space-y-2">
        <p className="text-sm text-gray-400">January 17, 2024</p>
        <CardTitle className="text-slate-600 text-2xl">Let&apos;s Win Together</CardTitle>
        Their experiences show how much they rely on our quick solutions, and the growth we&apos;ve achieved together stands as proof of our solid partnerships. Their stories are not just about what
      </CardContent>
      <CardFooter className="flex gap-[10px]">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-slate-700 font-semibold"> Unknown</p>
      </CardFooter>
    </Card>
  );
};

export default Blogcard;

import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  data: {
    _id: string;
    title: string;
    content: string;
    author: {
      _id: string;
      fullName: string;
    };
    categories: string[];
    tags: string[];
    thumbnail: string;
    metaDescription: string;
    createdAt: string;
    updatedAt: string;
    slug: string;
    timeAgo: string;
  };
};
const Blogcard: React.FC<Props> = ({ data }) => {
  return (
    <Card className="bg-white overflow-hidden ">
      <Image src={data.thumbnail||""} alt="service1" width={200} height={200} layout="responsive" className="" />
      <CardContent className="text-slate-600 pt-[10px] space-y-2">
        <p className="text-sm text-gray-400">{data.timeAgo}</p>
        <CardTitle className="text-slate-600 text-2xl">{data.title}</CardTitle>
        {data.metaDescription}{" "}
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

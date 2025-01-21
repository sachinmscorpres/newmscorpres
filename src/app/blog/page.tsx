"use client";
import React from "react";
import BlogLayout from "@/components/layout/BlogLayout";
import Blogcard from "@/components/shared/Blogcard";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Link from "next/link";

export const metadata = {
  title: "Blog | MsCorpres Automation",
};

export const Head = () => (
  <>
    <meta name="google-site-verification" content="KKOvYSdxhIKXdM5mcrwSqgylO-ZYk3OsBaAKfF59F0s" />
  </>
);
const page: React.FC = () => {
  return (
    <BlogLayout>
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
        {Array.from({ length: 4 }).map((_, index) => (
          <Link key={index} href={`/blog/${index}`}>
            <Blogcard />
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center py-[20px]">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </BlogLayout>
  );
};

export default page;

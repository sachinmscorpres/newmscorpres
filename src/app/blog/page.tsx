"use client";
import React from "react";
import BlogLayout from "@/components/layout/BlogLayout";
import Blogcard from "@/components/shared/Blogcard";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Link from "next/link";
import Head from "next/head";

const page: React.FC = () => {
  return (
    <>
      <Head>
        <title>Blog | MsCorpres</title>
        <meta name="google-site-verification" content="KKOvYSdxhIKXdM5mcrwSqgylO-ZYk3OsBaAKfF59F0s" />
        <meta name="description" content="Read our latest articles, updates, and insights on various topics." />
        <meta name="keywords" content="MsCorpres Blog, Articles, Updates" />
      </Head>

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
    </>
  );
};

export default page;

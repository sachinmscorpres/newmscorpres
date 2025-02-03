"use client";
import React, { useEffect, useState } from "react";
import BlogLayout from "@/components/layout/BlogLayout";
import Blogcard from "@/components/shared/Blogcard";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Link from "next/link";
import Head from "next/head";
import { Skeleton } from "@/components/ui/skeleton";
import { axiosInstance } from "@/utils/axiosInstance";

const BlogPage = () => {
  const [data, setData] = useState<any[]>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/blog`, {
          params: { category: "all", website: "mscorpres" },
        });
        setData(response.data?.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!data) {
      fetchData();
    }
  }, []);
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
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="">
                  <Skeleton className="w-full h-[300px]" />
                  <div className="p-[20px] ">
                    <Skeleton className="w-[150px] h-[20px]" />
                    <Skeleton className="w-full h-[40px] mt-[10px]" />
                    <div className="flex gap-[10px] items-center mt-[10px]">
                      <Skeleton className="h-[50px] w-[50px] rounded-full" />
                      <Skeleton className="w-[150px] h-[15px]" />
                    </div>
                  </div>
                </div>
              ))
            : data?.map((item, index) => (
                <Link key={index} href={`/blog/${item?.slug}`}>
                  <Blogcard data={item} />
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

export default BlogPage;

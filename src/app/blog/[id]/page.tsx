"use client";
import BlogLayout from "@/components/layout/BlogLayout";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowLeftLong } from "react-icons/fa6";
import { axiosInstance } from "@/utils/axiosInstance";
import parse from "html-react-parser";
interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

const Article = styled.article`
  padding: 0 100px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #111;
    margin: 1.5em 0 0.5em;
    line-height: 1.4;
  }

  h1 {
    font-size: 2.5em;
    font-weight: 700;
  }

  h2 {
    font-size: 2em;
    font-weight: 600;
  }

  h3 {
    font-size: 1.75em;
    font-weight: 500;
  }

  h4 {
    font-size: 1.5em;
    font-weight: 500;
  }

  p {
    margin: 1em 0;
  }

  blockquote {
    font-style: italic;
    color: #555;
    border-left: 4px solid #ddd;
    padding-left: 1em;
    margin: 1.5em 0;
  }

  a {
    color: #0077cc;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  /* Lists */
  ul,
  ol {
    margin: 1em 0;
    padding-left: 1.5em;
  }

  li {
    margin-bottom: 0.5em;
  }

  code {
    font-family: "Courier New", monospace;
    background-color: #f4f4f4;
    padding: 0.2em 0.4em;
    border-radius: 4px;
  }

  pre {
    background-color: #f4f4f4;
    padding: 1em;
    border-radius: 4px;
    overflow-x: auto;
    font-family: "Courier New", monospace;
    font-size: 0.9em;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1.5em 0;
  }

  hr {
    border: 0;
    height: 1px;
    background: #ddd;
    margin: 2em 0;
  }

  table {
    max-width: max-content;
    border-collapse: collapse;
    margin: 1.5em 0;
    font-size: 1rem;
    line-height: 1.5;
    text-align: left;
    overflow-x: auto;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
  }

  thead {
    background-color: #f5f5f5;
  }

  th {
    padding: 12px 16px;
    font-weight: bold;
    border-bottom: 2px solid #ddd;
    text-transform: uppercase;
    font-size: 0.875rem;
    color: #333;
  }

  td {
    padding: 12px 16px;
    border-bottom: 1px solid #ddd;
    vertical-align: middle;
    color: #555;
  }

  tbody tr:nth-child(odd) {
    background-color: #fcfcfc;
  }

  tbody tr:nth-child(even) {
    background-color: #fff;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }

  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  caption {
    caption-side: bottom;
    font-size: 0.875rem;
    color: #777;
    margin-top: 0.5em;
    text-align: center;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    padding: 0 50px;

    h1 {
      font-size: 2.25em;
    }

    h2 {
      font-size: 1.75em;
    }

    h3 {
      font-size: 1.5em;
    }

    h4 {
      font-size: 1.25em;
    }

    table {
      font-size: 0.9rem;
    }

    th,
    td {
      padding: 10px 12px;
    }
  }

  @media (max-width: 768px) {
    padding: 0 20px;

    h1 {
      font-size: 2em;
    }

    h2 {
      font-size: 1.5em;
    }

    h3 {
      font-size: 1.25em;
    }

    h4 {
      font-size: 1.125em;
    }

    pre {
      font-size: 0.85em;
    }

    table {
      font-size: 0.8rem;
    }

    th,
    td {
      padding: 8px 10px;
    }
  }

  @media (max-width: 480px) {
    padding: 0 10px;

    h1 {
      font-size: 1.75em;
    }

    h2 {
      font-size: 1.25em;
    }

    h3 {
      font-size: 1.1em;
    }

    h4 {
      font-size: 1em;
    }

    pre {
      font-size: 0.75em;
    }

    table {
      font-size: 0.75rem;
    }

    th,
    td {
      padding: 6px 8px;
    }
  }
`;

export default function BlogPost({ params }: BlogPostPageProps) {
  const { id } = React.use(params);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  console.log(loading)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/blog/${id}`);
        setData(response.data?.data);
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
  const router = useRouter();
  console.log(data);
  return (
    <BlogLayout>
      <div>
        <Button onClick={() => router.back()} className="bg-white text-slate-800 hover:bg-slate-200 hover:text-slate-800">
          <FaArrowLeftLong />
        </Button>
      </div>
      <Article>
        <Image src={data?.thumbnail} alt="hero" width={800} height={400} layout="responsive" />
        <Head>
          <title>{data?.title}</title>
          <meta name="description" content="Comprehensive dummy blog post for testing CSS styles" />
          <meta name="google-site-verification" content="KKOvYSdxhIKXdM5mcrwSqgylO-ZYk3OsBaAKfF59F0s" />
        </Head>
        <article>
          <header>
            <h1>{data?.title}</h1>
            <p>
              <time dateTime={data?.createdAt}>{data?.createdAt}</time> | Written by <a href="#">{data?.author?.fullName}</a>
            </p>
          </header>
          <main>{data && parse(data?.content || null)}</main>
          <footer>
            <p>
              Tags:
              {data?.tags.map((tag: string) => (
                <>
                  <a href="#" key={tag}>
                    {tag}
                  </a>{" "}
                  ,
                </>
              ))}
            </p>
            <p>
              Share this post:
              <a href="#" aria-label="Share on Twitter">
                Twitter
              </a>{" "}
              |{" "}
              <a href="#" aria-label="Share on Facebook">
                Facebook
              </a>
            </p>
          </footer>
        </article>
      </Article>
    </BlogLayout>
  );
}

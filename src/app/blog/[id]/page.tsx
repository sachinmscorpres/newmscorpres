"use client";
import BlogLayout from "@/components/layout/BlogLayout";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";
import { FaArrowLeftLong } from "react-icons/fa6";
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

  /* Paragraphs */
  p {
    margin: 1em 0;
  }

  /* Blockquotes */
  blockquote {
    font-style: italic;
    color: #555;
    border-left: 4px solid #ddd;
    padding-left: 1em;
    margin: 1.5em 0;
  }

  /* Links */
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

  /* Code */
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

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1.5em 0;
  }

  /* Horizontal Rules */
  hr {
    border: 0;
    height: 1px;
    background: #ddd;
    margin: 2em 0;
  }
  /* General Table Styling */
table {
 max-width: max-content;
  border-collapse: collapse;
  margin: 1.5em 0;
  font-size: 1rem;
  line-height: 1.5;
  text-align: left;
  overflow-x: auto; /* Ensure responsiveness */
  border: 1px solid #ddd;
  background-color: #f9f9f9;
}

/* Table Header Styling */
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

/* Table Body Styling */
td {
  padding: 12px 16px;
  border-bottom: 1px solid #ddd;
  vertical-align: middle;
  color: #555;
}

/* Zebra Stripes */
tbody tr:nth-child(odd) {
  background-color: #fcfcfc;
}

tbody tr:nth-child(even) {
  background-color: #fff;
}

/* Highlight Row on Hover */
tbody tr:hover {
  background-color: #f1f1f1;
}

/* Responsive Table */
table {
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}

/* Caption Styling (Optional) */
caption {
  caption-side: bottom;
  font-size: 0.875rem;
  color: #777;
  margin-top: 0.5em;
  text-align: center;
}

`;
export default function BlogPost({ params }: BlogPostPageProps) {
  const { id } = React.use(params);
  console.log(id);
  const router = useRouter();
  return (
    <BlogLayout>
      <div>
        <Button onClick={() => router.back()} className="bg-white text-slate-800 hover:bg-slate-200 hover:text-slate-800">
          <FaArrowLeftLong />
        </Button>
      </div>
      <Article>
        <Image src={"https://res.cloudinary.com/hrmscloud/image/upload/f_auto,q_auto/msc%20kk?_a=AMAACLR0"} alt="hero" width={800} height={400} layout="responsive" />
        <Head>
          <title>Comprehensive Blog Post</title>
          <meta name="description" content="Comprehensive dummy blog post for testing CSS styles" />
        </Head>
        <article>
          <header>
            <h1>Comprehensive Blog Post Title</h1>
            <p>
              <time dateTime="2025-01-17">January 17, 2025</time> | Written by <a href="#">Author Name</a>
            </p>
          </header>
          <main>
            {/* Introduction */}
            <section>
              <p>Welcome to this comprehensive dummy blog post. This document includes all key HTML elements to help you test and style your blog layout.</p>
            </section>

            {/* Headings */}
            <section>
              <h2>Section Heading 1</h2>
              <p>This is a paragraph under a second-level heading.</p>
              <h3>Subheading Level 2</h3>
              <p>This is a paragraph under a third-level subheading.</p>
              <h4>Subheading Level 3</h4>
              <p>This is a paragraph under a fourth-level subheading.</p>
            </section>

            {/* Text Styles */}
            <section>
              <h2>Text Styles</h2>
              <p>
                This is <strong>bold text</strong>, and this is <em>italic text</em>. You can also use <u>underlined text</u> for emphasis.
              </p>
              <p>
                Here&apos;s an example of <mark>highlighted text</mark>, and here’s <del>strikethrough text</del>.
              </p>
            </section>

            {/* Lists */}
            <section>
              <h2>Lists</h2>
              <ul>
                <li>Unordered List Item 1</li>
                <li>Unordered List Item 2</li>
                <li>Unordered List Item 3</li>
              </ul>
              <ol>
                <li>Ordered List Item 1</li>
                <li>Ordered List Item 2</li>
                <li>Ordered List Item 3</li>
              </ol>
            </section>

            {/* Blockquote */}
            <section>
              <h2>Blockquote</h2>
              <blockquote>
              &quot;This is an example of a blockquote. It is used to highlight important quotes or excerpts.&quot;
                <footer>— Someone Famous</footer>
              </blockquote>
            </section>

            {/* Code */}
            <section>
              <h2>Code and Preformatted Text</h2>
              <p>
                Here’s an inline code snippet: <code>console.log(&apos;Hello, World!&apos;);</code>
              </p>
              <pre>
                <code>
                  {`function greet() {
  console.log("Hello, World!");
}`}
                </code>
              </pre>
            </section>

            {/* Images */}
            <section>
              <h2>Image with Caption</h2>
              <figure>
                <figcaption>This is a sample image caption.</figcaption>
              </figure>
            </section>

            {/* Tables */}
            <section>
              <h2>Table Example</h2>
              <table>
                <thead>
                  <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Row 1, Col 1</td>
                    <td>Row 1, Col 2</td>
                    <td>Row 1, Col 3</td>
                  </tr>
                  <tr>
                    <td>Row 2, Col 1</td>
                    <td>Row 2, Col 2</td>
                    <td>Row 2, Col 3</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Horizontal Rule */}
            <section>
              <h2>Horizontal Rule</h2>
              <p>Below is an example of a horizontal rule:</p>
              <hr />
            </section>

            {/* Links */}
            <section>
              <h2>Links</h2>
              <p>
                Visit{" "}
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                  this link
                </a>{" "}
                to learn more.
              </p>
            </section>
          </main>
          <footer>
            <p>
              Tags: <a href="#">HTML</a>, <a href="#">CSS</a>, <a href="#">Blog</a>
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

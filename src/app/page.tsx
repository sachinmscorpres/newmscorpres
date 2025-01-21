"use client";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
const Homepage = dynamic(() => import("@/components/pages/Homepage"), {
  loading: () => (
    <div className="h-[100vh] flex items-center justify-center">
      <Image src={"/mslogo.png"} width={100} height={100} alt={""} className="max-w-[300px] lg:w-[300px] w-[200px] h-auto animate-pulse opacity-60" />
    </div>
  ),
});
export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to MsCorpres | Empowering Solutions</title>
        <meta name="google-site-verification" content="KKOvYSdxhIKXdM5mcrwSqgylO-ZYk3OsBaAKfF59F0s" />
        <meta name="description" content="Welcome to MsCorpres. Explore our innovative solutions and services designed to drive success." />
        <meta name="keywords" content="MsCorpres, Home, Innovative Solutions, Professional Services" />
      </Head>

      <Homepage />
    </>
  );
}

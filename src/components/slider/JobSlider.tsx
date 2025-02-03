import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css/free-mode";
import styled from "styled-components";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const JobSlider = () => {
  return (
    <Wrapper>
      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          550: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          728: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={7}
        spaceBetween={60}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card className="bg-teal-600 bg-cover bg-center bg-no-repeat hover:bg-left-bottom text-white overflow-hidden ">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white text-2xl">Executive</CardTitle>
              <Badge className="rounded-full bg-white/15 hover:bg-white/30 px-[10px] shadow-none">Open</Badge>
            </CardHeader>
            <CardContent className="text-white"> Management Information System.</CardContent>
            <CardFooter className="flex flex-col gap-[10px]">
              <div className="flex items-center justify-start w-full gap-[10px]">
                <Badge className="rounded-full bg-white/15 hover:bg-white/30 px-[10px] shadow-none">Open</Badge>
                <Badge className="rounded-full bg-white/15 hover:bg-white/30 px-[10px] shadow-none">3-5 Years</Badge>
                <Badge className="rounded-full bg-white/15 hover:bg-white/30 px-[10px] shadow-none">Full Time</Badge>
              </div>
              <Button className="rounded-full  w-full bg-white text-slate-900 hover:bg-white">Apply</Button>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="bg-teal-600 bg-cover bg-center bg-no-repeat hover:bg-left-bottom text-white overflow-hidden ">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white text-2xl">Executive</CardTitle>
              <Badge className="rounded-full bg-white/15 hover:bg-white/30 px-[10px] shadow-none">Open</Badge>
            </CardHeader>
            <CardContent className="text-white"> Management Information System.</CardContent>
            <CardFooter className="flex flex-col gap-[10px]">
              <div className="flex items-center justify-start w-full gap-[10px]">
                <Badge className="rounded-full bg-white/15 hover:bg-white/30 px-[10px] shadow-none">Open</Badge>
                <Badge className="rounded-full bg-white/15 hover:bg-white/30 px-[10px] shadow-none">3-5 Years</Badge>
                <Badge className="rounded-full bg-white/15 hover:bg-white/30 px-[10px] shadow-none">Full Time</Badge>
              </div>
              <Button className="rounded-full  w-full bg-white text-slate-900 hover:bg-white">Apply</Button>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="bg-teal-600 bg-cover bg-center bg-no-repeat hover:bg-left-bottom text-white overflow-hidden ">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white text-2xl">Executive</CardTitle>
              <Badge className="rounded-full bg-white/15 hover:bg-white/30 px-[10px] shadow-none">Open</Badge>
            </CardHeader>
            <CardContent className="text-white"> Management Information System.</CardContent>
            <CardFooter className="flex flex-col gap-[10px]">
              <div className="flex items-center justify-start w-full gap-[10px]">
                <Badge className="rounded-full bg-white/15 hover:bg-white/30 px-[10px] shadow-none">Open</Badge>
                <Badge className="rounded-full bg-white/15 hover:bg-white/30 px-[10px] shadow-none">3-5 Years</Badge>
                <Badge className="rounded-full bg-white/15 hover:bg-white/30 px-[10px] shadow-none">Full Time</Badge>
              </div>
              <Button className="rounded-full  w-full bg-white text-slate-900 hover:bg-white">Apply</Button>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="bg-teal-600 bg-cover bg-center bg-no-repeat hover:bg-left-bottom text-white overflow-hidden ">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white text-2xl">Executive</CardTitle>
              <Badge className="rounded-full bg-white/15 hover:bg-white/30 px-[10px] shadow-none">Open</Badge>
            </CardHeader>
            <CardContent className="text-white"> Management Information System.</CardContent>
            <CardFooter className="flex flex-col gap-[10px]">
              <div className="flex items-center justify-start w-full gap-[10px]">
                <Badge className="rounded-full bg-white/15 hover:bg-white/30 px-[10px] shadow-none">Open</Badge>
                <Badge className="rounded-full bg-white/15 hover:bg-white/30 px-[10px] shadow-none">3-5 Years</Badge>
                <Badge className="rounded-full bg-white/15 hover:bg-white/30 px-[10px] shadow-none">Full Time</Badge>
              </div>
              <Button className="rounded-full  w-full bg-white text-slate-900 hover:bg-white">Apply</Button>
            </CardFooter>
          </Card>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .swiper {
    padding: 40px 0;
  }
  .swiper-pagination-bullet {
    background-color: #0d9488 !important;
  }

  .swiper-pagination-bullet {
    background-color: #0d9488 !important;
  }
`;

export default JobSlider;

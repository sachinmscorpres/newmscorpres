import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css/free-mode";
import styled from "styled-components";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

const ServiceListSlider = () => {
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
          <Card className="bg-white overflow-hidden ">
            <Image src={"/hero.svg"} alt="service1" width={200} height={200} layout="responsive" className="" />
            <CardContent className="text-slate-600">
              <CardTitle className="text-slate-600 text-2xl">Let&apos;s Win Together</CardTitle>
              Their experiences show how much they rely on our quick solutions, and the growth we&apos;ve achieved together stands as proof of our solid partnerships. Their stories are not just about what
            </CardContent>
            <CardFooter>
              <Button className="rounded-full bg-emerald-600 hover:bg-teal-700 text-white hover:text-white">Read More</Button>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="bg-white overflow-hidden ">
            <Image src={"/hero.svg"} alt="service1" width={200} height={200} layout="responsive" className="" />
            <CardContent className="text-slate-600">
              <CardTitle className="text-slate-600 text-2xl">Let&apos;s Win Together</CardTitle>
              Their experiences show how much they rely on our quick solutions, and the growth we&apos;ve achieved together stands as proof of our solid partnerships. Their stories are not just about what
            </CardContent>
            <CardFooter>
              <Button className="rounded-full bg-emerald-600 hover:bg-teal-700 text-white hover:text-white">Read More</Button>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="bg-white overflow-hidden ">
            <Image src={"/hero.svg"} alt="service1" width={200} height={200} layout="responsive" className="" />
            <CardContent className="text-slate-600">
              <CardTitle className="text-slate-600 text-2xl">Let&apos;s Win Together</CardTitle>
              Their experiences show how much they rely on our quick solutions, and the growth we&apos;ve achieved together stands as proof of our solid partnerships. Their stories are not just about what
            </CardContent>
            <CardFooter>
              <Button className="rounded-full bg-emerald-600 hover:bg-teal-700 text-white hover:text-white">Read More</Button>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="bg-white overflow-hidden ">
            <Image src={"/hero.svg"} alt="service1" width={200} height={200} layout="responsive" className="" />
            <CardContent className="text-slate-600">
              <CardTitle className="text-slate-600 text-2xl">Let&apos;s Win Together</CardTitle>
              Their experiences show how much they rely on our quick solutions, and the growth we&apos;ve achieved together stands as proof of our solid partnerships. Their stories are not just about what
            </CardContent>
            <CardFooter>
              <Button className="rounded-full bg-emerald-600 hover:bg-teal-700 text-white hover:text-white">Read More</Button>
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
`;

export default ServiceListSlider;

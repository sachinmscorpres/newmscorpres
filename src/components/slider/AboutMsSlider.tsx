import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css/free-mode";
import styled from "styled-components";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const AboutMsSlider = () => {
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
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 10,
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
          <Card className="bg-teal-500 bg-cover bg-center bg-no-repeat hover:bg-left-bottom">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Let&apos;s Win Together</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-200">
              Their experiences show how much they rely on our quick solutions, and the growth we&apos;ve achieved together stands as proof of our solid partnerships. Their stories are not just about what we&apos;ve done—they&apos;re about how fast we&apos;ve done it. READ MORE
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="bg-teal-500 bg-cover bg-center bg-no-repeat hover:bg-left-bottom">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Let&apos;s Win Together</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-200">
              Their experiences show how much they rely on our quick solutions, and the growth we&apos;ve achieved together stands as proof of our solid partnerships. Their stories are not just about what we&apos;ve done—they&apos;re about how fast we&apos;ve done it. READ MORE
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="bg-teal-500 bg-cover bg-center bg-no-repeat hover:bg-left-bottom">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Let&apos;s Win Together</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-200">
              Their experiences show how much they rely on our quick solutions, and the growth we&apos;ve achieved together stands as proof of our solid partnerships. Their stories are not just about what we&apos;ve done—they&apos;re about how fast we&apos;ve done it. READ MORE
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="bg-teal-500 bg-cover bg-center bg-no-repeat hover:bg-left-bottom">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Let&apos;s Win Together</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-200">
              Their experiences show how much they rely on our quick solutions, and the growth we&apos;ve achieved together stands as proof of our solid partnerships. Their stories are not just about what we&apos;ve done—they&apos;re about how fast we&apos;ve done it. READ MORE
            </CardContent>
          </Card>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .swiper {
    padding: 30px 0;
  }
`;

export default AboutMsSlider;

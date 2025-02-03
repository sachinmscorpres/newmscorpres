import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css/free-mode";
import styled from "styled-components";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { about } from "@/data";
import Link from "next/link";

const AboutUsSlider = () => {
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
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        {about.map((item) => (
          <SwiperSlide key={item.id} className="h-full">
            <Card className="bg-teal-600 bg-cover bg-center bg-no-repeat hover:bg-left-bottom h-full ">
              <CardHeader>
                <CardTitle className="text-white text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-100">
                <div className="h-[50px]">
                  <h3 className="text-[17px] text-white">{item.subtitle}</h3>
                </div>
                {item.content.slice(0, 200)}
                <Link href={"/about"} className={"text-amber-200 ml-2 hover:underline"}>
                  read more
                </Link>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .swiper {
    padding-bottom: 50px;
  }
  .swiper-pagination-bullet {
  background-color: #fff !important; /* Change to your preferred color */
}


.swiper-pagination-bullet {
  background-color: #fff !important; /* Change to your preferred color */
}
`;

export default AboutUsSlider;

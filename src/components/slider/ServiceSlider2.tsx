import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import "swiper/css/effect-fade";
import Image from "next/image";
const ServiceSlider2 = () => {
  return (
    <Slider className="rounded  py-[10px] ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper  "
        loop={true}
      >
        <SwiperSlide className="">
          <div className="card grid grid-cols-2 relative">
            <div>
              <Image
                src="https://images.pexels.com/photos/29836306/pexels-photo-29836306/free-photo-of-misty-forested-mountains-in-slovakia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="max-w-[300px] rounded-lg"
                width={200}
                height={300}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="text-slate-600 flex flex-col gap-[20px] justify-center">
              <div className="flex items-center relative">
                <span className="text-7xl font-bold  text-border absolute z-[-1]">01</span>
                <h2 className=" text-5xl font-bold text-teal-600 ml-[50px] mt-[40px]">Production</h2>
              </div>

              <p>
                It aids in creating production schedules based on customer orders, inventory levels, lead times, & resource availability. The module provides information on the availability of materials & components, helping production planners make informed decisions about
                scheduling & resource allocation. It helps set & manage safety stock levels to ensure that there are enough materials on hand to meet unexpected demand or production delays. This ensures that production runs smoothly & efficiently.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" grid grid-cols-2 relative">
            <div>
              <Image
                src="https://images.pexels.com/photos/29836306/pexels-photo-29836306/free-photo-of-misty-forested-mountains-in-slovakia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                layout="responsive"
                className="max-w-[300px] rounded-lg"
                width={200}
                height={300}
                alt=""
              />
            </div>
            <div className="text-slate-600 flex flex-col gap-[20px] justify-center">
              <div className="flex items-center relative">
                <span className="text-7xl font-bold  text-border absolute z-[-1]">02</span>
                <h2 className=" text-5xl font-bold text-teal-600 ml-[50px] mt-[40px]">Production</h2>
              </div>

              <p>
                It aids in creating production schedules based on customer orders, inventory levels, lead times, & resource availability. The module provides information on the availability of materials & components, helping production planners make informed decisions about
                scheduling & resource allocation. It helps set & manage safety stock levels to ensure that there are enough materials on hand to meet unexpected demand or production delays. This ensures that production runs smoothly & efficiently.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <div className=" text-white absolute top-0 right-0 flex gap-[10px] z-[10]">
          <Button className="prev bg-white hover:bg-white text-slate-800">
            <ChevronLeft />
          </Button>
          <Button className="next bg-white hover:bg-white text-slate-800">
            <ChevronRight />
          </Button>
        </div>
      </Swiper>
    </Slider>
  );
};
const Slider = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  position: relative;

  .swiper {
    min-width: 300px;
    width: 70%;
  }

 
  .text-border {
    color: transparent;
    -webkit-text-stroke: 1px #525252;
  }
`;
export default ServiceSlider2;

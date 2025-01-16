import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation ,Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronDown, ChevronUp, Quote } from "lucide-react";
import Marquee from "react-fast-marquee";
import { Card } from "../ui/card-hover-effect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "swiper/css/autoplay"; 
import Image from 'next/image';
const ClientReviewsSection: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <div className="custom-swiper px-[100px] my-[100px]">
      <div className="grid grid-cols-[1fr_2fr] w-full gap-[50px] ">
        <div>
          <h3 className="text-[18px] font-bold">Client Review</h3>
          <h2 className="text-2xl">Customized Solutions to Meet Client Needs.</h2>
          <p className="text-slate-500">We help our clients build strong systems that get things done and lead to great achievements.</p>
          <div className="flex  gap-[20px] mt-[20px]">
            <div className="relative rounded-md overflow-hidden border">
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrg2YUhElZZVIYyQXBMPcca-fSpWLJoOtplw&s" alt="" layout="responsive" width={300} height={300} />
              <div className="absolute bottom-0 left-0 right-0 p-[5px] bg-teal-600/40 rounded-md text-white flex items-center justify-center">Sachin</div>
            </div>
            <div className="flex flex-col justify-between bg-teal-100 p-[10px] rounded-full">
              <button ref={prevRef} className="custom-prev-btn rounded-full bg-teal-600 p-[3px] text-white">
                <ChevronUp />
              </button>
              <button ref={nextRef} className="custom-next-btn rounded-full bg-teal-600 p-[3px] text-white">
                <ChevronDown />
              </button>
            </div>
          </div>
        </div>

        <div>
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
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1440: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
            autoplay={{
              delay: 3000, // Time in milliseconds between slides
              disableOnInteraction: false, // Keep autoplay active even after interaction
            }}
            className="max-h-[350px]"
            direction="vertical"
            modules={[Navigation,Autoplay]}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
           
            slidesPerView={1}
            spaceBetween={10}
          >
            <SwiperSlide>
              <Card className="slide-content  border-teal-600 border-2  bg-white  gap-[20px]">
                <div className="flex justify-between">
                  <div>
                    <Quote size={30} />
                    <h4 className="font-[600]">CEO, Shishir Gupta,</h4>
                    <h5 className="font-[600]">Oakter</h5>
                    <p className="text-slate-500">
                      We have been working with MsCorpres for more than 4 years. Its a delight working with the team. They very efficiently <span className="text-teal-600">Read More...</span>
                    </p>
                  </div>
                  <div>
                    <Avatar className="w-[60px] h-[60px]">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="slide-content  border-teal-600 border-2  bg-white  gap-[20px]">
                <div className="flex justify-between">
                  <div>
                    <Quote size={30} />
                    <h4 className="font-[600]">CEO, Shishir Gupta,</h4>
                    <h5 className="font-[600]">Oakter</h5>
                    <p className="text-slate-500">
                      We have been working with MsCorpres for more than 4 years. Its a delight working with the team. They very efficiently <span className="text-teal-600">Read More...</span>
                    </p>
                  </div>
                  <div>
                    <Avatar className="w-[60px] h-[60px]">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="slide-content  border-teal-600 border-2  bg-white  gap-[20px]">
                <div className="flex justify-between">
                  <div>
                    <Quote size={30} />
                    <h4 className="font-[600]">CEO, Shishir Gupta,</h4>
                    <h5 className="font-[600]">Oakter</h5>
                    <p className="text-slate-500">
                      We have been working with MsCorpres for more than 4 years. Its a delight working with the team. They very efficiently <span className="text-teal-600">Read More...</span>
                    </p>
                  </div>
                  <div>
                    <Avatar className="w-[60px] h-[60px]">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          </Swiper>
          <div className="py-[30px]">
            <Marquee>
              <div className="flex items-center gap-[50px]">
                <Image src="https://www.mscorpres.com/assets/c.png" layout="responsive" width={100} height={100} alt="" className="w-[100px] grayscale hover:grayscale-0 transition opacity-50 hover:opacity-100 " />
                <Image src="https://www.mscorpres.com/assets/cprav.png" layout="responsive" width={100} height={100} alt="" className="w-[100px] grayscale hover:grayscale-0 transition opacity-50 hover:opacity-100 " />
                <Image src="https://www.mscorpres.com/assets/ds.png" layout="responsive" width={100} height={100} alt="" className="w-[100px] grayscale hover:grayscale-0 transition opacity-50 hover:opacity-100 " />
                <Image src="https://www.mscorpres.com/assets/kortek.png" layout="responsive" width={100} height={100} alt="" className="w-[100px] grayscale hover:grayscale-0 transition opacity-50 hover:opacity-100 " />
                <Image src="https://www.mscorpres.com/assets/oktar.png" layout="responsive" width={100} height={100} alt="" className="w-[100px] grayscale hover:grayscale-0 transition opacity-50 hover:opacity-100 " />
                <Image src="https://www.mscorpres.com/assets/paytm.png" layout="responsive" width={100} height={100} alt="" className="w-[100px] grayscale hover:grayscale-0 transition opacity-50 hover:opacity-100 " />
                <Image src="https://www.mscorpres.com/assets/vans.png"layout="responsive" width={100} height={100} alt="" className="w-[100px] grayscale hover:grayscale-0 transition opacity-50 hover:opacity-100 " />
                <Image src="https://www.mscorpres.com/assets/amazech.png" layout="responsive" width={100} height={100} alt="" className="w-[100px] grayscale hover:grayscale-0 transition opacity-50 hover:opacity-100 " />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewsSection;

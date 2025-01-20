import { Building2, ChartNoAxesCombined, ChevronLeft, ChevronRight, Handshake, Settings } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
const titles = [
  {
    id: 1,
    title: "Supporting Indian Startups and MNCs",
  },
  {
    id: 2,
    title: "Transforming Vision Into Business Success",
  },
  {
    id: 3,
    title: "Tailored Solutions For Every Business Function",
  },
  {
    id: 4,
    title: "Streamlining Operations For Growth",
  },
];
const content = [
  {
    id: 1,
    desc: "Whether you are an Indian startup looking for support or an MNC planning to enter India, we can help you thrive in the tough market environment here.",
    icons: <Building2 size={40} />,
  },
  {
    id: 2,
    desc: "We prioritize smart execution across all critical business domains. From startups to global entities, we have the expertise to propel your business forward.",
    icons: <Handshake size={40} />,
  },
  {
    id: 3,
    desc: "We offer customized solutions for Sales, Marketing, Production, Planning, Logistics, HR, Legal and beyond. From startups to multinational corporations, we cater to all with precision. Join us in this journey towards growth and success.",
    icons: <Settings size={40} />,
  },
  {
    id: 4,
    desc: "We ensure that your business operations run efficiently and cost effectively, whether it's Sales, Marketing, production, planning logistics or HR. If you're aiming to grow without the operational challenges, you're in the right place. Let's build YOUR success together.",
    icons: <ChartNoAxesCombined size={40} />,
  },
];

function renderContent(index: number) {
  return (
    <div className="animate-fadein flex items-center justify-center flex-col gap-[10px]">
      {content[index].icons}
      <p className="text-center text-sm">{content[index].desc}</p>
    </div>
  );
}

const IntroSection: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % content.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden">
      <div className="p-[50px] lg:px-[300px]">
        <h3 className="text-center text-[20px]">
          <span className="text-teal-600">Our expert troubleshooting swiftly resolves operational challenges</span>, ensuring smooth, efficient business operations and sustained growth.
        </h3>
      </div>
      <div className="lg:block hidden">
        <div className="grid items-center grid-cols-3 pb-5 ">
          <div className="flex flex-col justify-between h-full items-end py-[100px]">
            <button onClick={() => setActive(0)} className={`flex items-center gap-4 ${active === 0 ? "text-teal-600" : ""}`}>
              Supporting Indian Startups and MNCs <span className={` w-[50px] h-[3px] rounded ${active === 0 ? "bg-teal-600" : "bg-slate-600"}`} />
            </button>
            <button onClick={() => setActive(1)} className={`flex items-center gap-4 ${active === 1 ? "text-teal-600" : ""}`}>
              Transforming Vision Into Business Success <span className={` w-[50px] h-[3px] rounded ${active === 1 ? "bg-teal-600" : "bg-slate-600"}`} />
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-[400px] h-[400px] relative rounded-full">
              <Image alt="" width={400} height={400} src="/circle.svg" className="animate-slowSpin rounded-full w-full h-full" />
              <div className="card bg-[url('/tealgr.jpg')] bg-cover bg-center bg-no-repeat top-[50px] bottom-[50px] left-[50px] right-[50px] absolute z-[1] rounded-br-[100px] rounded-tr-[50px] rounded-tl-[50px] p-[20px] text-white flex items-center justify-center">{renderContent(active)}</div>
            </div>
          </div>
          <div className="flex flex-col justify-between h-full items-start py-[100px]">
            <button onClick={() => setActive(2)} className={`flex items-center gap-4 ${active === 2 ? "text-teal-600" : ""}`}>
              <span className={` w-[50px] h-[3px] rounded ${active === 2 ? "bg-teal-600" : "bg-slate-600"}`} />
              Tailored Solutions For Every Business Function
            </button>
            <button onClick={() => setActive(3)} className={`flex items-center gap-4 ${active === 3 ? "text-teal-600" : ""}`}>
              <span className={` w-[50px] h-[3px] rounded ${active === 3 ? "bg-teal-600" : "bg-slate-600"}`} />
              Streamlining Operations For Growth
            </button>
          </div>
        </div>
      </div>

      <div className=" pb-5 lg:hidden block">
        <div className="flex flex-col justify-between h-full px-[20px] ">
          <div className="flex items-center justify-between">
            <Button variant={"ghost"} onClick={() => setActive(active === 0 ? content.length - 1 : active - 1)}>
              <ChevronLeft />
            </Button>
            <p className="text-teal-500">{titles[active].title} </p>
            <Button variant={"ghost"} onClick={() => setActive(active === content.length - 1 ? 0 : active + 1)}>
              <ChevronRight />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[400px] h-[400px] relative rounded-full">
            <Image alt="" width={400} height={400} src="/circle.svg" className="animate-slowSpin rounded-full w-full h-full" />
            <div className="card bg-[url('/tealgr.jpg')] bg-cover bg-center bg-no-repeat  top-[50px] bottom-[50px] left-[30px] right-[30px] absolute z-[1] rounded-br-[100px] rounded-tr-[50px] rounded-tl-[50px] p-[20px] text-white flex items-center justify-center">{renderContent(active)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

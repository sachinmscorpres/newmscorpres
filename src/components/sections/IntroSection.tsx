import { Building2, ChartNoAxesCombined, Handshake, Settings } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
      <p className="text-center">{content[index].desc}</p>
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
      <div className="grid items-center grid-cols-3 pb-5">
        <div className="flex flex-col justify-between h-full items-end py-[100px]">
          <button className="flex items-center gap-4">
            Supporting Indian Startups and MNCs <span className="bg-teal-600 w-[50px] h-[3px] rounded" />
          </button>
          <button className="flex items-center gap-4">
            Transforming Vision Into Business Success <span className="bg-slate-600 w-[50px] h-[3px] rounded" />
          </button>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[400px] h-[400px] relative rounded-full">
            <Image alt="" width={400} height={400} src="/circle.svg" className="animate-slowSpin rounded-full w-full h-full" />
            <div className="card bg-teal-500 top-[50px] bottom-[50px] left-[50px] right-[50px] absolute z-[1] rounded-br-[100px] rounded-tr-[50px] rounded-tl-[50px] p-[20px] text-white flex items-center justify-center">{renderContent(active)}</div>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full items-start py-[100px]">
          <button className={`flex items-center gap-4 `}>
            <span className="bg-slate-600 w-[50px] h-[3px] rounded" />
            Tailored Solutions For Every Business Function
          </button>
          <button className="flex items-center gap-4">
            <span className="bg-slate-600 w-[50px] h-[3px] rounded" />
            Streamlining Operations For Growth
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

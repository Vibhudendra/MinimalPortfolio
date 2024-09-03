import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorder";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 1000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(31, 4, 36)",
              backgroundColor:
                "radial-gradient(circle, rgba(82,41,89,1) 0%, rgba(65,8,84,1) 43%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                width={32}
                height={32}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <div className="flex items-center justify-between">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <h2 className="text-base text-white-100 sm:text-xs">
                    {card.Date}
                  </h2>
                </div>
                <p className="text-start text-white-200 mt-1 font-semibold">
                  {card.subtitle}
                </p>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;

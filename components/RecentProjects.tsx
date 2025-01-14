import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="pt-20" id="projects">
      <h1 className="heading">
        A Selection of <span className="text-blue-500">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-16">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] sm:w-[570px] w-[80vw] items-center justify-center "
          >
            <PinContainer title={title} href={link} className="mt-64">
              <div className="relative flex items-center justify-center sm:w-[570px] rounded-lg w-[80vw] overflow-hidden h-[26vh] lg:h-[50vh]">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src="/bg.png" alt="bg-img" width={530} height={60} />
                </div>
                <Image
                  src={img}
                  alt="Cover"
                  className="z-10 absolute flex items-center justify-center"
                  width={530}
                  height={60}
                />
              </div>

              <h1 className="mt-5 font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="pt-2 lg:text-2xl lg:font-light font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-blue-400">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#5FA2F6" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

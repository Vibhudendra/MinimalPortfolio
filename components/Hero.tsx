import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerate-effect";
import { socialMedia } from "@/data";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="">
        <Spotlight
          className="-top-4 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"></h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-5xl"
            words={`Hello, I'm Vibhudendra👋 \n Software Developer based in Bengaluru IN`}
          />

          <p className="text-center md:tracking-wider mb-2 text-sm md:text-lg lg:text-2xl mt-2">
          Clean Code. Clear Design. Engaging Experiences
          </p>
          <div className="flex items-center md:gap-3 gap-6 mt-4">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-lg border border-black-300"
            >
              <div className="flex justify-center items-center">
                <Image
                  src={profile.img}
                  alt={profile.link}
                  width={20}
                  height={20}
                />
              </div>
            </a>
          ))}
        </div>
          {/* <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;

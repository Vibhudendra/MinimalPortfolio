'use client'

import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-48:">
        <Image
          src="/footer-grid.svg"
          alt="Grid"
          className="w-full h-full opacity-50"
        />
      </div> */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Have a <span className="text-purple">project</span> in mind?,
          Let&apos;s <span className="text-purple">build</span> something
          together!
        </h1>
        <p className="text-white-200 md:mt-8 my-3 text-center">
          Reach out to me today & Let&apos;s discuss how I can help you in
          achieving your goals
        </p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vibhudendra.s@gmail.com" target="_blank" rel="noopener noreferrer">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Vibhudendra
        </p>

        
      </div>
    </footer>
  );
};

export default Footer;

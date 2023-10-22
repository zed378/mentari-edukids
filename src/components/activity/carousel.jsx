"use client";

import React from "react";
import ScrollCarousel from "scroll-carousel-react";
import Image from "next/image";
import useWindowSize from "@rooks/use-window-size";

import bb1 from "../../assets/pict/bb1.webp";
import bb2 from "../../assets/pict/bb2.webp";
import bb3 from "../../assets/pict/bb3.webp";
import bb4 from "../../assets/pict/bb4.webp";
import bb5 from "../../assets/pict/bb5.webp";
import reg1 from "../../assets/pict/reg1.webp";
import reg2 from "../../assets/pict/reg2.webp";
import reg3 from "../../assets/pict/reg3.webp";
import reg4 from "../../assets/pict/reg4.webp";
import tes1 from "../../assets/pict/tes1.webp";
import tes2 from "../../assets/pict/tes2.webp";
import tes3 from "../../assets/pict/tes3.webp";

export default function ScrollCarouselComponent({ classStudy }) {
  const bbImg = [bb1, bb2, bb3, bb4, bb5];
  const regImg = [reg1, reg2, reg3, reg4];
  const tesImg = [tes1, tes2, tes3];

  return (
    <>
      {classStudy === "tesla" && (
        <ScrollCarousel autoplay autoplaySpeed={8} speed={7} className="mb-20">
          {tesImg.map((item) => (
            <div key={item} className="">
              <Image
                src={item}
                alt={item}
                className={` w-[325px] h-auto flex justify-center items-center`}
              />
            </div>
          ))}
        </ScrollCarousel>
      )}

      {classStudy === "bub" && (
        <ScrollCarousel autoplay autoplaySpeed={8} speed={7} className="mb-20">
          {bbImg.map((item) => (
            <div key={item} className="">
              <Image
                src={item}
                alt={item}
                className={` w-[325px] h-auto flex justify-center items-center`}
              />
            </div>
          ))}
        </ScrollCarousel>
      )}

      {classStudy === "reg" && (
        <ScrollCarousel autoplay autoplaySpeed={8} speed={7} className="mb-20">
          {regImg.map((item) => (
            <div key={item} className="">
              <Image
                src={item}
                alt={item}
                className={` w-[325px] h-auto flex justify-center items-center`}
              />
            </div>
          ))}
        </ScrollCarousel>
      )}
    </>
  );
}

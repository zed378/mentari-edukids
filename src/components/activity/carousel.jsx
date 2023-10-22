"use client";

import React from "react";
import ScrollCarousel from "scroll-carousel-react";
import Image from "next/image";
import useWindowSize from "@rooks/use-window-size";

import bb1 from "../../assets/pict/bb1.png";
import bb2 from "../../assets/pict/bb2.png";
import bb3 from "../../assets/pict/bb3.png";
import bb4 from "../../assets/pict/bb4.png";
import bb5 from "../../assets/pict/bb5.png";
import reg1 from "../../assets/pict/reg1.png";
import reg2 from "../../assets/pict/reg2.png";
import reg3 from "../../assets/pict/reg3.png";
import reg4 from "../../assets/pict/reg4.png";
import tes1 from "../../assets/pict/tes1.png";
import tes2 from "../../assets/pict/tes2.png";
import tes3 from "../../assets/pict/tes3.png";

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

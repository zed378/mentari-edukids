import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import useWindowSize from "@rooks/use-window-size";
import { Fade, Slide } from "react-awesome-reveal";

import learn from "../../assets/learn.svg";
import pict1 from "../../assets/pict/pict1.webp";
import pict2 from "../../assets/pict/pict2.webp";
import pict3 from "../../assets/pict/pict3.webp";
import pict4 from "../../assets/pict/pict4.webp";
import pict5 from "../../assets/pict/pict5.webp";
import pict6 from "../../assets/pict/pict6.webp";
import pict7 from "../../assets/pict/pict7.webp";

export default function Activity() {
  const images = [pict1, pict2, pict3, pict4, pict5, pict6, pict7];
  const [imgIndex, setImgIndex] = useState(0);
  const { innerWidth } = useWindowSize();

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    dots: true,
    infinite: true,
    centerPadding: "10px",
    arrows: false,
    pauseOnHover: false,
    slidesToShow: innerWidth <= 900 ? 1 : 3,
    slidesToScroll: 1,
    centerMode: true,
    beforeChange: (current, next) => setImgIndex(next),
  };

  return (
    <div
      id="Activity"
      className="mid:px-4 mid:py-10 flex-col flex items-center justify-center gap-10 mid:gap-3 min-h-screen relative"
    >
      <div className="absolute top-0 left-0 areas -z-10 -scale-y-100">
        <ul className="circless">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className="absolute top-0 left-0 areas -z-10">
        <ul className="circless">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      {innerWidth <= 900 && (
        <Fade direction="up">
          <section className="w-full mid:h-[400px] flex justify-center relative">
            <Image src={learn} alt={learn} className="w-full h-auto" />
          </section>
        </Fade>
      )}

      {innerWidth > 900 && (
        <Fade direction="up">
          <section className="w-full h-[700px] relative flex justify-center z-10">
            <Image src={learn} alt={learn} className="h-full w-auto" />
          </section>
        </Fade>
      )}

      <Fade direction="down" cascade>
        <h1 className="text-4xl text-center mid:text-2xl font-medium mb-10">
          Dokumentasi Kegiatan Belajar Siswa Kami
        </h1>
      </Fade>

      <Slider {...settings} className="w-full mb-20">
        <Image
          src={pict1}
          alt={pict1}
          className={`${
            images.indexOf(pict1) === imgIndex ? "slide activeSlide" : "slide"
          } w-auto flex justify-center items-center ${
            innerWidth < 900 ? "px-2" : "px-20"
          }`}
        />

        <Image
          src={pict2}
          alt={pict2}
          className={`${
            images.indexOf(pict2) === imgIndex ? "slide activeSlide" : "slide"
          } w-auto flex justify-center items-center ${
            innerWidth < 900 ? "px-2" : "px-20"
          }`}
        />

        <Image
          src={pict3}
          alt={pict3}
          className={`${
            images.indexOf(pict3) === imgIndex ? "slide activeSlide" : "slide"
          } w-auto flex justify-center items-center ${
            innerWidth < 900 ? "px-2" : "px-20"
          }`}
        />

        <Image
          src={pict4}
          alt={pict4}
          className={`${
            images.indexOf(pict4) === imgIndex ? "slide activeSlide" : "slide"
          } w-auto flex justify-center items-center ${
            innerWidth < 900 ? "px-2" : "px-20"
          }`}
        />

        <Image
          src={pict5}
          alt={pict5}
          className={`${
            images.indexOf(pict5) === imgIndex ? "slide activeSlide" : "slide"
          } w-auto flex justify-center items-center ${
            innerWidth < 900 ? "px-2" : "px-20"
          }`}
        />

        <Image
          src={pict6}
          alt={pict6}
          className={`${
            images.indexOf(pict6) === imgIndex ? "slide activeSlide" : "slide"
          } w-auto flex justify-center items-center ${
            innerWidth < 900 ? "px-2" : "px-20"
          }`}
        />

        <Image
          src={pict7}
          alt={pict7}
          className={`${
            images.indexOf(pict7) === imgIndex ? "slide activeSlide" : "slide"
          } w-auto flex justify-center items-center ${
            innerWidth < 900 ? "px-2" : "px-20"
          }`}
        />
      </Slider>
    </div>
  );
}

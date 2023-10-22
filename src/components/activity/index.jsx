"use client";

import { useState } from "react";
import Image from "next/image";
import useWindowSize from "@rooks/use-window-size";
import { Fade } from "react-awesome-reveal";
import dynamic from "next/dynamic";

const ScrollCarousel = dynamic(() => import("./carousel"), { ssr: false });
import PriceList from "./pricelist";

// assets
import learn from "../../assets/learn.svg";
import { BiGroup } from "react-icons/bi";
import { SiTesla } from "react-icons/si";
import { BsGlobeAsiaAustralia } from "react-icons/bs";

export default function Activity() {
  const { innerWidth } = useWindowSize();

  const [classStudy, setClassStudy] = useState("tesla");

  return (
    <div
      id="Activity"
      className="mid:px-4 mid:py-10 flex-col flex items-center justify-center gap-10 mid:gap-3 min-h-screen relative"
    >
      {/* bg animation */}
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
      {/* end of bg animation */}

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

      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2" onClick={() => setClassStudy("reg")}>
            <div
              className={`inline-flex items-center justify-center gap-2 cursor-pointer text-xl p-4 border-b-2 border-transparent rounded-t-lg ${
                classStudy === "reg"
                  ? "text-teal-700 border-teal-700"
                  : "hover:text-teal-700 hover:border-teal-700 text-teal-500"
              } group`}
            >
              <BiGroup /> Kelas Reguler
            </div>
          </li>

          <li className="mr-2" onClick={() => setClassStudy("tesla")}>
            <div
              className={`inline-flex items-center justify-center gap-2 cursor-pointer text-xl p-4 border-b-2 border-transparent rounded-t-lg ${
                classStudy === "tesla"
                  ? "text-teal-700 border-teal-700"
                  : "hover:text-teal-700 hover:border-teal-700 text-teal-500"
              } group`}
            >
              <SiTesla />
              Kelas Tesla
            </div>
          </li>

          <li className="mr-2" onClick={() => setClassStudy("bub")}>
            <div
              className={`inline-flex items-center justify-center gap-2 cursor-pointer text-xl p-4 border-b-2 border-transparent rounded-t-lg ${
                classStudy === "bub"
                  ? "text-teal-700 border-teal-700"
                  : "hover:text-teal-700 hover:border-teal-700 text-teal-500"
              } group`}
            >
              <BsGlobeAsiaAustralia />
              Kelas Bubble
            </div>
          </li>
        </ul>
      </div>

      <ScrollCarousel classStudy={classStudy} />

      <PriceList />
    </div>
  );
}

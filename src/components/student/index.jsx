import { useState, useEffect } from "react";
import Image from "next/image";
import useWindowSize from "@rooks/use-window-size";
import { Fade } from "react-awesome-reveal";

// Assets
import students from "../../assets/students.svg";

export default function Student() {
  const { innerWidth } = useWindowSize();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      id="Students"
      className="mid:px-4 mid:py-10 py-20 flex-col flex items-center mid:gap-3 min-h-screen w-screen relative"
    >
      <div className="absolute top-0 left-0 transarea -z-[1] -scale-y-100">
        <ul className="circles">
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

      <div className="absolute top-0 left-0 area -z-10">
        <ul className="circles">
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

      <Fade duration={1000}>
        <Image src={students} alt={students} height={500} />
        <h1 className="text-4xl text-center mid:text-2xl font-medium mb-10 uppercase my-4 text-black">
          Background murid kami
        </h1>
      </Fade>

      {innerWidth > 900 && (
        <Fade duration={200} cascade>
          <ul className="grid grid-cols-5 grid-rows-5 mid:grid-cols-1 mid:grid-rows-1 gap-5 w-full px-20 text-emerald-700">
            <li className="col-span-2 row-span-2 flex items-center justify-center glass hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-center text-4xl font-black">
                NSA <br />
                National Star Academy
              </h1>
            </li>
            <li className="col-start-3 row-start-4 flex items-center justify-center glass hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-center text-2xl">St. Yosep Luwuk</h1>
            </li>
            <li className="col-start-1 row-start-4 flex items-center justify-center glass hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-center text-2xl">Khadijah</h1>
            </li>
            <li className="col-span-2 row-span-2 col-start-3 row-start-2 flex items-center justify-center glass hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-center text-4xl font-black">
                Little Sun School
              </h1>
            </li>
            <li className="col-start-4 row-start-5 flex items-center justify-center glass hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-center text-2xl">Al-Falah Darussalam</h1>
            </li>
            <li className="row-span-3 col-start-2 row-start-3 flex items-center justify-center glass hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-center text-4xl font-black">SDIT Permata</h1>
            </li>
            <li className="col-start-3 row-start-5 flex items-center justify-center glass hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-center text-2xl">Putra Pertiwi</h1>
            </li>
            <li className="col-start-1 row-start-3 flex items-center justify-center glass hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-center text-2xl">Kuncup Bunga</h1>
            </li>
            <li className="col-start-1 row-start-5 flex items-center justify-center glass hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-center text-2xl">Al-Fathimiyyah</h1>
            </li>
            <li className="row-span-3 col-start-5 row-start-3 flex items-center justify-center glass hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-center text-4xl font-black">Raden Patah</h1>
            </li>
            <li className="col-start-3 row-start-1 flex items-center justify-center glass hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-center text-2xl">SD Manukan Kulon</h1>
            </li>
            <li className="col-start-4 row-start-1 flex items-center justify-center glass hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-center text-2xl">SMAN 11</h1>
            </li>
            <li className="col-start-5 row-start-1 flex items-center justify-center glass hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-center text-2xl">SMAN 15</h1>
            </li>
            <li className="col-start-5 row-start-2 flex items-center justify-center glass hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-center text-2xl">SMPN 26</h1>
            </li>
            <li className="col-start-4 row-start-4 flex items-center justify-center glass hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-center text-2xl">SMPN 53</h1>
            </li>
          </ul>
        </Fade>
      )}

      {innerWidth < 900 && (
        <Fade direction="up" duration={250} cascade>
          <ul className="grid grid-cols-2 grid-rows-10 gap-2 w-full px-2 text-emerald-700">
            <li className="row-span-3 flex items-center justify-center glass hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-4xl font-black text-center">
                Little Sun School
              </h1>
            </li>
            <li className=" flex items-center justify-center glass2 hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-xl text-center">St. Yosep Luwuk</h1>
            </li>
            <li className="col-span-2 col-start-1 row-start-4 flex items-center justify-center glass2 hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-4xl font-black text-center">
                NSA <br />
                National Star Academy
              </h1>
            </li>
            <li className="col-start-2 row-start-2 flex items-center justify-center glass2 hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-xl text-center">Khadijah</h1>
            </li>
            <li className="col-start-1 row-start-5 flex items-center justify-center glass2 hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-xl text-center">Al-Falah Darussalam</h1>
            </li>
            <li className="col-start-2 row-start-3 flex items-center justify-center glass2 hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-xl text-center">Putra Pertiwi</h1>
            </li>
            <li className="col-start-1 row-start-6 flex items-center justify-center glass2 hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-xl text-center">Kuncup Bunga</h1>
            </li>
            <li className="col-start-2 row-start-5 flex items-center justify-center glass2 hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-xl text-center">Al-Fathimiyyah</h1>
            </li>
            <li className="col-start-1 row-start-7 flex items-center justify-center glass2 hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-xl text-center">SD Manukan Kulon</h1>
            </li>
            <li className="row-span-2 col-start-2 row-start-6  flex items-center justify-center glass2 hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-4xl font-black text-center">Raden Patah</h1>
            </li>
            <li className="col-span-2 row-start-8 flex items-center justify-center glass2 hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-4xl font-black text-center">SDIT Permata</h1>
            </li>
            <li className="row-start-9 flex items-center justify-center glass2 hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-xl text-center">SMAN 11</h1>
            </li>
            <li className="row-start-9 flex items-center justify-center glass2 hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-xl text-center">SMAN 15</h1>
            </li>
            <li className="row-start-10 flex items-center justify-center glass2 hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-xl text-center">SMPN 26</h1>
            </li>
            <li className="row-start-10 flex items-center justify-center glass2 hover:bg-emerald-300 hover:bg-opacity-30 p-4">
              <h1 className="text-xl text-center">SMPN 53</h1>
            </li>
          </ul>
        </Fade>
      )}
    </div>
  );
}

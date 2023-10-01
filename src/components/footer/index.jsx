import useWindowSize from "@rooks/use-window-size";
import Image from "next/image";

import logo from "../../assets/logo.png";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import {
  BiHomeAlt2,
  BiSolidVirus,
  BiSolidUserCheck,
  BiCurrentLocation,
  BiDollarCircle,
  BiBookBookmark,
} from "react-icons/bi";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  const { innerWidth } = useWindowSize();
  return (
    <div className="w-full h-auto glass">
      <div className="w-full grid grid-cols-3 mid:grid-cols-1 gap-4 mt-10 px-24 pt-16 mid:pt-5 mid:px-0">
        <div className="mid:w-full mid:h-[400px] mid:pt-10 p-4 flex items-start justify-center">
          <Image src={logo} alt="Logo mentari edukids" width={300} />
        </div>

        <div className="w-full flex flex-col gap-5 py-3 px-5">
          <h1 className="mid:text-lg text-2xl">Tetap terhubung dengan Kami!</h1>

          <p className="font-light">
            Banyak hal yang terjadi saat kita sedang tidak memperhatikan.
            Termasuk perkembangan anak. Silakan lihat kegiatan terupdate dari
            bimbel kami dan penawaran-penawaran menarik lainnya.
          </p>

          <div className="flex items-center gap-4">
            <div className="h-[50px] w-[50px] flex items-center justify-center rounded-full bg-white hover:bg-slate-300 hover:text-red-400">
              <a
                href="https://www.instagram.com/mentari.edukids"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram size={30} />
              </a>
            </div>

            <div className="h-[50px] w-[50px] flex items-center justify-center rounded-full bg-white hover:bg-slate-300 hover:text-lime-600">
              <a
                href="https://mentariedukids.my.id/api/ask"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsWhatsapp size={30} />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 py-3 px-5">
          <h1 className="mid:text-lg text-2xl">Sitemap</h1>
          <div className="flex flex-col mid:gap-2 gap-4 font-light">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-emerald-600"
            >
              <BiHomeAlt2 size={20} />
              <p>Welcome</p>
            </a>

            {/* <a
              href="#About"
              className="flex items-center gap-2 hover:text-emerald-600"
            >
              <BiSolidVirus size={20} />
              <p>About</p>
            </a> */}

            <a
              href="#Why"
              className="flex items-center gap-2 hover:text-emerald-600"
            >
              <BiSolidUserCheck size={20} />
              <p>Why Us</p>
            </a>

            <a
              href="#Students"
              className="flex items-center gap-2 hover:text-emerald-600"
            >
              <BiCurrentLocation size={20} />
              <p>Student Origin</p>
            </a>

            {/* <a
              href="#"
              className="flex items-center gap-2 hover:text-emerald-600"
            >
              <BiDollarCircle size={20} />
              <p>Price List</p>
            </a> */}

            <a
              href="https://mentariedukids.my.id/api/ask"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-600"
            >
              <BiBookBookmark size={20} />
              <p>Contact</p>
            </a>
          </div>
        </div>
      </div>

      <hr className="h-px mid:mx-4 mx-20 mt-20 bg-gray-400 border-0 rounded-full" />

      <div className="w-full flex justify-center items-center mid:py-3 py-8">
        <h1 className="text-center text-xl mid:text-sm">
          Copyright ©{" "}
          <a
            href="https://linkedin.com/in/muhammad-zawawi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web Compose
          </a>{" "}
          {year} {innerWidth > 900 ? "|" : <br />} All Rights Reserved
        </h1>
      </div>
    </div>
  );
}

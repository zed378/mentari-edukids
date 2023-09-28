import Iframe from "react-iframe";
import useWindowSize from "@rooks/use-window-size";
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
    <>
      <div className="w-full flex min-h-[500px] flex-wrap mid:flex-wrap-reverse mt-10">
        <div className="w-[30%] mid:w-full mid:h-[400px] p-4">
          <h1 className="mid:text-lg text-2xl mb-5">Lokasi Kami</h1>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.728612102124!2d112.69677148507947!3d-7.271691852705866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fdcbb3ba1bcd%3A0xfa89021604c23b3e!2sMasjid%20An-Nur!5e0!3m2!1sen!2sid!4v1695899194779!5m2!1sen!2sid"
            style="border:0;"
            className="w-full h-full"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="w-[70%] mid:w-full flex mid:flex-col mid:gap-2 px-4 justify-around">
          <div className="w-[40%] mid:w-full flex flex-col gap-5 py-3">
            <h1 className="mid:text-lg text-2xl">
              Tetap terhubung dengan Kami!
            </h1>

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

          <div className="w-[40%] mid:w-full flex flex-col gap-5 py-3">
            <h1 className="mid:text-lg text-2xl">Sitemap</h1>
            <div className="flex flex-col mid:gap-2 gap-4 font-light">
              <a
                href="#"
                className="flex items-center gap-2 hover:text-emerald-600"
              >
                <BiHomeAlt2 size={20} />
                <p>Welcome</p>
              </a>

              <a
                href="#About"
                className="flex items-center gap-2 hover:text-emerald-600"
              >
                <BiSolidVirus size={20} />
                <p>About</p>
              </a>

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

              <a
                href="#"
                className="flex items-center gap-2 hover:text-emerald-600"
              >
                <BiDollarCircle size={20} />
                <p>Price List</p>
              </a>

              <a
                href="#"
                className="flex items-center gap-2 hover:text-emerald-600"
              >
                <BiBookBookmark size={20} />
                <p>Contact</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="h-px mid:mx-4 mx-20 mt-14 bg-gray-400 border-0 rounded-full" />

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
    </>
  );
}

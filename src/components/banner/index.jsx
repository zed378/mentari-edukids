import Image from "next/image";
import useWindowSize from "@rooks/use-window-size";
import { Fade } from "react-awesome-reveal";

import book from "../../assets/book.webp";

export default function Banner() {
  const { innerWidth } = useWindowSize();

  return (
    <div
      id="Home"
      className={` mid:flex-col flex ${
        innerWidth <= 1280 && "grad"
      } mid:px-4 mid:pb-20 pt-20 netbook:pt-2 min-h-screen`}
    >
      {innerWidth <= 900 && (
        <Fade>
          <div className="w-full mid:mt-10 flex justify-center relative">
            <Image
              src={book}
              alt={book}
              width={500}
              className="rounded-tr-3xl rounded-bl-3xl"
            />
          </div>
        </Fade>
      )}

      <div className="w-1/2 mid:w-full px-20 mid:px-0 flex flex-col gap-10 h-auto mid:mt-6 mt-40 ">
        <Fade direction="up" cascade>
          <div className="w-full h-auto">
            <h1 className="text-4xl mid:text-center mid:text-3xl font-medium text-white">
              Selamat Datang di Mentari Edukids
            </h1>
            <h1 className="text-4xl mid:text-center mid:text-3xl font-medium text-white">
              Teman Belajar Si Kecil
            </h1>
          </div>

          <p className="text-white text-lg mid:text-center font-light">
            Selamat datang di Mentari Edukids, tempat di mana pembelajaran
            menjadi sebuah petualangan yang menyenangkan! Kami adalah lembaga
            bimbingan belajar khusus Usia Dini dan SD yang fokus pada
            pengembangan kualitas belajar anak dan bimbingan belajar yang
            mengadopsi metode Montessori untuk membantu anak-anak Anda tumbuh
            dan berkembang secara optimal.
          </p>

          <a
            href="https://mentariedukids.my.id/api/ask"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="hover:text-teal-600 text-white rounded-xl hover:bg-white border-2 border-white py-2 text-xl w-1/2 mid:w-full netbook:bg-white netbook:text-teal-600">
              Hubungi Kami
            </button>
          </a>
        </Fade>
      </div>

      {innerWidth > 900 && (
        <Fade duration={500} className="w-1/2 h-[550px] relative">
          <Image
            src={book}
            alt={book}
            height={550}
            className="absolute md:right-[20px] laptop:right-[75px] rounded-tr-3xl rounded-bl-3xl"
          />
        </Fade>
      )}
    </div>
  );
}

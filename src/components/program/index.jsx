import { useState } from "react";
import Image from "next/image";
import useWindowSize from "@rooks/use-window-size";
import { Fade } from "react-awesome-reveal";

import program from "../../assets/program.svg";
import bubble from "../../assets/bubble.svg";
import tesla from "../../assets/tesla.svg";
import regular from "../../assets/regular.svg";

export default function Program() {
  const { innerWidth } = useWindowSize();
  const [bubbleClass, setBubbleClass] = useState(false);
  const [teslaOpen, setTeslaOpen] = useState(false);
  const [regClass, setRegClass] = useState(false);

  return (
    <div
      id="Program"
      className="mid:px-4 mid:py-10 py-20 flex-col flex items-center mid:gap-3 min-h-screen relative overflow-hidden"
    >
      {innerWidth <= 900 && (
        <Fade direction="up">
          <section className="w-full h-[100px] mid:h-[300px] mid:mt-10 flex justify-center relative">
            <Image src={program} alt={program} />
          </section>
        </Fade>
      )}

      {innerWidth > 900 && (
        <Fade direction="up">
          <section className="w-full h-[550px] relative flex justify-center z-10">
            <Image src={program} alt={program} />
          </section>
        </Fade>
      )}

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

      <section className="w-full px-20 mid:px-0 flex flex-col gap-10 h-auto mid:mt-6 mt-30">
        <Fade direction="down" cascade>
          <h1 className="text-4xl text-center mid:text-2xl font-medium mb-10">
            Program Unggulan Kami
          </h1>
        </Fade>

        <Fade duration={500} cascade>
          <ul className="grid grid-cols-3 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 mid:gap-4 gap-12 w-full">
            <li className="glass2 shadowed text-white rounded-xl shadowed px-8 py-8 flex flex-col items-center gap-3 hover:bg-emerald-300 hover:bg-opacity-30 relative">
              <Image src={bubble} alt={bubble} height={300} />
              <h1
                className={`text-center text-2xl mt-6 ${
                  !bubbleClass && "mb-16"
                }`}
              >
                Bubble Class
              </h1>
              {bubbleClass && (
                <Fade duration={2000}>
                  <p className={`font-light ${bubbleClass && "mb-10"}`}>
                    Program pembelajaran ini diperuntukkan bagi anak Usia Dini
                    atau Preschool yang mengusung tema bermain sambil belajar.
                    Dikembangkan untuk mendukung kematangan otot tangan (Motorik
                    Fine) serta Sensory berupa indra peraba, pendengaran,
                    penglihatan, pengecapan, gerak otot, penciuman dan
                    keseimbangan di fase pre-writting (pra menulis). Selain itu
                    juga terdapat sesi pembelajaran Montessory pre-Math
                    (pengenalan matematika dasar seperti konsep angka, warna dan
                    story telling untuk stimulasi bicara anak). Pembelajaran ini
                    diharapkan dapat mempersiaopkan si kecil memasuki fase
                    menulis dan calistung dengan baik.
                  </p>
                </Fade>
              )}

              <button
                className="w-[90%] rounded-xl border-2 border-white py-1 text-xl absolute bottom-5 hover:border-teal-600 hover:text-teal-600"
                onClick={() => setBubbleClass(!bubbleClass)}
              >
                {bubbleClass ? "Close" : "Show more"}
              </button>
            </li>

            <li className="glass2 shadowed text-white rounded-xl px-8 py-8 flex flex-col items-center gap-3 hover:bg-emerald-300 hover:bg-opacity-30 mid:scale-100 scale-110">
              <Image src={tesla} alt={tesla} height={300} />

              <h1
                className={`text-center mid:text-2xl text-4xl mt-6 ${
                  !teslaOpen && "mb-16"
                }`}
              >
                Tesla Kids
              </h1>
              {teslaOpen && (
                <Fade duration={2000}>
                  <p className={`font-light ${teslaOpen && "mb-10"}`}>
                    Pembelajaran program Tesla Kids ini bukan hanya mengajak si
                    Kecil belajar melalui buku saja, namun juga mengajak mereka
                    terlibat EKSPERIMEN ANAK SEDERHANA nan bermakna. Di program
                    ini si Kecil diajak mendekat pada sains dengan cara yang
                    seru dan menyenangkan. Tesla Kids memberi semangat keilmuwan
                    yang baik pada si Kecil. Tesla Kids juga dapat digunakan
                    untuk membantu meningkatkan pemahaman si Kecil yang berada
                    di usia Sekolah Dasar memahami materinya terutama Sains dan
                    Math by practice.
                  </p>
                </Fade>
              )}

              <button
                className="w-[90%] rounded-xl border-2 border-white py-1 text-xl absolute bottom-5 hover:border-teal-600 hover:text-teal-600"
                onClick={() => setTeslaOpen(!teslaOpen)}
              >
                {teslaOpen ? "Close" : "Show more"}
              </button>
            </li>

            <li className="glass2 shadowed text-white rounded-xl shadowed px-8 py-8 flex flex-col items-center gap-3 hover:bg-emerald-300 hover:bg-opacity-30 relative">
              <Image src={regular} alt={regular} height={300} />
              <h1
                className={`text-center text-2xl mt-6 ${!regClass && "mb-16"}`}
              >
                Les Reguler
              </h1>
              {regClass && (
                <Fade>
                  <p className={`font-light ${regClass && "mb-10"}`}>
                    Program ini bertujuan untuk memenuhi kebutuhan bimbingan
                    belajar harian di Kota Surabaya, kami juga menyediakan Les
                    Reguler untuk menemani Si Kecil meningkatkan pemahaman
                    materi dan konsultasi tugas untuk belajar di rumah. Adapun
                    tentor pilihan kami adalah mereka yang berpengalaman
                    mengajar dan mumpuni secara wawasan, sehingga mampu
                    memberikan bimbingan terbaiknya
                  </p>
                </Fade>
              )}

              <button
                className="w-[90%] rounded-xl border-2 border-white py-1 text-xl absolute bottom-5 hover:border-teal-600 hover:text-teal-600"
                onClick={() => setRegClass(!regClass)}
              >
                {regClass ? "Close" : "Show more"}
              </button>
            </li>
          </ul>
        </Fade>

        <Fade>
          <a
            href="https://mentariedukids.my.id/api/ask"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center mt-10 mid:mt-0"
          >
            <button className="hover:text-white text-teal-600 rounded-xl hover:bg-teal-600 border-2 border-teal-600 py-2 text-xl w-1/2 mid:w-full">
              Hubungi Kami
            </button>
          </a>
        </Fade>
      </section>
    </div>
  );
}

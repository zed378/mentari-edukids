import Image from "next/image";
import useWindowSize from "@rooks/use-window-size";

import why from "../../assets/why.svg";
import f2f from "../../assets/f2f.svg";
import stimulate from "../../assets/stimulate.svg";
import teacher from "../../assets/teacher.svg";
import whole from "../../assets/whole.svg";
import watching from "../../assets/watching.svg";
import { Fade, Slide } from "react-awesome-reveal";

export default function Why() {
  const { innerWidth } = useWindowSize();

  return (
    <div
      id="Why"
      className="mid:px-4 mid:py-10 py-20 flex-col flex items-center mid:gap-3 min-h-screen mid:mt-10 grad"
    >
      {innerWidth <= 900 && (
        <Fade direction="up">
          <section className="w-full h-[100px] mid:h-[300px] mid:mt-10 flex justify-center relative">
            <Image src={why} alt={why} />
          </section>
        </Fade>
      )}

      {innerWidth > 900 && (
        <Fade direction="up">
          <section className="w-full h-[550px] relative flex justify-center">
            <Image src={why} alt={why} />
          </section>
        </Fade>
      )}

      <section className="w-full px-20 mid:px-0 flex flex-col gap-10 h-auto mid:mt-6 mt-40">
        <Fade direction="down" cascade>
          <h1 className="text-4xl text-center mid:text-2xl font-medium text-white">
            Mengapa Memilih Mentari Edukids?
          </h1>
          <h2 className="text-white text-center text-2xl mid:px-0 mid:text-lg font-light px-32">
            Kami Menawarkan Lebih dari Sekadar Bimbingan Belajar Kami bangga
            memberikan pengalaman pembelajaran yang unggul dengan lima
            keunggulan utama:
          </h2>
        </Fade>

        <Fade cascade>
          <ul className="grid grid-cols-5 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-4 w-full">
            <li className="glass px-5 py-8 flex flex-col items-center gap-3 text-white hover:bg-teal-700 hover:bg-opacity-30">
              <Image src={f2f} alt={f2f} height={150} />
              <h1 className="text-center text-2xl">Pendekatan Individual</h1>
              <p className="text-center text-lg font-light">
                Di Mentari Edukids, kami memahami bahwa setiap anak memiliki
                kecepatan belajar yang berbeda. Kami memberikan perhatian
                individual kepada setiap anak, memungkinkan mereka untuk belajar
                dalam tempo mereka sendiri.
              </p>
            </li>

            <li className="glass px-5 py-8 flex flex-col items-center gap-3 text-white hover:bg-teal-700 hover:bg-opacity-30">
              <Image src={stimulate} alt={stimulate} height={150} />
              <h1 className="text-center text-2xl">
                Lingkungan Belajar yang Menstimulasi
              </h1>
              <p className="text-center text-lg font-light">
                Lingkungan belajar kami dirancang sesuai dengan prinsip
                Montessori, dengan peralatan dan materi yang mendukung
                eksplorasi dan pemahaman yang mendalam.
              </p>
            </li>
            <li className="glass px-5 py-8 flex flex-col items-center gap-3 text-white hover:bg-teal-700 hover:bg-opacity-30">
              <Image src={teacher} alt={teacher} height={150} />
              <h1 className="text-center text-2xl">Guru Berpengalaman</h1>
              <p className="text-center text-lg font-light">
                Guru-guru kami adalah profesional berpengalaman yang terlatih
                dalam metode Montessori. Mereka memiliki dedikasi tinggi untuk
                membantu anak-anak mencapai potensi terbaik mereka.
              </p>
            </li>
            <li className="glass px-5 py-8 flex flex-col items-center gap-3 text-white hover:bg-teal-700 hover:bg-opacity-30">
              <Image src={whole} alt={whole} height={150} />
              <h1 className="text-center text-2xl">Pembelajaran Holistik</h1>
              <p className="text-center text-lg font-light">
                Kami tidak hanya fokus pada aspek akademik, tetapi juga
                memperhatikan perkembangan sosial, emosional, dan kreatif
                anak-anak.
              </p>
            </li>
            <li className="glass px-5 py-8 flex flex-col items-center gap-3 text-white hover:bg-teal-700 hover:bg-opacity-30">
              <Image src={watching} alt={watching} height={150} />
              <h1 className="text-center text-2xl">Pemantauan Kemajuan</h1>
              <p className="text-center text-lg font-light">
                Kami secara berkala memantau perkembangan anak untuk
                menyesuaikan pembelajaran yang memungkinkan mereka
                mengeksplorasi diri untuk bertumbuh.
              </p>
            </li>
          </ul>
        </Fade>

        <div className="w-full flex justify-center">
          <button className="hover:text-teal-500 text-white rounded-xl hover:bg-white border-2 border-white py-2 text-xl w-1/2 mid:w-full">
            Hubungi Kami
          </button>
        </div>
      </section>
    </div>
  );
}

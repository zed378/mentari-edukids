import Image from "next/image";
import monte from "../../assets/monte.svg";
import { Fade, Slide } from "react-awesome-reveal";

export default function Montessori() {
  return (
    <div
      id="About"
      className="mid:px-4 mid:py-0 mid:flex-col flex items-center mid:gap-3 min-h-screen mid:mt-10"
    >
      <section className="w-1/2 mid:w-full h-auto mid:h-[300px] mid:mb-7 flex justify-center">
        <Slide direction="left" duration={500}>
          <Image src={monte} alt={monte} />
        </Slide>
      </section>

      <section className="w-1/2 mid:w-full px-20 mid:px-0 flex flex-col gap-10 h-auto mid:mt-6">
        <Slide direction="right" duration={500} cascade>
          <h1 className="mid:text-center mid:text-2xl mid:font-medium text-4xl">
            Apa itu Metode Montessori?
          </h1>
          <p className="mid:text-lg mid:font-light mid:text-center text-lg">
            Metode Montessori adalah pendekatan pembelajaran yang sangat
            dihormati di seluruh dunia. Ini memandang setiap anak sebagai
            individu yang unik dengan potensi tak terbatas. Kami percaya bahwa
            setiap anak memiliki kemampuan bawaan untuk belajar dan berkembang,
            dan tugas kami adalah memberikan lingkungan yang memungkinkan
            potensi itu berkembang dengan maksimal.
          </p>
        </Slide>
      </section>
    </div>
  );
}

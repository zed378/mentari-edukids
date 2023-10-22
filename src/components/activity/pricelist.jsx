import Image from "next/image";
import { Fade } from "react-awesome-reveal";

import bubble from "../../assets/price/bubble.webp";
import galilei from "../../assets/price/galilei.webp";
import tesla from "../../assets/price/tesla.webp";

export default function PriceList() {
  return (
    <div className="w-full md:p-0 laptop:flex laptop:items-center laptop:flex-col laptop:justify-center mb-20 ">
      <Fade direction="up" duration={1000}>
        <div className="md:w-full w-[30rem] shadow-xl px-5 py-10 glass2 rounded-xl mb-10 ">
          <h1 className="text-xl text-teal-600 text-center">
            Berapa biaya yang dibutuhkan untuk menggunakan jasa kami?
          </h1>
        </div>
      </Fade>

      <Fade direction="down" duration={1000} cascade>
        <ul className="w-full grid grid-cols-3 md:grid-cols-1 gap-3 md:px-0 px-10">
          <Image src={galilei} alt={galilei} className="md:w-full " />
          <Image src={bubble} alt={bubble} className="md:w-full " />
          <Image src={tesla} alt={tesla} className="md:w-full " />
        </ul>
      </Fade>
    </div>
  );
}

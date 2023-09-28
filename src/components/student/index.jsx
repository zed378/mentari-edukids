import Image from "next/image";
import useWindowSize from "@rooks/use-window-size";
import { Fade } from "react-awesome-reveal";
import Flickity from "react-flickity-component";

// Assets
import students from "../../assets/students.svg";
import alfalah from "../../assets/school/alfalah.png";
import alfathimiyyah from "../../assets/school/alfathimiyyah.png";
import khadijah from "../../assets/school/khadijah.png";
import kuncupbunga from "../../assets/school/kuncupbunga.png";
import littlesun from "../../assets/school/littlesun.png";
import NSA from "../../assets/school/NSA.png";
import permataschool from "../../assets/school/permataschool.png";
import putrapertiwi from "../../assets/school/putrapertiwi.png";
import radenpatah from "../../assets/school/radenpatah.png";
import sdn from "../../assets/school/sdn.png";
import sman11 from "../../assets/school/sman11.png";
import sman15 from "../../assets/school/sman15.png";
import smpn26 from "../../assets/school/smpn26.png";
import smpn53 from "../../assets/school/smpn53.png";
import styosep from "../../assets/school/styosep.png";

import "flickity/css/flickity.css";

export default function Student() {
  const { innerWidth } = useWindowSize();

  const flickityOptions = {
    initialIndex: 4,
    draggable: true,
    wrapAround: true,
    freeScroll: true,
    contain: true,
    prevNextButtons: innerWidth > 900 ? true : false,
    pageDots: innerWidth > 900 ? true : false,
    autoPlay: true,
    pauseAutoPlayOnHover: true,
  };
  return (
    <div
      id="Students"
      className="mid:px-4 mid:py-10 py-20 flex-col flex items-center mid:gap-3 min-h-screen mid:mt-10 grad w-screen"
    >
      <Fade duration={1000}>
        <Image src={students} alt={students} height={500} />
        <h1 className="text-4xl text-center mid:text-2xl font-medium mb-10 text-white uppercase my-4">
          Background murid kami
        </h1>
      </Fade>

      <Flickity
        className={`carousel w-[75%] mid:w-full mid:px-0 px-10`}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        <Image
          src={alfalah}
          alt={alfalah}
          height={innerWidth < 900 ? 200 : 400}
          className="mx-5 grayscale hover:grayscale-0"
        />
        <Image
          src={alfathimiyyah}
          alt={alfathimiyyah}
          height={innerWidth < 900 ? 200 : 400}
          className="mx-5 grayscale hover:grayscale-0"
        />
        <Image
          src={khadijah}
          alt={khadijah}
          height={innerWidth < 900 ? 200 : 400}
          className="mx-5 grayscale hover:grayscale-0"
        />
        <Image
          src={kuncupbunga}
          alt={kuncupbunga}
          height={innerWidth < 900 ? 200 : 400}
          className="mx-5 grayscale hover:grayscale-0"
        />
        <Image
          src={littlesun}
          alt={littlesun}
          height={innerWidth < 900 ? 200 : 400}
          className="mx-5 grayscale hover:grayscale-0"
        />
        <Image
          src={NSA}
          alt={NSA}
          height={innerWidth < 900 ? 200 : 400}
          className="mx-5 grayscale hover:grayscale-0"
        />
        <Image
          src={permataschool}
          alt={permataschool}
          height={innerWidth < 900 ? 200 : 400}
          className="mx-5 grayscale hover:grayscale-0"
        />
        <Image
          src={putrapertiwi}
          alt={putrapertiwi}
          height={innerWidth < 900 ? 200 : 400}
          className="mx-5 grayscale hover:grayscale-0"
        />
        <Image
          src={radenpatah}
          alt={radenpatah}
          height={innerWidth < 900 ? 200 : 400}
          className="mx-5 grayscale hover:grayscale-0"
        />
        <Image
          src={sdn}
          alt={sdn}
          height={innerWidth < 900 ? 200 : 400}
          className="mx-5 grayscale hover:grayscale-0"
        />
        <Image
          src={sman11}
          alt={sman11}
          height={innerWidth < 900 ? 200 : 400}
          className="mx-5 grayscale hover:grayscale-0"
        />
        <Image
          src={sman15}
          alt={sman15}
          height={innerWidth < 900 ? 200 : 400}
          className="mx-5 grayscale hover:grayscale-0"
        />
        <Image
          src={smpn26}
          alt={smpn26}
          height={innerWidth < 900 ? 200 : 400}
          className="mx-5 grayscale hover:grayscale-0"
        />
        <Image
          src={smpn53}
          alt={smpn53}
          height={innerWidth < 900 ? 200 : 400}
          className="mx-5 grayscale hover:grayscale-0"
        />
        <Image
          src={styosep}
          alt={sman11}
          height={innerWidth < 900 ? 200 : 400}
          className="mx-5 grayscale hover:grayscale-0"
        />
      </Flickity>
    </div>
  );
}

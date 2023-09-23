import { useState, useEffect } from "react";
import useWindowSize from "@rooks/use-window-size";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

import Drawer from "@/components/drawer";

import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const { innerWidth } = useWindowSize();

  const [drawer, setDrawer] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    location.href = "#" + id;
  }, [id]);

  return (
    <div className="w-screen px-20 py-4 flex items-center justify-between xl:bg-teal-500 mid:px-5 mid:py-0 mid:pb-10 mid:pt-5 relative">
      <div className="flex items-center gap-3 cursor-pointer">
        <Image src="next.svg" alt="logo" width={100} height={50} />
        <h1 className="text-2xl font-normal text-white">Mentari Edukids</h1>
      </div>

      {innerWidth <= 768 && (
        <RxHamburgerMenu
          color="white"
          size={20}
          onClick={() => setDrawer(true)}
        />
      )}

      {drawer && <Drawer close={() => setDrawer(false)} click={setId} />}

      <div className="flex items-center gap-1 mid:hidden">
        <Fade direction="up" cascade>
          <h1 className="text-xl font-normal text-white cursor-pointer rounded-xl hover:bg-white hover:text-teal-500 px-3 py-1">
            About
          </h1>
          <h1 className="text-xl font-normal text-white cursor-pointer rounded-xl hover:bg-white hover:text-teal-500 px-3 py-1">
            Kegiatan
          </h1>
          <h1 className="text-xl font-normal text-white cursor-pointer rounded-xl hover:bg-white hover:text-teal-500 px-3 py-1">
            Price List
          </h1>
          <h1 className="text-xl font-normal text-white cursor-pointer rounded-xl hover:bg-white hover:text-teal-500 px-3 py-1">
            Contact
          </h1>
        </Fade>
      </div>
    </div>
  );
}

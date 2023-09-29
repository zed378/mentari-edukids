import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import useWindowSize from "@rooks/use-window-size";

// component
import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import Montessori from "@/components/montessori";
import Why from "@/components/why";
import Program from "@/components/program";
import Student from "@/components/student";
import Footer from "@/components/footer";

// assets
import bg from "../assets/bg.svg";

export default function Home() {
  const { innerWidth } = useWindowSize();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <Head>
        <title>Mentari Edukids</title>
        <meta
          name="description"
          content="Bimbel Mentari Edukids dengan metode ajar montessori"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen relative">
        {innerWidth > 1280 && mounted && (
          <div className="absolute -top-[5vh] left-0 -z-10">
            <Image
              src={bg}
              alt={bg}
              className="h-auto w-screen overflow-hidden"
            />
          </div>
        )}

        {/* Navbar */}
        {mounted && <Navbar />}
        {/* End of Navbar */}

        {/* Banner */}
        {mounted && <Banner />}
        {/* End of Banner */}

        {/* Montessori Explain */}
        {/* {mounted && <Montessori />} */}
        {/* End of Montessori Explain */}

        {/* Why Us */}
        {mounted && <Why />}
        {/*End of Why Us */}

        {/* Program */}
        {mounted && <Program />}
        {/*End of Program */}

        {/* Student */}
        {mounted && <Student />}
        {/*End of Student */}

        {/* Footer */}
        {mounted && <Footer />}
        {/*End of Footer */}
      </main>
    </>
  );
}

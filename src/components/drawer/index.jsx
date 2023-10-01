import { RxCross1 } from "react-icons/rx";
import { Fade } from "react-awesome-reveal";

export default function Drawer({ close, click }) {
  return (
    <div className="absolute z-50 top-0 left-0 h-screen w-screen grad pt-20 px-8 flex flex-col gap-4 items-center">
      <RxCross1
        color="white"
        size={30}
        className="absolute right-5 top-5"
        onClick={close}
      />
      <Fade direction="right" duration={200} cascade>
        <div
          className="text-xl text-white"
          onClick={() => {
            close();
            click("");
          }}
        >
          Home
        </div>
        <div
          className="text-xl text-white"
          onClick={() => {
            close();
            click("Why");
          }}
        >
          Why Us
        </div>
        <div
          className="text-xl text-white"
          onClick={() => {
            close();
            click("Program");
          }}
        >
          Program
        </div>
        <div
          className="text-xl text-white"
          onClick={() => {
            close();
            click("Students");
          }}
        >
          Student Origin
        </div>
        {/* <div
          className="text-xl text-white"
          onClick={() => {
            close();
            click("Price");
          }}
        >
          Price List
        </div> */}
        <div
          className="text-xl text-white"
          onClick={() => {
            close();
          }}
        >
          <a
            href="https://mentariedukids.my.id/api/ask"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </Fade>
    </div>
  );
}

"use client";
import { useIsMobile } from "./context/SizeScreenContext";
import "./page.css";

export default function Home() {
  let isMobile = useIsMobile();

  return (
    <div className="z-[101] absolute inset-0 overflow-hidden">
      <div className="bg-iridescent-fluid absolute inset-0 pointer-events-none bg-contain bg-center bg-no-repeat mx-[1rem] my-[3rem]"></div>
      <div className="flex absolute inset-0 mx-3">
        <div
          className={`${
            isMobile ? "mobile" : ""
          } cursor-pointer flex flex-col tag-card p-[0.75rem] min-w-[300px] min-h-[25%] w-auto h-auto m-auto font-bold rounded-2xl border-[solid] backdrop-filter backdrop-blur-[6px] text-[4em] md:text-[6em] md:min-h-[45%]`}
        >
          <p className="text-[30%] md:text-[30%] font-['playfair-display'] italic text-center">
            Hello! I'm ...
          </p>
          <div className="txt-name flex-1 content-center italic text-white p-[.5rem] text-center justify-center tracking-[-10px] leading-[0.65]">
            <div className="flex md:justify-start md:pr-[2.25em]">
              <div className="z-[8]">K</div>
              <div className="z-[7]">A</div>
              <div className="z-[6]">C</div>
              <div className="z-[5]">H</div>
              <div className="z-[4]">A</div>
              <div className="z-[3]">P</div>
              <div className="z-[2]">A</div>
              <div className="z-[1]">T</div>
            </div>
            <div className="flex md:justify-end">
              <div className="z-[7]">B</div>
              <div className="z-[6]">U</div>
              <div className="z-[5]">A</div>
              <div className="z-[4]">K</div>
              <div className="z-[3]">H</div>
              <div className="z-[2]">A</div>
              <div className="z-[1]">W</div>
            </div>
          </div>
          <p className="text-[30%] md:text-[30%] font-['playfair-display']  text-center">
            ── Full Stack Software Developer ──
          </p>
          <div className="bg-grainy absolute inset-0 border-2 mix-blend-multiply opacity-[0.05] pointer-events-none z-[-1]"></div>
        </div>
      </div>
    </div>
  );
}

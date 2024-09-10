"use client";
import { useIsMobile } from "@/app/context/SizeScreenContext";
import "./Header.css";
import { IoMenu } from "react-icons/io5";
import { useEffect } from "react";

export function Header() {
  const menuList = [
    { name: "About Me", path: "" },
    { name: "Work Experience", path: "" },
    { name: "Skills", path: "" },
    { name: "Contact Me", path: "" },
    { name: "Download CV", path: "" },
  ];

  let isMobile = useIsMobile();

  return (
    <header
      className="splitter-fade flex w-full min-h-[80px] h-[80px] text-center"
      style={{ backdropFilter: "blur(1px)" }}
    >
      <div className="header-logo bg-logo w-[120px] h-full [background-size:85px] bg-center bg-no-repeat [transition:all_1s]"></div>
      {isMobile ? (
        <div className="flex flex-1 w-full justify-end items-center mr-5">
          <IoMenu
            size={"45px"}
            className="cursor-pointer text-[rgba(255,255,255,0.5)]"
            title="Menu"
          />
          <div
            style={{ top: "calc(45px + 1rem)" }}
            className="absolute text-left bg-primary-dark-gradient flex flex-col gap-4 px-6 py-4 rounded-lg border-[2.5px] border-[rgba(255,255,255,0.5)] font-medium"
          >
            {menuList.map((m, index) => (
              <div key={index}>{m.name}</div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex-1 flex justify-between w-full items-center mx-[5rem] my-[1.5rem] text-xl">
          {menuList.map((m, index) => (
            <span key={index} className="menu-text cursor-pointer font-medium">
              {m.name}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}

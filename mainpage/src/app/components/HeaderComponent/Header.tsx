"use client";
import "./Header.css";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

export function Header() {
  const menuList = [
    { name: "About Me", path: "" },
    { name: "Work Experience", path: "" },
    { name: "Skills", path: "" },
    { name: "Download CV", path: "" },
  ];

  return (
    <header
      className="splitter-fade flex w-full min-h-[80px] h-[80px]"
      style={{ backdropFilter: "blur(1px)" }}
    >
      <div className="header-logo bg-logo w-[150px] h-full [background-size:85px] bg-center bg-no-repeat [transition:all_1s]"></div>
      <div className="flex-1 flex gap-32 justify-center w-full items-center mx-[5rem] my-[1.5rem] text-xl">
        {menuList.map((m, index) => (
          <span
            key={index}
            className="menu-text cursor-pointer text-gray-500 font-medium"
          >
            {m.name}
          </span>
        ))}
      </div>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export const NavBar = () => {
  const TOP_OFFSET = 50;
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar fixed top-0 z-50 border-solid px-8 font-poppins text-xl lg:px-12 ${showBackground ? "bg-white" : "bg-transparent"}  ${showBackground ? "text-[#940B72]" : "text-white"} max-h-[10px] w-full `}
    >
      <div className="navbar-start font-poppins">
        <div className="dropdown">
          <div tabIndex={0} className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a href="/">
          <Image
            src={`/logo/${!showBackground ? "logo" : "logo-inv"}.png`}
            alt="logo"
            width={150}
            height={150}
            className="hidden lg:block"
          />
        </a>
      </div>
      <div className="navbar-center hidden font-poppins lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          <li>
            <a>Try it</a>
          </li>
          <li>
            <a href="#how-it-works">How it works</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end font-poppins">
        <a className="text-base">Sign In</a>
      </div>
    </div>
  );
};

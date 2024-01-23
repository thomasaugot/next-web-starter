"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", target: "home" },
    { id: 2, text: "About", target: "about" },
    { id: 3, text: "Gallery", target: "gallery" },
    { id: 4, text: "Testimonials", target: "testimonials" },
    { id: 5, text: "Contact", target: "contact" },
  ];

  return (
    <div className="bg-black flex justify-between items-center h-[20vh] w-[100vw] px-4 md:px-20 text-white fixed top-0">
      {/* Logo */}
      <Link href={"/"}>
        <h1 onClick={scrollToTop} className="w-full text-3xl font-bold text-white">
          YOUR LOGO HERE
        </h1>
      </Link>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-2 hover:bg-white rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            <ScrollLink to={item.target} spy={true} smooth={true} duration={500} offset={-50}>
              {item.text}
            </ScrollLink>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleClick} className="flex flex-col justify-center items-center md:hidden">
        <span
          className={`bg-white block transition-all duration-300 ease-out h-1 w-8 rounded-sm ${
            isOpen ? "rotate-45 translate-y-2" : "-translate-y-1"
          }`}
        ></span>
        <span
          className={`bg-white block transition-all duration-300 ease-out h-1 w-8 rounded-sm my-1 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-white block transition-all duration-300 ease-out h-1 w-8 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-2" : "translate-y-1"
          }`}
        ></span>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          isOpen
            ? "fixed mt-32 md:hidden left-0 top-0 w-[60%] h-full bg-[#000300] ease-in-out duration-500"
            : "mt-24 ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 rounded-xl hover:bg-white duration-300 hover:text-black cursor-pointer"
          >
            <ScrollLink
              to={item.target}
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              onClick={handleClick}
            >
              {item.text}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

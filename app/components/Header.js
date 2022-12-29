"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const refOne = useRef(null);
  const refTwo = useRef(null);

  // toggling mobile dropdown menu
  function handleHamburgerClick() {
    setIsOpen(!isOpen);
  }

  // unmounting mobile dropdown menu when clicked outside
  useEffect(() => {
    function hamburgerClickedOutside(event) {
      if (refOne.current && !refOne.current.contains(event.target)) {
        if (refTwo.current.contains(event.target)) {
          setIsOpen(true);
        } else {
          setIsOpen(false);
        }
      }
    }
    document.addEventListener("click", hamburgerClickedOutside, true);
    return () => {
      document.removeEventListener("click", hamburgerClickedOutside, true);
    };
  });

  function scrollToDiv(e) {
    e.preventDefault();
    document.querySelector("#find-consultation").scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="relative mt-2 flex justify-center items-center w-full">
      <header className="flex justify-between items-center gap-2 my-1 rounded-full bg-white w-5/6 h-10 z-50">
        <Link href="/" className="rounded-lg ml-2">
          <Image
            src="/images/laws-logo.png"
            alt="Logo"
            width={90}
            height={90}
          />
        </Link>
        <div className="hidden sm:flex items-center gap-4 ">
          <Link href="/services" className="rounded-lg font-medium">
            Services
          </Link>
          <Link href="/about" className="rounded-lg font-medium">
            About
          </Link>
          <button onClick={scrollToDiv} className="rounded-full border border-primary-100 mr-2 px-2 py-1 bg-white hover:text-white hover:bg-primary-100 text-primary-100 font-medium transition-all duration-300">
            Find Consultation
          </button>
        </div>
        <div className="sm:hidden">
          <button ref={refTwo} onClick={() => handleHamburgerClick()}>
            <AiOutlineMenu className="font-medium text-2xl text-primary-100 mx-2" />
          </button>
        </div>
        {isOpen && (
          <div
            ref={refOne}
            className="absolute gap-y-2 w-5/6 top-0 mt-14 px-2 bg-white rounded-lg shadow-lg transition-all duration-500 ease-in"
          >
            <div className="flex flex-col items-center justify-center">
              <Link
                href="/services"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg font-medium"
              >
                Services
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg font-medium"
              >
                About
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full border border-primary-100 px-2 py-1 mb-2 bg-white hover:text-white hover:bg-primary-100 text-primary-100 font-medium transition-all duration-300"
              >
                Find Consultation
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;

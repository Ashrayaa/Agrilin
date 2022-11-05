import React from "react";
import Image from "next/image";
import Logo from "public/logo.svg";
import Head from "next/head";
import Link from "next/link";

type Props = {};

export default function Topnav({}: Props) {
  return (
    <nav className="flex flex-col">
      {/* LOGO */}
      <div className="lg:flex lg:justify-between xl:gap-44 lg:items-center lg:mx-16 xl:mx-20 p-4 lg:p-2 xl:p-1 mb-4">
        <div className="flex justify-center items-center gap-52 md:gap-[500px] sm:gap-[420px] cursor-pointer">
          <Link href="/">
            <Image src={Logo} alt="logo" width="100" />
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-5 md:h-15 sm:h-10 lg:hidden"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        {/* LINKS AND BUTTON */}
        {/* lg:-ml-44 */}
        <div className="lg:flex lg:justify-center lg:items-center lg:gap-10 hidden">
          <ul className="lg:flex lg:justify-center lg:items-center lg:gap-10 ">
            <Link href="/about">
              <li className="text-[#283D36] font-semibold hover:text-gray-600 cursor-pointer">
                How it Works?
              </li>
            </Link>

            <Link href="/about">
              <li className="text-[#283D36] font-semibold hover:text-gray-600 cursor-pointer">
                Why Agrilin?
              </li>
            </Link>

            <Link href="/contact">
              <li className="text-[#283D36] font-semibold hover:text-gray-600 cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
          
          <div className="flex gap-4 ">
            <button className="inline-flex cursor-pointer items-center border border-[#D9D9D9] px-6 py-2 text-sm font-medium rounded-[5px] font-poppins text-[#283D36] hover:bg-gray-700 hover:text-white">
              SIGN IN
            </button>

            <Link href="/register">
              <button className="inline-flex cursor-pointer items-center border border-transparent bg-[#00A86B] px-6 py-2 text-sm font-medium rounded-[5px] font-poppins text-white hover:bg-gray-700">
                REGISTER
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="-mt-4 h-0.5 bg-[#E7E7E7] lg:mx-12 lg:mt-2"></div>
    </nav>
  );
}

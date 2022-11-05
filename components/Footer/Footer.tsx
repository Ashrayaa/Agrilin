import React from "react";
import Image from "next/image";
import Logo from "public/logowhite.svg";
import LinkedIn from "public/linkedin.svg";
import Twitter from "public/twitter.svg";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="mt-28 sm:mt-[100px] xl:mt-0">
      {/* ----------------------------------------------------------------------------------------------------- */}
      <div className="mx-4 h-0.5 bg-[#86BF02] lg:mx-10"></div>
      {/* ----------------------------------------------------------------------------------------------------- */}

      {/* Bottom Part */}
      <div className="">
        <ul className="flex flex-col justify-center items-center text-[8px] font-light gap-2 px-10 py-4 lg:flex-row sm:text-sm lg:text-sm md:ml-16 lg:ml-8 lg:justify-between sm:mx-6 lg:px-14">
          <li className="font-medium text-[#052825]">
            © 2022 Agrilin, a{" "}
            <span className="text-[#669006] font-medium">Growcoms</span>{" "}
            company. All rights reserved.
          </li>
          <li>Various trademarks held by their respective owners.</li>
        </ul>
      </div>
    </div>
  );
}

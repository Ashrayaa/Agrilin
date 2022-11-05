import React from "react";
import Image from "next/image";
import Display from "public/displayotp.svg";

type Props = {};

export default function Createaccount({}: Props) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 px-3 lg:px-6 2xl:gap-32 ">
      {/* Left Side */}
      <div className="flex flex-col gap-4 lg:gap-6 sm:gap-10 sm:mt-16 lg:p-6 lg:mt-12 mt-6 2xl:ml-12">
        <h1 className="text-[#2A4039] font-medium text-2xl">Enter OTP</h1>
        <p className="text-[#052825] font-light text-xs">
          OTP sent to your phone{" "}
          <span className="text-[#669006] font-medium">+44 330 808 1871</span>
        </p>

        <div className="flex gap-6 lg:gap-12 xl:gap-6 sm:gap-10">
            <input type="text" className="border rounded-lg w-[22%] lg:w-[15%] sm:w-[13%] xl:w-[10%] sm:p-6 sm:px-12  lg:py-5 p-3 px-4"/>
            <input type="text" className="border rounded-lg w-[22%] lg:w-[15%] sm:w-[13%] xl:w-[10%] sm:p-6 sm:px-12  lg:py-5 p-3 px-4"/>
            <input type="text" className="border rounded-lg w-[22%] lg:w-[15%] sm:w-[13%] xl:w-[10%] sm:p-6 sm:px-12  lg:py-5 p-3 px-4"/>
            <input type="text" className="border rounded-lg w-[22%] lg:w-[15%]  sm:w-[13%] xl:w-[10%] sm:p-6 sm:px-12 lg:py-5 p-3 px-4"/>
        </div>

        <div className="flex gap-2 text-xs items-end xl:items-center xl:justify-center justify-end rounded-lg lg:rounded-3xl">
          <p className="text-[#2A4039]">Didn&apos;t get the code?</p>
          <p className="text-[#E84A4D] font-medium">30s</p>
        </div>

        <button
          className="inline-flex sm:py-4 cursor-pointer items-center justify-center lg:rounded-3xl border border-transparent bg-[#53B175] px-6 py-2 text-sm xl:text-lg font-medium rounded-lg font-poppins text-white hover:bg-gray-700"
        >
          Confirm OTP
        </button>

        <div className="flex gap-2 text-xs items-center justify-center rounded-lg ">
          <p className="text-[#669006] font-medium">Having trouble?</p>
          <p className="text-[#2A4039]">Call us on +91 9037766112</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden sm:flex sm:mt-12">
        <Image src={Display} alt="logo" height="700" />
      </div>
    </div>
  );
}

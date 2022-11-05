import React from "react";
import Image from "next/image";
import Display from "public/displayregister.svg";
import Link from "next/link";

type Props = {};

export default function Createaccount({}: Props) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-3 lg:px-6 2xl:gap-32 ">
      {/* Left Side */}
      <div className="flex flex-col gap-2 lg:p-6 lg:mt-12 mt-6 2xl:ml-12">
        <h1 className="text-[#2A4039] font-medium text-2xl">
          Create Agrilin Account
        </h1>
        <p className="text-[#052825] font-light text-xs">
          to continue to Agri-Tech Platform
        </p>
        
        <p className="text-[#2A4039] mt-6 text-sm">Select Country</p>
        <div className="flex ">
        <select
          id="countries"
          className="text-[#2A4039] rounded-xl lg:rounded-3xl border px-6 border-gray-300 text-sm focus:ring-green-500 focus:border-green-500 block w-full p-3"
        >
          <option selected> </option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
          <option value="DE">India</option>
        </select>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 -ml-10 flex items-center justify-center mt-2"
        >
          <path
            fill-rule="evenodd"
            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
            clip-rule="evenodd"
          />
        </svg> */}
        </div>
        

        <p className="text-[#2A4039] mt-6 text-sm">Enter Mobile Number</p>
        <input type="text" className="border p-3 rounded-xl lg:rounded-3xl" />

        <p className="text-[#2A4039] mt-6 text-sm">Name</p>
        <input
          type="text"
          className="border p-3 px-6 rounded-xl lg:rounded-3xl"
          placeholder="Enter your full-name"
        />

        <p className="text-[#2A4039] mt-6 text-sm">Customer Type</p>
        <input type="text" className="border p-3 rounded-xl lg:rounded-3xl" />

        <div className="form-check flex py-2 gap-3 lg:py-4">
          <input
            className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#669006] checked:border-[#669006] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label inline-block text-[14px] text-[#052825] ">
            I agree to the terms and conditions as set out by the user agreement
          </label>
        </div>

        <button className="inline-flex cursor-pointer items-center justify-center lg:rounded-3xl border border-transparent bg-[#283D36] px-6 py-2 text-sm font-medium rounded-lg font-poppins text-white hover:bg-gray-700">
          Create Account
        </button>

        <div className="flex gap-2 text-xs items-center justify-center rounded-lg ">
          <p className=" text-[#2A4039] font-medium">Already have an account</p>
          <Link href="/index">
            <p className="text-[#669006]">Login Here</p>
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden sm:flex sm:mt-12">
        <Image src={Display} alt="logo" height="700" />
      </div>
    </div>
  );
}

import React from 'react'
import Image from "next/image";
import Display from "public/displayregister.svg";

type Props = {}

export default function Createaccount({}: Props) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-3 lg:px-6 2xl:gap-32 ">
    {/* Left Side */}
    <div className="flex flex-col gap-3 lg:p-6 lg:mt-12 mt-6 2xl:ml-12">
      <h1 className="text-[#2A4039] font-medium text-2xl">Sign in</h1>
      <p className="text-[#052825] font-light text-xs">
        to continue to Agri-Tech Platform
      </p>

      <div className="flex gap-2 text-xs border p-3 items-center justify-center rounded-lg lg:rounded-3xl">
        <p className="text-[#2A4039]">Don&apos;t have an account? </p>
        <p className="text-[#669006] font-medium">Create an account</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="font-light text-xs mt-4">Or sign in with</p>
      </div>

      <p className="text-[#2A4039] mt-6 text-sm">Enter Mobile Number</p>
      <input type="text" className="border p-3 rounded-xl lg:rounded-3xl" />

      <div className="hidden form-check sm:flex gap-3 lg:py-4">
        <input
          className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label inline-block text-[14px] text-[#052825] ">
          I agree to the terms and conditions as set out by the user agreement
        </label>
      </div>

      <button className="inline-flex cursor-pointer items-center justify-center lg:rounded-3xl border border-transparent bg-[#283D36] px-6 py-2 text-sm font-medium rounded-lg font-poppins text-white hover:bg-gray-700">
        Request OTP
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
  )
}
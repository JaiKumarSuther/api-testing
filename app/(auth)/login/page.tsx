"use client";
import { ArrowLeft, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col gap-6 bg-white p-0 md:p-4 sm:p-8 rounded-lg w-full max-w-[510px] mx-auto">
      <div className="flex flex-col gap-2">
        <ArrowLeft size={24} className="cursor-pointer" />
        <h1 className="text-[#212121] font-bold my-4 text-xl">Verify your phone number</h1>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex w-full gap-1 flex-col">
          <label htmlFor="" className="text-sm text-[#101A28] font-semibold">
            Patient Name <span className="text-[#B42318]">*</span>
          </label>
          <div className="flex gap-2">
            <div className="flex gap-1 items-center border border-gray-300 rounded-md px-4 bg-white cursor-pointer">
              <Image
                src={"/assets/indian-flag.svg"}
                alt=""
                width={20}
                height={12}
              />
              <span className="text-sm">+91</span>
              <div className="pr-2">
                <ChevronDown size={16} color="#98A3B3" />
              </div>
            </div>
            <input
              type="text"
              className="border-1 rounded-md w-full p-[6px] outline-none border-[#E4E7EC] bg-white"
              placeholder="E.g. xxx xxxxxxxx"
            />
          </div>
        </div>
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="hidden"
          />
          <span
            className={`w-[16px] h-[16px] mr-2 border-1 rounded-sm flex items-center justify-center ${
              isChecked ? "bg-[#0B7285] border-none" : "border-gray-400"
            }`}
          >
            {isChecked && (
              <Image src={"/assets/tick.svg"} alt="" width={12} height={8} />
            )}
          </span>
          <span className="text-sm text-gray-900">Remember this device</span>
        </label>
      </div>

      <button className="flex w-full mt-6 sm:mt-20 justify-center items-center text-[#F4F6F9] rounded-full p-2 gap-1 cursor-pointer bg-[#0B7285] border-1 border-[#E4E8EC]">
        Send OTP
      </button>
    </div>
  );
}

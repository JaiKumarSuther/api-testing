'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HeroSection() {
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();
  const testList = [
    { code: "H1ABC", name: "Diabetes Test" },
    { code: "H1ACB", name: "Blood Count Test" },
    { code: "H1AEC", name: "Dengue Virus Test" },
  ];

  return (
    <div className="flex justify-center items-center bg-[#EEF8F9] w-full px-4 pt-10 md:pt-20 pb-10 md:pb-25 md:px-[100px]  text-[#211028]">
      <div className="flex flex-col justify-between items-center w-full max-w-2xl gap-4">
        <h1 className="text-2xl md:text-[32px] font-bold text-center md:text-left">
          Start your journey with scan2lab
        </h1>

        {/* Search Box */}
        <div className="w-full relative">
          <div className="flex gap-2 items-center bg-white w-full border border-[#EDEDED] px-4 md:px-6 rounded-full h-[48px]">
            <Image
              src={"/assets/carbon_search.svg"}
              alt="Search"
              width={20}
              height={20}
            />
            <input
              className="w-full outline-none text-sm"
              placeholder="Search for tests"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>

          {/* Dropdown List */}
          {isFocused && (
            <div
              className="absolute left-0 top-12 w-full bg-white rounded-md z-10"
              style={{ boxShadow: "0px 0px 10px 2px #4A484F1F" }}
            >
              {testList.map((test, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center w-full border-b border-[#EEEEEE]"
                >
                  <div className="flex justify-between items-center w-full p-4">
                    <div className="text-[#101A28]">
                      <h2 className="text-sm">{test.code}</h2>
                      <p className="text-xs">{test.name}</p>
                    </div>
                    <button className="w-[93px] h-[35px] text-sm border border-[#E4E7EC] text-[#344154] rounded-full cursor-pointer"
                    onClick={() => router.push('/home/test')}>
                      Add Test
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <p className="text-sm font-medium text-[#667285]">OR</p>

        {/* Upload Box */}
        <div className="flex flex-col gap-2 items-center justify-center min-h-[188px] border border-[#eee] rounded-lg w-full bg-white p-4 text-center">
          <Image src={"/assets/documents.svg"} alt="Document" width={85} height={80} />
          <div className="flex flex-wrap gap-2 justify-center text-[#0B7285]">
            <button className="font-semibold cursor-pointer">
              Upload Prescription
            </button>
            <p className="text-[#535862]">or</p>
            <button className="font-semibold cursor-pointer">
              Take a photo
            </button>
          </div>
          <p className="text-sm text-[#667285]">PDF, CSV, JPG (max. 1.5mb)</p>
        </div>
      </div>
    </div>
  );
}
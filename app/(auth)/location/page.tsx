"use client";
import { ChevronDown, MapPin } from "lucide-react";
export default function Location() {
  return (
    <div>
      <div className="flex flex-col gap-1 md:px-4">
      <div className="flex justify-between items-center gap-2">
        <h1 className="text-[#212121] font-bold text-xl md:text-xl">
          Add Location
        </h1>
        <button className="flex justify-center items-center px-3 rounded-full p-2 gap-1 cursor-pointer bg-white border-1 border-[#E4E8EC]">
          <MapPin size={12}/>
          <span className="text-xs">Fetch Location</span>
        </button>

      </div>
        <div className="flex w-full gap-1 flex-col">
          <label
            htmlFor="patient-name"
            className="text-sm text-[#101A28] font-semibold"
          >
            City
          </label>
          <div
            className="border-1 rounded-md w-full px-3 pr-2 py-[5px] flex justify-between  gap-2 border-[#E4E7EC]
            bg-white"
          >
            <input
              id="patient-name"
              type="text"
              className=" outline-none "
              placeholder="Hyderabad"
            />
            <ChevronDown className="cursor-pointer" color="#98A3B3" size={20} />
          </div>
        </div>
        <div className="flex w-full gap-1 flex-col">
          <label htmlFor="" className="text-sm text-[#101A28] font-semibold">
            House No
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              className="border-1 rounded-md w-full px-3 py-[5px] outline-none border-[#E4E7EC]
            bg-white"
              placeholder="123"
            />
          </div>
        </div>
        <div className="flex w-full gap-1 flex-col">
          <label htmlFor="" className="text-sm text-[#101A28] font-semibold">
            Street No
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              className="border-1 rounded-md w-full px-3 py-[5px] outline-none border-[#E4E7EC]
            bg-white"
              placeholder="2715 Ash Dr. San Jose"
            />
          </div>
        </div>
        <div className="flex w-full gap-1 flex-col">
          <label htmlFor="" className="text-sm text-[#101A28] font-semibold">
            Zip Code
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              className="border-1 rounded-md w-full px-3 py-[5px] outline-none border-[#E4E7EC]
            bg-white"
              placeholder="22423"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex w-full gap-1 flex-col">
            <label htmlFor="" className="text-sm text-[#101A28] font-semibold">
              City
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                className="border-1 rounded-md w-full px-3 py-[5px] outline-none border-[#E4E7EC]
            bg-white"
                placeholder="Atlanta"
              />
            </div>
          </div>
          <div className="flex w-full gap-1 flex-col">
            <label htmlFor="" className="text-sm text-[#101A28] font-semibold">
              State
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                className="border-1 rounded-md w-full px-3 py-[5px] outline-none border-[#E4E7EC]
            bg-white"
                placeholder="Kansas"
              />
            </div>
          </div>
        </div>
        <button className="flex w-full mt-5 justify-center items-center text-[#F4F6F9] rounded-full p-2 gap-1 cursor-pointer bg-[#0B7285] border-1 border-[#E4E8EC]">
          Add Location
        </button>
      </div>
    </div>
  );
}

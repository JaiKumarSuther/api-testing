"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function AvailableLab() {
  const timeSlots = [
    { start: "12:00 PM", end: "12:30 PM" },
    { start: "12:30 PM", end: "01:00 PM" },
    { start: "01:30 PM", end: "02:00 PM" },
    { start: "01:30 PM", end: "02:00 PM" },
    { start: "02:30 PM", end: "03:00 PM" },
    { start: "02:30 PM", end: "03:00 PM" },
  ];

  return (
    <div className="flex justify-center items-center px-4 py-10 text-[#211028]">
      <div className="flex flex-col gap-8 w-full max-w-lg border-1 bg-[#EEF8F9] rounded-xl border-[#EDEDED] px-6 sm:px-[35px] py-[30px]">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-1 text-sm">
            <Image src={"/assets/base.svg"} alt="" width={20} height={20} />
            <ChevronRight size={16} color="#A4A7AE" />
            <p className="font-semibold text-[#717680]">Upload Tests</p>
            <ChevronRight size={16} color="#A4A7AE" />
            <p className="font-semibold text-[#717680]">...</p>
            <ChevronRight size={16} color="#A4A7AE" />
            <p className="font-semibold text-[#0B7285]">Appointments</p>
          </div>
          <h1 className="text-[#211028] text-2xl font-semibold">
            Book Appointment
          </h1>
        </div>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex w-full flex-col">
              <label className="text-sm text-[#101A28] font-semibold">
                Patient Name <span className="text-[#B42318]">*</span>
              </label>
              <input
                type="text"
                className="border-1 rounded-md p-2 outline-none border-[#E4E7EC] bg-white"
                placeholder="Enter name"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="text-sm text-[#101A28] font-semibold">
                Date <span className="text-[#B42318]">*</span>
              </label>
              <input
                type="date"
                className="border-1 rounded-md p-2 outline-none border-[#E4E7EC] bg-white"
              />
            </div>
          </div>

          <div>
            <p className="text-sm text-[#101A28] font-semibold">
              Select a time slot <span className="text-[#B42318]">*</span>
            </p>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 pt-2 w-full md:w-[85%] max-w-md">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  type="button"
                  className="cursor-pointer rounded-full bg-white px-3 py-2 text-sm text-[#1C1C1C] border-1 border-[#E3E3E3]"
                >
                  {slot.start} to {slot.end}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 text-[#F4F6F9] rounded-full p-3 text-sm font-semibold cursor-pointer bg-[#0B7285] border-1 border-[#E4E8EC]"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

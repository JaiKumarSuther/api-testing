"use client";
import { X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-accent border-b border-[#F5F5F5]">
      {/* Main Container */}
      <div className="flex items-center justify-between px-4 md:px-10 h-[64px]">
        {/* Logo */}
        <Image
          src={"/assets/logo.svg"}
          alt="Logo"
          width={47}
          height={38}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 text-[#677385]">
          <p
            className={`cursor-pointer ${
              (pathname === "/home" || pathname === "/") ? "font-semibold text-[#222D30]" : ""
            }`}
            onClick={() => router.push("/home")}
          >
            Home
          </p>
          <p
            className={`cursor-pointer ${
              pathname === "/my-appointments"
                ? "font-semibold text-[#222D30]"
                : ""
            }`}
            onClick={() => router.push("/my-appointments")}
          >
            My Appointments
          </p>
          <p className="cursor-pointer">About Us</p>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex gap-4 items-center">
          {/* Search Bar */}
          <div className="flex gap-2 items-center bg-[#EEF8F9] w-[280px] xl:w-[350px] border px-4 xl:px-6 rounded-full h-[40px] border-[#EDEDED]">
            <Image
              src={"/assets/carbon_search.svg"}
              alt="Search"
              width={20}
              height={20}
            />
            <input
              className="w-full outline-none text-sm"
              placeholder="Search for tests"
            />
          </div>

          {/* Location Picker */}
          <div className="flex justify-center gap-1 items-center w-[150px] xl:w-[176px] border rounded-full h-[40px] border-[#EDEDED] cursor-pointer">
            <Image src={"/assets/location.svg"} alt="" width={16} height={16} />
            <p className="text-[#211028] text-sm">Select Location</p>
            <Image src={"/assets/expand.svg"} alt="" width={16} height={16} />
          </div>

          {/* Notification */}
          <Image
            src={"/assets/notification.svg"}
            alt="Notification"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center transition-transform duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X
              size={28}
              className="text-[#211028] transition-all duration-300 transform scale-100 opacity-100"
            />
          ) : (
            <Image
              src="/assets/three-lines.svg"
              alt="Menu"
              width={28}
              height={28}
              className="transition-all duration-300 opacity-100"
            />
          )}
        </button>
      </div>

      {/* Mobile Dropdown with Animation */}
      <div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
          menuOpen
            ? "max-h-[500px] opacity-100 px-4 pb-4"
            : "max-h-0 opacity-0 px-4 pb-0"
        )}
      >
        <div className="flex flex-col gap-3 text-[#677385] bg-accent">
          <p
            className={`cursor-pointer ${
              pathname === "/home" ? "font-semibold text-[#222D30]" : ""
            }`}
            onClick={() => {
              router.push("/home");
              setMenuOpen(false);
            }}
          >
            Home
          </p>
          <p
            className={`cursor-pointer ${
              pathname === "/my-appointments"
                ? "font-semibold text-[#222D30]"
                : ""
            }`}
            onClick={() => {
              router.push("/my-appointments");
              setMenuOpen(false);
            }}
          >
            My Appointments
          </p>
          <p className="cursor-pointer">About Us</p>

          {/* Mobile Search & Location */}
          <div className="mt-4 flex flex-col gap-3">
            <div className="flex gap-2 items-center bg-[#EEF8F9] w-full border px-4 rounded-full h-[40px] border-[#EDEDED]">
              <Image
                src={"/assets/carbon_search.svg"}
                alt="Search"
                width={20}
                height={20}
              />
              <input
                className="w-full outline-none text-sm"
                placeholder="Search for tests"
              />
            </div>

            <div className="flex justify-between gap-2 items-center w-full border rounded-full h-[40px] border-[#EDEDED] cursor-pointer px-4">
              <Image
                src={"/assets/location.svg"}
                alt="Location"
                width={16}
                height={16}
              />
              <p className="text-[#211028] text-sm flex-grow text-center">
                Select Location
              </p>
              <Image src={"/assets/expand.svg"} alt="" width={16} height={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
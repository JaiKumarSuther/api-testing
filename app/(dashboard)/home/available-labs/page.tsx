"use client";
import Reviews from "@/components/Reviews";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function AvailableLab() {
  const labLocations = [
    {
      name: "Chughtai Lab",
      rating: 4.8,
      reviews: 142,
      distance: "1.2 miles",
      address: "Ali Medical Complex, Nishtar Road, Hyderabad",
      price: {
        original: 399,
        discounted: 299,
      },
      currency: "INR",
    },
    {
      name: "Chughtai Lab",
      rating: 4.8,
      reviews: 142,
      distance: "1.4 miles",
      address: "Ali Medical Complex, Nishtar Road, Hyderabad",
      price: {
        original: 399,
        discounted: 299,
      },
      currency: "INR",
    },
    {
      name: "Chughtai Lab",
      rating: 4.8,
      reviews: 142,
      distance: "2.1 miles",
      address: "Ali Medical Complex, Nishtar Road, Hyderabad",
      price: {
        original: 399,
        discounted: 299,
      },
      currency: "INR",
    },
  ];

  const [showReviews, setShowReviews] = useState(true);

  return (
    <div className="flex justify-center items-start p-4 sm:p-8 w-full">
      <div className="flex flex-col gap-4 w-full max-w-3xl bg-[#EEF8F9] rounded-xl border border-[#EDEDED] p-6 sm:p-8">
        {/* Breadcrumb */}
        <div className="flex items-center flex-wrap gap-1 text-sm font-semibold text-[#717680]">
          <Image src="/assets/base.svg" alt="" width={20} height={20} />
          <ChevronRight size={16} />
          <p>Upload Tests</p>
          <ChevronRight size={16} />
          <p>...</p>
          <ChevronRight size={16} />
          <p className="text-[#0B7285]">Available Labs</p>
        </div>

        <h1 className="text-2xl font-semibold text-[#211028]">Available Labs</h1>

        {/* Sort Buttons */}
        <div className="flex flex-wrap gap-2">
          <button className="bg-white cursor-pointer border border-[#EDEDED] py-2 text-sm rounded-full px-4">
            Best Rated
          </button>
          <button className="flex items-center gap-1 cursor-pointer bg-white border border-[#EDEDED] py-2 text-sm rounded-full px-4">
            <span>Highest to lowest</span>
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Lab Cards */}
        <div className="flex flex-col gap-3">
          {labLocations.map((data, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 border border-[#EEEEEE] bg-white p-4 rounded-lg text-sm w-full"
            >
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold">{data.name}</h1>
                  <div className="flex items-center gap-2">
                    <p className="text-[#C95C5C] line-through">
                      INR {data.price.original}
                    </p>
                    <p className="text-base text-[#121212]">
                      INR {data.price.discounted}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-[#98A3B3]">
                  <div
                    className="flex gap-1 cursor-pointer"
                    onClick={() => setShowReviews(true)}
                  >
                    <h3>{data.rating}</h3>
                    <Image
                      src="/assets/star.svg"
                      alt=""
                      width={14}
                      height={14}
                    />
                    <p>({data.reviews})</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#98A3B3] rounded-full"></div>
                    <p>{data.distance}</p>
                  </div>
                </div>

                <p className="text-[#98A3B3] text-xs">{data.address}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <button className="flex-1 bg-white border border-[#EDEDED] py-2 text-sm rounded-full">
                  Visit Lab Center
                </button>
                <button className="flex-1 bg-[#0B7285] text-white border border-[#EDEDED] py-2 text-sm rounded-full">
                  Book Home Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Modal */}
      {showReviews && <Reviews onClose={() => setShowReviews(false)} />}
    </div>
  );
}

"use client";
import { Calendar1, Clock, Star, X } from "lucide-react";
import { useState } from "react";

export default function GiveFeedback({ onClose }: any) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="fixed inset-0 bg-[#000000b2] bg-opacity-50 flex justify-center items-center z-10 px-4">
      <div className="relative w-full max-w-lg bg-white rounded-xl py-6 px-6 sm:px-10 overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#211028]"
        >
          <X className="cursor-pointer" />
        </button>

        {/* Header */}
        <div className="flex flex-col gap-1 mb-4">
          <h1 className="text-[#211028] text-lg sm:text-xl font-semibold text-center sm:text-left">
            Reviews of Chughtai Lab
          </h1>
          <p className="text-sm text-center sm:text-left">
            Thanks for taking the time to tell us your thoughts, it means a lot
            to us.
          </p>
        </div>

        {/* Visit Info */}
        <div className="flex flex-col p-4 gap-2 rounded-lg text-gray-500 bg-[#EEF8F9] text-sm mt-1">
          <div className="flex flex-col gap-1 text-black">
            <h1 className="font-semibold">Diabetes Test Visit</h1>
            <p>Ali Medical Complex, Nishtar Road, Hyderabad</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex gap-1 items-center">
              <Clock size={16} color="black" />
              <p className="text-[#211028]">5:45 PM</p>
            </div>
            <div className="flex gap-1 items-center">
              <Calendar1 size={16} color="black" />
              <p className="text-[#211028]">03 Mar 2025</p>
            </div>
          </div>
        </div>

        {/* Rating Section */}
        <div className="mt-4">
          <h2 className="text-[#101A28] font-semibold text-sm mb-1">
            Choose rating
          </h2>
          <div className="flex mt-1">
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <span
                  key={index}
                  className="text-2xl cursor-pointer"
                >
                  <Star
                    size={25}
                    color="none"
                    fill={
                      ratingValue <= (hover || rating)
                        ? "#ECBC26"
                        : "#E4E4E7"
                    }
                    onClick={() => setRating(ratingValue)}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                  />
                </span>
              );
            })}
          </div>
        </div>

        {/* Comments */}
        <div className="mt-4">
          <h2 className="text-[#101A28] font-semibold text-sm mb-1">Comments</h2>
          <textarea
            className="w-full border border-[#E4E7EC] text-sm resize-none rounded-md h-[118px] outline-none p-3"
            placeholder="Add any further details required..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className="w-full rounded-full justify-center items-center mt-4 text-white font-medium p-3 bg-[#0B7285] hover:bg-[#095c6d] transition-all">
          Submit Review
        </button>
      </div>
    </div>
  );
}

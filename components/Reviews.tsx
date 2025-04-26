'use client';
import Image from "next/image";
import { X } from "lucide-react";

export default function Reviews({ onClose }: any) {
  const labReviews = [
    {
      title: "Staff was very professional",
      rating: 5.0,
      date: "03 Mar 2025",
      description:
        "Highly recommended client, and I hope to collaborate again.",
    },
    {
      title: "Good experience",
      rating: 4.0,
      date: "03 Mar 2025",
      description:
        "Clear instructions, fast communication, and smooth collaboration throughout the project. Would definitely work again if the opportunity comes up.",
    },
    {
      title: "Clean environment!!",
      rating: 4.0,
      date: "03 Mar 2025",
      description:
        "Highly recommended client, and I hope to collaborate again.",
    },
  ];

  return (
    <div className="fixed inset-0 bg-[#000000b2] bg-opacity-50 flex justify-center items-center z-50 px-4">
      <div className="bg-white rounded-xl py-8 px-6 sm:px-12 w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#211028]"
        >
          <X className="cursor-pointer" />
        </button>
        <h1 className="text-[#211028] text-xl font-semibold mb-4">
          Reviews of Chughtai Lab
        </h1>
        <div className="flex flex-col gap-4 max-h-[75vh] overflow-y-auto pr-2">
          {labReviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#EEF8F9] p-4 rounded-md text-sm text-[#211028]"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{review.title}</h3>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <p>{review.rating.toFixed(1)}</p>
                  <Image
                    src="/assets/star.svg"
                    alt="Star"
                    width={14}
                    height={14}
                  />
                </div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <p className="text-xs">{review.date}</p>
              </div>
              <p className="mt-2">{review.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

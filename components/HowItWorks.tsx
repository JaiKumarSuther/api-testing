import Image from "next/image";

export default function HowItWorks() {
  return (
    <div className="flex justify-center items-center py-10 px-4 md:px-8 lg:px-16 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 max-w-6xl w-full">
        {/* Text Box */}
        <div className="flex flex-col gap-4 rounded-2xl p-6 border border-[#F0F4F9] w-full md:max-w-md">
          <h1 className="text-2xl md:text-3xl font-semibold">How it works?</h1>
          <div className="flex flex-col gap-5">
            {[
              "Add prescription, or search tests you need to take.",
              "Select a lab nearby your location and schedule a convenient appointment.",
              "Get a Home appointment or Visit lab.",
              "Review your experience.",
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <Image
                  src={"/assets/indication.svg"}
                  alt=""
                  width={20}
                  height={20}
                />
                <p className="text-sm text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-[550px] flex justify-center">
          <Image
            src={"/images/machines.png"}
            alt="Lab Machines"
            width={550}
            height={350}
            className="object-contain w-full h-auto max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

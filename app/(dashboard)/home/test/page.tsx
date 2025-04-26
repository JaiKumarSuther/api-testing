import Image from "next/image";

export default function Test() {
  return (
    <div className="flex justify-center items-center min-h-screen px-3">
      <div className="flex flex-col gap-5 w-full max-w-[540px] bg-[#EEF8F9] rounded-xl border border-[#EDEDED] px-4 md:px-8 py-6 md:py-10">
        <h1 className="text-3xl font-semibold text-[#211028]">Lab Tests</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 border w-full border-[#eee] p-3 bg-white rounded-lg">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="flex justify-center items-center bg-[#CFE8F1] rounded-md w-8 h-8">
                  <Image
                    src={"/assets/tabler.svg"}
                    alt="tabler icon"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <h2 className="text-sm font-semibold">H1ABC</h2>
                  <p className="text-[#98A3B3] text-xs">Diabetes Test</p>
                </div>
              </div>
              <div className="w-5 h-5">
                <Image src={"/assets/dots.svg"} alt="dots" width={20} height={20} />
              </div>
            </div>
            <p className="bg-[#EEF9FB] p-4 rounded-lg text-xs text-[#121212]">
              Keep yourself hydrated and visit empty stomach for this test.
            </p>
          </div>
          <div className="flex justify-between bg-white border-[#eee] p-3 border rounded-xl">
            <div className="flex gap-2">
              <div className="flex justify-center items-center bg-[#EFD4D6] rounded-md w-8 h-8">
                <Image
                  src={"/assets/droplet.svg"}
                  alt="droplet icon"
                  width={16}
                  height={16}
                />
              </div>
              <div className="flex flex-col justify-between">
                <h2 className="text-sm font-semibold">H1ACB</h2>
                <p className="text-[#98A3B3] text-xs">Blood Count Test</p>
              </div>
            </div>
            <div className="w-5 h-5">
              <Image src={"/assets/dots.svg"} alt="dots" width={20} height={20} />
            </div>
          </div>
          <button className="flex justify-center items-center rounded-xl p-3 gap-2 cursor-pointer bg-white border border-[#E4E8EC]">
            <Image src={"/assets/plus.svg"} alt="plus icon" width={16} height={16} />
            <p>Add another prescription</p>
          </button>
        </div>
        <button className="flex justify-center items-center text-[#F4F6F9] rounded-xl p-3 gap-2 cursor-pointer bg-[#0B7285] border border-[#E4E8EC]">
          <p>View Labs</p>
          <Image src={"/assets/arrow-right.svg"} alt="arrow right" width={20} height={20} />
        </button>
      </div>
    </div>
  );
}

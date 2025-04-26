import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-[#f0f2f6]">
      <div className="flex flex-col p-8 gap-6 rounded-lg w-full max-w-[510px] bg-white shadow-md">
        <div className="flex justify-center">
          <Image src={"/assets/logo.svg"} alt="" width={68} height={55} />
        </div>

        {children}
      </div>
    </div>
  );
}

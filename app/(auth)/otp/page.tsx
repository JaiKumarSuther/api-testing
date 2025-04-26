"use client";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function OTP() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState(12);
  const [canResend, setCanResend] = useState(false);
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputsRef.current[index + 1]?.focus();
      }

      // Clear error when user types
      setError(false);
    }
  };

  useEffect(() => {
    if (timer > 0) {
      const countDown = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearTimeout(countDown);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length < 6 || !/^\d{6}$/.test(enteredOtp)) {
      setError(true);
    } else {
      setError(false);
      console.log("OTP submitted:", enteredOtp);
      // Call API or next step
    }
  };

  const handleResend = () => {
    setOtp(['', '', '', '', '', '']);
    setError(false);
    setTimer(12);
    setCanResend(false);
    console.log("OTP resent");
    // Trigger resend API here
  };

  return (
    <div className="flex flex-col gap-6 rounded-lg bg-white p-4">
      <div className="flex flex-col gap-2">
        <ArrowLeft size={24} className="cursor-pointer" />
        <h1 className="text-[#212121] font-bold my-4 text-xl">
          Verify your phone number
        </h1>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#101A28] font-semibold">
          Enter OTP
        </label>
        <div className="flex flex-col items-center">
          <div className="flex space-x-2 w-full justify-between">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => {
                  if (el) inputsRef.current[index] = el;
                }}
                className={`w-14 h-14 text-center text-lg border rounded-md focus:outline-none focus:ring-2 ${
                  error
                    ? "border-red-500 ring-red-300"
                    : "border-gray-300 focus:ring-teal-500"
                }`}
              />
            ))}
          </div>

          {error && (
            <p className="mt-2 text-sm text-red-500">
              OTP is invalid. Please check and try again.
            </p>
          )}
        </div>


        <div className="text-center text-sm text-[#727C88] font-medium mt-2">
          {canResend ? (
            <button onClick={handleResend} className="text-[#0B7285] font-semibold cursor-pointer">
            Resend OTP
          </button>
          ) : (
            <p className="text-center text-sm text-[#727C88] font-medium mt-2">
              Resend OTP in {timer}
            </p>
          )}
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="flex w-full mt-5 justify-center items-center text-[#F4F6F9] rounded-full p-2 gap-1 cursor-pointer bg-[#0B7285] border border-[#E4E8EC]"
      >
        Send OTP
      </button>
    </div>
  );
}

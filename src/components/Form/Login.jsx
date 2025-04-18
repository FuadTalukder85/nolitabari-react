import React from "react";
import bgImage from "../../assets/bannerImg.jpeg";
import { FaEnvelope, FaLock } from "react-icons/fa";
import ReusableForm from "./ReusableForm";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (data) => {
    console.log("Login Data:", data);
    // Add login logic here
  };

  return (
    <div className="md:px-40 h-screen flex items-center justify-center">
      <div className="md:border-2 border-primary rounded-xl md:flex justify-between">
        {/* img */}
        <div className="hidden md:block md:w-1/2 mt-10 md:mt-0">
          <img src={bgImage} alt="" className="rounded-lg md:rounded-l-lg" />
        </div>
        {/* form */}
        <div className="flex items-center justify-center md:w-1/2 bg-white rounded-xl py-7 md:p-8">
          <div className="bg-white shadow-lg p-5 md:p-7 rounded-md border md:border-none border-gray-200">
            <h2 className="text-3xl font-extrabold text-center text-[#11375B] mb-1">
              এডমিন{" "}
              <span className="font-semibold text-red-500">Nalitabari</span>
            </h2>
            <p className="text-sm text-center text-primary mb-6">লগিন করুন</p>

            <ReusableForm onSubmit={handleLogin}>
              {/* Email */}
              <div className="relative">
                <input
                  type="text"
                  name="email"
                  placeholder="ইমেইল"
                  className="w-full md:w-80 text-sm px-4 py-2 border border-gray-300 rounded-md outline-none"
                  required
                />
                <span className="absolute right-0 bg-primary text-white px-4 py-[11px] rounded-r-md hover:bg-secondary transition-all duration-500 cursor-pointer">
                  <FaEnvelope />
                </span>
              </div>
              {/* Password */}
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="পাসওয়ার্ড"
                  className="w-full md:w-80 text-sm px-4 py-2 border border-gray-300 rounded-md outline-none"
                  required
                />
                <span className="absolute right-0 bg-primary text-white px-4 py-[11px] rounded-r-md hover:bg-secondary transition-all duration-500 cursor-pointer">
                  <FaLock />
                </span>
              </div>
            </ReusableForm>

            <div className="mt-4 text-center">
              <Link to="/ResetPass">
                <span className="text-sm text-[#11375B] underline hover:text-red-500 transition-all duration-700">
                  পাসওয়ার্ড ভুলে গেছেন?
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { FaTruck, FaFilter, FaPen } from "react-icons/fa";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
const DailyExpense = () => {
  const [taxDate, setTaxDate] = useState(null);
  const dateRef = useRef(null);
  const [showFilter, setShowFilter] = useState(false); // State to toggle filter section

  return (
    <main className="bg-gradient-to-br from-gray-100 to-white md:p-6">
      <div className="w-xs md:w-full overflow-hidden overflow-x-auto max-w-7xl mx-auto bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-2 py-10 md:p-8 border border-gray-200">
        {/* Header */}
        <div className="md:flex items-center justify-between mb-6">
          <h1 className="text-xl font-extrabold text-[#11375B] flex items-center gap-3">
            <FaTruck className="text-[#11375B] text-2xl" />
            ব্যয়ের তালিকা
          </h1>
          <div className="mt-3 md:mt-0 flex gap-2">
            <button
              onClick={() => setShowFilter((prev) => !prev)} // Toggle filter
              className="bg-gradient-to-r from-[#11375B] to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-4 py-1 rounded-md shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <FaFilter /> ফিল্টার
            </button>
          </div>
        </div>
        {/* Conditional Filter Section */}
        {showFilter && (
          <div className="flex gap-5 border border-gray-300 rounded-md p-5 my-5 transition-all duration-300 pb-5">
            <div className="relative w-64">
              <DatePicker
                selected={taxDate}
                onChange={(date) => setTaxDate(date)}
                ref={dateRef}
                placeholderText="ট্যাক্স তারিখ..."
                className="mt-1 w-64 text-sm border border-gray-300 px-3 py-2 rounded bg-white outline-none"
                dateFormat="dd/MM/yyyy"
              />
              <span
                onClick={() => dateRef.current?.setOpen(true)}
                className="absolute top-1 right-0 text-xl text-white bg-primary px-4 py-[9px] rounded-r-md cursor-pointer"
              >
                <HiMiniCalendarDateRange />
              </span>
            </div>
            <div className="relative w-64">
              <DatePicker
                selected={taxDate}
                onChange={(date) => setTaxDate(date)}
                ref={dateRef}
                placeholderText="ট্যাক্স তারিখ..."
                className="mt-1 w-64 text-sm border border-gray-300 px-3 py-2 rounded bg-white outline-none"
                dateFormat="dd/MM/yyyy"
              />
              <span
                onClick={() => dateRef.current?.setOpen(true)}
                className="absolute top-1 right-0 text-xl text-white bg-primary px-4 py-[9px] rounded-r-md cursor-pointer"
              >
                <HiMiniCalendarDateRange />
              </span>
            </div>
            <div className="flex gap-2">
              <button className="bg-gradient-to-r from-[#11375B] to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-4 py-1 rounded-md shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <FaFilter /> ফিল্টার
              </button>
            </div>
          </div>
        )}
        {/* export */}
        <div className="md:flex justify-between items-center">
          <div className="flex bg-gray-200 text-primary font-semibold rounded-md">
            <button className="py-2 px-5 hover:bg-primary hover:text-white rounded-md transition-all duration-300 cursor-pointer">
              CSV
            </button>
            <button className="py-2 px-5 hover:bg-primary hover:text-white rounded-md transition-all duration-300 cursor-pointer">
              Excel
            </button>
            <button className="py-2 px-5 hover:bg-primary hover:text-white rounded-md transition-all duration-300 cursor-pointer">
              PDF
            </button>
            <button className="py-2 px-5 hover:bg-primary hover:text-white rounded-md transition-all duration-300 cursor-pointer">
              Print
            </button>
          </div>
          <div className="mt-3 md:mt-0">
            <span className="text-primary font-semibold pr-3">Search: </span>
            <input
              type="text"
              placeholder=""
              className="border border-gray-300 rounded-md outline-none text-xs py-2 ps-2 pr-5"
            />
          </div>
        </div>

        {/* Table */}
        <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-[#11375B] text-white uppercase text-sm">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">তারিখ</th>
                <th className="px-4 py-3">গাড়িনা.</th>
                <th className="px-4 py-3">ড্রাইভারের নাম</th>
                <th className="px-4 py-3">ট্রিপ খরচ</th>
                <th className="px-4 py-3">অন্যান্য খরচ</th>
                <th className="px-4 py-3">টোটাল খরচ</th>
                <th className="px-4 py-3">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="text-[#11375B] font-semibold bg-gray-100">
              <tr className="hover:bg-gray-50 transition-all">
                <td className="px-4 py-4 font-bold">1</td>
                <td className="px-4 py-4">16/04/2025</td>
                <td className="px-4 py-4">Dhaka metro 12</td>
                <td className="px-4 py-4">Korim ali</td>
                <td className="px-4 py-4">1200</td>
                <td className="px-4 py-4">200</td>
                <td className="px-4 py-4">1400</td>
                <td>
                  <div className="flex justify-center">
                    <button className="text-primary bg-green-50 border border-primary hover:bg-green-900 hover:text-white px-2 py-1 rounded shadow-md transition-all cursor-pointer">
                      <FaPen className="text-[12px]" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default DailyExpense;

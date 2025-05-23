import React from "react";
import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import { FaPlus, FaUserSecret } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PurchaseList = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-white md:p-4">
      <div className="w-xs md:w-full overflow-hidden overflow-x-auto max-w-7xl mx-auto bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-2 py-10 md:p-6 border border-gray-200">
        <div className="md:flex items-center justify-between mb-6">
          <h1 className="text-xl font-extrabold text-[#11375B] flex items-center gap-3">
            <FaUserSecret className="text-[#11375B] text-2xl" />
            Purchase List
          </h1>
          <div className="mt-3 md:mt-0 flex gap-2">
            <Link to="/tramessy/Purchase/PurchaseForm">
              <button className="bg-gradient-to-r from-[#11375B] to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-4 py-1 rounded-md shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <FaPlus /> Purchase
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-[#11375B] text-white uppercase text-sm">
              <tr>
                <th className="px-2 py-3">#</th>
                <th className="px-2 py-3">Supplier Name</th>
                <th className="px-2 py-3">Rate</th>
                <th className="px-2 py-3">Category</th>
                <th className="px-2 py-3">Item Name</th>
                <th className="px-2 py-3">Quantity</th>
                <th className="px-2 py-3">Unit Price</th>
                <th className="px-2 py-3">Total</th>
                <th className="px-2 py-3">Bill Image</th>
                <th className="px-2 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-[#11375B] font-semibold bg-gray-100">
              <tr className="hover:bg-gray-50 transition-all">
                <td className="px-2 py-4 font-bold">01</td>
                <td className="px-2 py-4">Korim Ali</td>
                <td className="px-2 py-4">250.00</td>
                <td className="px-2 py-4">Parts</td>
                <td className="px-2 py-4">Piston</td>
                <td className="px-2 py-4">5</td>
                <td className="px-2 py-4">250</td>
                <td className="px-2 py-4">1050</td>
                <td className="px-2 py-4">Bill Image</td>
                <td className="px-2 action_column">
                  <div className="flex gap-1">
                    <Link>
                      <button className="text-primary hover:bg-primary hover:text-white px-2 py-1 rounded shadow-md transition-all cursor-pointer">
                        <FaPen className="text-[12px]" />
                      </button>
                    </Link>
                    <button className="text-primary hover:bg-primary hover:text-white px-2 py-1 rounded shadow-md transition-all cursor-pointer">
                      <FaEye className="text-[12px]" />
                    </button>
                    <button className="text-red-900 hover:text-white hover:bg-red-900 px-2 py-1 rounded shadow-md transition-all cursor-pointer">
                      <FaTrashAlt className="text-[12px]" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PurchaseList;

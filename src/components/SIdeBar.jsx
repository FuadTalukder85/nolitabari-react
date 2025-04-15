import React, { useState } from "react";
import {
  FaBars,
  FaCarRear,
  FaChevronDown,
  FaChevronUp,
  FaBriefcase,
  FaUser,
} from "react-icons/fa6";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState({
    fleet: false,
    business: false,
    user: false,
  });

  const location = useLocation();

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <main className="bg-gray-50 min-h-screen fixed w-64 drop-shadow">
      {/* Logo */}
      <div className="flex justify-center border-b border-gray-300">
        <img src={logo} alt="Logo" className="w-28" />
      </div>

      {/* Admin Info */}
      <div className="p-3 border-b border-gray-300">
        <div className="bg-white p-2 rounded-md flex gap-2 items-center">
          <img
            src={avatar}
            alt="Admin Avatar"
            className="w-8 rounded-2xl drop-shadow"
          />
          <h3 className="text-primary font-semibold">এডমিন</h3>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-3 px-3">
        <ul className="space-y-6">
          {/* Dashboard */}
          <li
            className={`py-1 px-3 rounded-sm cursor-pointer ${
              isActive("/") ? "bg-primary text-white" : "text-white bg-primary"
            }`}
          >
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <FaBars />
              <span className="ps-2">ড্যাশবোর্ড</span>
            </Link>
          </li>

          {/* Fleet Management */}
          <li className="text-primary font-medium rounded-sm">
            <div
              onClick={() => toggleMenu("fleet")}
              className="flex justify-between items-center py-1 px-3 cursor-pointer hover:bg-primary hover:text-white hover:rounded-sm duration-300"
            >
              <span className="flex items-center gap-2">
                <FaCarRear />
                <span>ফ্লীট ম্যানেজমেন্ট</span>
              </span>
              {openMenu.fleet ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {openMenu.fleet && (
              <ul className="space-y-3 px-3 text-sm mt-2">
                <li>
                  <Link
                    to="/CarList"
                    className={`flex gap-2 items-center px-3 py-1 rounded-sm font-medium ${
                      isActive("/CarList")
                        ? "text-white bg-primary"
                        : "text-gray-500 hover:text-primary"
                    }`}
                  >
                    <div
                      className={`w-[6px] h-[6px] rounded-full bg-primary ${
                        isActive("/CarList") ? "bg-white" : "bg-primary"
                      }`}
                    ></div>
                    <span>গাড়ি তালিকা</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/DriverList"
                    className={`flex gap-2 items-center px-3 py-1 rounded-sm font-medium ${
                      isActive("/DriverList")
                        ? "text-white bg-primary"
                        : "text-gray-500 hover:text-primary"
                    }`}
                  >
                    <div
                      className={`w-[6px] h-[6px] rounded-full bg-primary ${
                        isActive("/DriverList") ? "bg-white" : "bg-primary"
                      }`}
                    ></div>
                    <span>ড্রাইভার তালিকা</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/TripList"
                    className={`flex gap-2 items-center px-3 py-1 rounded-sm font-medium ${
                      isActive("/TripList")
                        ? "text-white bg-primary"
                        : "text-gray-500 hover:text-primary"
                    }`}
                  >
                    <div
                      className={`w-[6px] h-[6px] rounded-full bg-primary ${
                        isActive("/TripList") ? "bg-white" : "bg-primary"
                      }`}
                    ></div>
                    <span>ট্রিপ তালিকা</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Fuel"
                    className={`flex gap-2 items-center px-3 py-1 rounded-sm font-medium ${
                      isActive("/Fuel")
                        ? "text-white bg-primary"
                        : "text-gray-500 hover:text-primary"
                    }`}
                  >
                    <div
                      className={`w-[6px] h-[6px] rounded-full bg-primary ${
                        isActive("/Fuel") ? "bg-white" : "bg-primary"
                      }`}
                    ></div>
                    <span>ফুয়েল</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Parts"
                    className={`flex gap-2 items-center px-3 py-1 rounded-sm font-medium ${
                      isActive("/Parts")
                        ? "text-white bg-primary"
                        : "text-gray-500 hover:text-primary"
                    }`}
                  >
                    <div
                      className={`w-[6px] h-[6px] rounded-full bg-primary ${
                        isActive("/Parts") ? "bg-white" : "bg-primary"
                      }`}
                    ></div>
                    <span>পার্টস এন্ড স্পায়ারস</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Maintenance"
                    className={`flex gap-2 items-center px-3 py-1 rounded-sm font-medium ${
                      isActive("/Maintenance")
                        ? "text-white bg-primary"
                        : "text-gray-500 hover:text-primary"
                    }`}
                  >
                    <div
                      className={`w-[6px] h-[6px] rounded-full bg-primary ${
                        isActive("/Maintenance") ? "bg-white" : "bg-primary"
                      }`}
                    ></div>
                    <span>মেইনটেনেন্স</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Business Reports */}
          <li className="text-primary font-medium rounded-sm">
            <div
              onClick={() => toggleMenu("business")}
              className="flex justify-between items-center py-1 px-3 cursor-pointer hover:bg-primary hover:text-white hover:rounded-sm duration-300"
            >
              <span className="flex items-center gap-2">
                <FaBriefcase />
                <span>বিজনেস বিবৃতি</span>
              </span>
              {openMenu.business ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {openMenu.business && (
              <ul className="space-y-3 px-3 text-sm mt-2">
                <li className="flex gap-2 items-center text-gray-500 cursor-pointer px-3 py-1 rounded-sm">
                  <div className="bg-primary w-[6px] h-[6px] rounded-full"></div>
                  <span>দৈনিক আয়</span>
                </li>
                <li className="flex gap-2 items-center text-gray-500 cursor-pointer px-3 py-1 rounded-sm">
                  <div className="bg-primary w-[6px] h-[6px] rounded-full"></div>
                  <span>দৈনিক ব্যয়</span>
                </li>
              </ul>
            )}
          </li>

          {/* User Control */}
          <li className="text-primary font-medium rounded-sm">
            <div
              onClick={() => toggleMenu("user")}
              className="flex justify-between items-center py-1 px-3 cursor-pointer hover:bg-primary hover:text-white hover:rounded-sm duration-300"
            >
              <span className="flex items-center gap-2">
                <FaUser />
                <span>ইউজার কন্ট্রোল</span>
              </span>
              {openMenu.user ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {openMenu.user && (
              <ul className="space-y-3 px-3 text-sm mt-2">
                <li className="flex gap-2 items-center text-gray-500 cursor-pointer px-3 py-1 rounded-sm">
                  <div className="bg-primary w-[6px] h-[6px] rounded-full"></div>
                  <span>সকল ইউজার</span>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Sidebar;

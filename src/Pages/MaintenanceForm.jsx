import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FiCalendar } from "react-icons/fi";
import Select from "react-select";
import BtnSubmit from "../components/Button/BtnSubmit";
const MaintenanceForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const [previewImage, setPreviewImage] = useState(null);
  const maintenanceDateRef = useRef(null);
  // car name / registration number
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    fetch("https://api.dropshep.com/api/vehicle")
      .then((response) => response.json())
      .then((data) => setVehicles(data.data))
      .catch((error) => console.error("Error fetching driver data:", error));
  }, []);

  const vehicleOptions = vehicles.map((vehicle) => ({
    value: vehicle.registration_number,
    label: vehicle.registration_number,
  }));
  // post data on server
  const onSubmit = async (data) => {
    console.log("add car data", data);
    try {
      const formData = new FormData();
      for (const key in data) {
        if (data[key] !== undefined && data[key] !== null) {
          formData.append(key, data[key]);
        }
      }
      const response = await axios.post(
        "https://api.dropshep.com/api/maintenance",
        formData
      );
      const resData = response.data;
      console.log("resData", resData);
      if (resData.status === "success") {
        toast.success("তথ্য সফলভাবে সংরক্ষণ হয়েছে!", {
          position: "top-right",
        });
        reset();
      } else {
        toast.error("সার্ভার ত্রুটি: " + (resData.message || "অজানা সমস্যা"));
      }
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response?.data?.message || error.message || "Unknown error";
      toast.error("সার্ভার ত্রুটি: " + errorMessage);
    }
  };
  // handle remove image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      setValue("receipt", file);
    }
  };

  return (
    <div className="mt-10">
      <Toaster />
      <h3 className="px-6 py-2 bg-primary text-white font-semibold rounded-t-md">
        মেইনটেনেন্স ফর্ম
      </h3>
      <div className="mx-auto p-6 bg-gray-100 rounded-md shadow">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="md:flex justify-between gap-3">
            <div className="w-full">
              <label className="text-primary text-sm font-semibold">
                মেইনটেনেন্স তারিখ
              </label>
              <div className="relative">
                <input
                  type="date"
                  {...register("date", { required: true })}
                  ref={(e) => {
                    register("date").ref(e);
                    maintenanceDateRef.current = e;
                  }}
                  className="remove-date-icon mt-1 w-full text-sm border border-gray-300 px-3 py-2 rounded bg-white outline-none pr-10"
                />
                {errors.date && (
                  <span className="text-red-600 text-sm">পূরণ করতে হবে</span>
                )}
                <span className="py-[11px] absolute right-0 px-3 top-[22px] transform -translate-y-1/2 bg-primary rounded-r">
                  <FiCalendar
                    className="text-white cursor-pointer"
                    onClick={() => maintenanceDateRef.current?.showPicker?.()}
                  />
                </span>
              </div>
            </div>
            <div className="w-full relative">
              <label className="text-primary text-sm font-semibold">
                সার্ভিসের ধরন
              </label>
              <select
                {...register("service_type", { required: true })}
                className="mt-1 w-full text-gray-500 text-sm border border-gray-300 bg-white p-2 rounded appearance-none outline-none"
              >
                <option value="">সার্ভিসের ধরন</option>
                <option value="Maintenance">Maintenance</option>
                <option value="General">General</option>
              </select>
              {errors.service_type && (
                <span className="text-red-600 text-sm">পূরণ করতে হবে</span>
              )}
              <MdOutlineArrowDropDown className="absolute top-[35px] right-2 pointer-events-none text-xl text-gray-500" />
            </div>
          </div>
          <div className="md:flex justify-between gap-3">
            <div className="w-full relative">
              <label className="text-primary text-sm font-semibold">
                পার্টস এন্ড স্পায়ারস
              </label>
              <select
                {...register("parts_and_spairs", { require: true })}
                className="mt-1 w-full text-gray-500 text-sm border border-gray-300 bg-white p-2 rounded appearance-none outline-none"
              >
                <option value="">পার্টস এন্ড স্পায়ারস</option>
                <option value="EngineOil">Engine Oil</option>
                <option value="Pistons">Pistons</option>
                <option value="ABS_Sensors">ABS Sensors</option>
                <option value="BrakeDrum">Brake Drum</option>
              </select>
              {errors.parts_and_spairs && (
                <span className="text-red-600 text-sm">পূরণ করতে হবে</span>
              )}
              <MdOutlineArrowDropDown className="absolute top-[35px] right-2 pointer-events-none text-xl text-gray-500" />
            </div>
            <div className="w-full relative">
              <label className="text-primary text-sm font-semibold">
                মেইনটেনেসের ধরন
              </label>
              <select
                {...register("maintenance_type", { required: true })}
                className="mt-1 w-full text-gray-500 text-sm border border-gray-300 bg-white p-2 rounded appearance-none outline-none"
              >
                <option value="">মেইনটেনেসের ধরন</option>
                <option value="EngineOil">Engine Oil</option>
                <option value="Pistons">Pistons</option>
                <option value="ABS_Sensors">ABS Sensors</option>
                <option value="BrakeDrum">Brake Drum</option>
              </select>
              {errors.maintenance_type && (
                <span className="text-red-600 text-sm">পূরণ করতে হবে</span>
              )}
              <MdOutlineArrowDropDown className="absolute top-[35px] right-2 pointer-events-none text-xl text-gray-500" />
            </div>
          </div>

          <div className="md:flex justify-between gap-3">
            <div className="w-full">
              <label className="text-primary text-sm font-semibold">খরচ</label>
              <input
                {...register("cost", { required: true })}
                type="number"
                placeholder="খরচ ..."
                className="mt-1 w-full text-sm border border-gray-300 px-3 py-2 rounded bg-white outline-none"
              />
              {errors.cost && (
                <span className="text-red-600 text-sm">পূরণ করতে হবে</span>
              )}
            </div>
            <div className="w-full">
              <label className="text-primary text-sm font-semibold">
                গাড়ির নম্বার
              </label>
              <Controller
                name="vehicle_no"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={vehicleOptions}
                    placeholder="গাড়ির নম্বর নির্বাচন করুন..."
                    className="mt-1 text-sm"
                    classNamePrefix="react-select"
                    isClearable
                  />
                )}
              />

              {errors.vehicle_no && (
                <span className="text-red-600 text-sm">পূরণ করতে হবে</span>
              )}
            </div>
          </div>

          <div className="md:flex justify-between gap-3">
            <div className="w-full relative">
              <label className="text-primary text-sm font-semibold">
                চার্জ বাই
              </label>
              <input
                {...register("cost_by")}
                type="text"
                placeholder="চার্জ বাই..."
                className="mt-1 w-full text-sm border border-gray-300 px-3 py-2 rounded bg-white outline-none"
              />
            </div>
            <div className="w-full">
              <label className="text-primary text-sm font-semibold">
                সর্বমোট খরচ
              </label>
              <input
                {...register("total_cost")}
                type="number"
                placeholder="সর্বমোট খরচ..."
                className="mt-1 w-full text-sm border border-gray-300 px-3 py-2 rounded bg-white outline-none"
              />
            </div>
          </div>

          <div className="md:flex justify-between gap-3">
            <div className="w-full relative">
              <label className="text-primary text-sm font-semibold">
                প্রিয়োরিটি
              </label>
              <select
                {...register("dignifies")}
                className="mt-1 w-full text-gray-500 text-sm border border-gray-300 bg-white p-2 rounded appearance-none outline-none"
              >
                <option value="">মর্যাদা...</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <MdOutlineArrowDropDown className="absolute top-[35px] right-2 pointer-events-none text-xl text-gray-500" />
            </div>
            <div className="w-full relative">
              <label className="text-primary text-sm font-semibold">
                সার্ভিস ফর
              </label>
              <select
                {...register("service_for")}
                className="mt-1 w-full text-gray-500 text-sm border border-gray-300 bg-white p-2 rounded appearance-none outline-none"
              >
                <option value="">সার্ভিস ফর...</option>
                <option value="EngineOil">Engine Oil</option>
                <option value="Pistons">Pistons</option>
                <option value="ABS_Sensors">ABS Sensors</option>
                <option value="BrakeDrum">Brake Drum</option>
              </select>
              <MdOutlineArrowDropDown className="absolute top-[35px] right-2 pointer-events-none text-xl text-gray-500" />
            </div>
            <div className="w-full">
              <label className="text-primary text-sm font-semibold">
                ক্যাশ মেমো / কাগজের ছবি
              </label>
              <div className="relative mt-1">
                <label
                  htmlFor="receipt"
                  className="border p-2 rounded w-full block bg-white text-gray-500 text-sm cursor-pointer"
                >
                  {previewImage ? "ছবি নির্বাচিত হয়েছে" : "ছবি বাচাই করুন"}
                </label>
                <input
                  {...register("receipt")}
                  id="receipt"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    handleImageChange(e);
                  }}
                />
              </div>
              {/* 🖼️ Image preview below file input */}
              {previewImage && (
                <div className="mt-3 relative flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setPreviewImage(null);
                      document.querySelector('input[type="file"]').value = null;
                    }}
                    className="absolute top-2 right-2 text-red-600 bg-white shadow rounded-sm hover:text-white hover:bg-secondary transition-all duration-300 cursor-pointer font-bold text-xl p-[2px]"
                    title="Remove image"
                  >
                    <IoMdClose />
                  </button>
                  <img
                    src={previewImage}
                    alt="License Preview"
                    className="max-w-xs h-auto rounded border border-gray-300"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="mt-6">
            <BtnSubmit>সাবমিট করুন</BtnSubmit>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MaintenanceForm;

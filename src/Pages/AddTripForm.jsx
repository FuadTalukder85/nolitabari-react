import { MdOutlineArrowDropDown } from "react-icons/md";
import { InputField, SelectField } from "../components/Form/FormFields";
import BtnSubmit from "../components/Button/BtnSubmit";
import { FormProvider, useForm } from "react-hook-form";

const AddTripForm = () => {
  const methods = useForm();
  const { watch, handleSubmit } = methods;
  const selectedCustomer = watch("customer");
  const selectedTransport = watch("transport_type");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <h3 className="px-6 py-2 bg-primary text-white font-semibold rounded-t-md">
        Add Trip
      </h3>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 mx-auto bg-gray-100 rounded-md shadow"
        >
          <div className="border border-gray-300 p-3 md:p-5 rounded-b-md">
            <h5 className="text-3xl font-bold text-center text-[#EF9C07]">
              {selectedCustomer}
            </h5>
            {/* Common Input Fields */}
            <div>
              <div className="border border-gray-300 p-5 rounded-md mt-3">
                <h5 className="text-primary font-semibold text-center pb-5">
                  <span className="py-2 border-b-2 border-primary">
                    Customer and Destination
                  </span>
                </h5>
                <div className="mt-5 md:flex justify-between gap-3">
                  {/* Customer Dropdown */}
                  <div className="w-full relative">
                    <SelectField
                      name="customer"
                      label="Select Customer"
                      required
                      options={[
                        { value: "", label: "Customer" },
                        { value: "Yamaha", label: "Yamaha" },
                        { value: "Hatim", label: "Hatim" },
                        { value: "Suzuki", label: "Suzuki" },
                        { value: "Sonalika", label: "Sonalika" },
                        { value: "Honda", label: "Honda" },
                        { value: "Guest", label: "Guest" },
                      ]}
                    />
                  </div>
                  <div className="w-full">
                    <InputField name="date" label="Date" required />
                  </div>
                </div>
                <div className="mt-5 md:mt-1 md:flex justify-between gap-3">
                  <div className="w-full">
                    <InputField name="load_point" label="Load Point" required />
                  </div>
                  <div className="w-full">
                    <InputField
                      name="unload_point"
                      label="Unload Point"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Conditionally Show Yamaha Fields */}
            {selectedCustomer === "Yamaha" && (
              <div className="">
                <div className="border border-gray-300 p-5 rounded-md mt-3">
                  <h5 className="text-primary font-semibold text-center pb-5">
                    <span className="py-2 border-b-2 border-primary">
                      Transport and Driver section
                    </span>
                  </h5>
                  <div className="mt-5 md:mt-1 md:flex justify-between gap-3">
                    <div className="w-full relative">
                      <SelectField
                        name="transport_type"
                        label="Transport Type"
                        required
                        options={[
                          { value: "own_transport", label: "Own Transport" },
                          {
                            value: "vendor_transport",
                            label: "Vendor Transport",
                          },
                        ]}
                      />
                    </div>
                    <div className="w-full">
                      <InputField
                        name="vehicle_no"
                        label="Vehicle No."
                        required
                      />
                    </div>
                    <div className="w-full">
                      <InputField
                        name="driver_name"
                        label="Driver Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-5 md:mt-1 md:flex justify-between gap-3">
                    <div className="w-full">
                      <InputField
                        name="driver_mobile"
                        label="Driver Mobile"
                        required
                      />
                    </div>
                    <div className="w-full">
                      <InputField name="challan" label="Challan" required />
                    </div>
                    <div className="w-full">
                      <InputField name="sti" label="STI" required />
                    </div>
                  </div>
                </div>
                <div className="border border-gray-300 p-5 rounded-md mt-3">
                  <h5 className="text-primary font-semibold text-center pb-5">
                    <span className="py-2 border-b-2 border-primary">
                      Product and Expense
                    </span>
                  </h5>
                  <div className="mt-5 md:mt-1 md:flex justify-between gap-3">
                    <div className="w-full">
                      <InputField name="model_no" label="Model No." required />
                    </div>
                    <div className="w-full">
                      <InputField name="quantity" label="Quantity" required />
                    </div>
                  </div>
                  <div className="mt-5 md:mt-1 md:flex justify-between gap-3">
                    <div className="w-full">
                      <InputField name="fuel_cost" label="Fuel Cost" required />
                    </div>
                    <div className="w-full">
                      <InputField
                        name="total_rent"
                        label="Total Rent/Bill Amount"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Conditionally Show Suzuki Fields */}
            {selectedCustomer === "Suzuki" && (
              <div className="border-t border-gray-300">
                <div className="mt-5 md:mt-1 md:flex justify-between gap-3">
                  <div className="w-full relative">
                    <SelectField
                      name="transport_type"
                      label="Transport Type"
                      required
                      options={[
                        { value: "", label: "Select Transport Type" },
                        { value: "own_transport", label: "Own Transport" },
                        {
                          value: "vendor_transport",
                          label: "Vendor Transport",
                        },
                      ]}
                    />
                  </div>
                  <div className="w-full">
                    <InputField
                      name="vehicle_no"
                      label="Vehicle No."
                      required
                    />
                  </div>
                  <div className="w-full">
                    <InputField
                      name="dealer_name"
                      label="Dealer Name"
                      required
                    />
                  </div>
                </div>
                <div className="mt-5 md:mt-1 md:flex justify-between gap-3">
                  <div className="w-full">
                    <InputField name="do_si" label="Do(SI)" required />
                  </div>
                  <div className="w-full">
                    <InputField name="co_u" label="CO(U)" required />
                  </div>
                </div>
                <div className="mt-5 md:mt-1 md:flex justify-between gap-3">
                  <div className="w-full">
                    <InputField
                      name="quantity"
                      label="Bike/Quantity"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <InputField name="masking" label="Masking" required />
                  </div>
                  <div className="w-full">
                    <InputField
                      name="unload_charge"
                      label="Unload Charge"
                      required
                    />
                  </div>
                </div>
                <div className="mt-5 md:mt-1 md:flex justify-between gap-3">
                  <div className="w-full">
                    <InputField name="extra_fare" label="Extra Fare" required />
                  </div>
                  <div className="w-full">
                    <InputField
                      name="vehicle_rent"
                      label="Vehicle Rent"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <InputField
                      name="total_rent"
                      label="Total Rent/Bill Amount"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Conditionally Show Hatim Fields */}
            {selectedCustomer === "Hatim" && (
              <div className="border-t border-gray-300">
                <div className="mt-5 md:mt-1 md:flex justify-between gap-3">
                  <div className="w-full relative">
                    <SelectField
                      name="transport_type"
                      label="Transport Type"
                      required
                      options={[
                        { value: "", label: "Select Transport Type" },
                        { value: "own_transport", label: "Own Transport" },
                        {
                          value: "vendor_transport",
                          label: "Vendor Transport",
                        },
                      ]}
                    />
                  </div>
                  <div className="w-full">
                    <InputField
                      name="vehicle_no"
                      label="Vehicle No."
                      required
                    />
                  </div>
                  <div className="w-full">
                    <InputField name="goods" label="Goods" required />
                  </div>
                </div>
                <div className="mt-5 md:mt-1 md:flex justify-between gap-3">
                  <div className="w-full">
                    <InputField
                      name="distribution_name"
                      label="Distribution Name"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <InputField
                      name="total_amount"
                      label="Total Amount/Bill Amount"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <InputField name="remarks" label="Remarks" required />
                  </div>
                </div>
              </div>
            )}

            {/* Conditionally Show Honda Fields */}
            {selectedCustomer === "Honda" && (
              <div className="border-t border-gray-300">
                <div className="mt-5 md:mt-1 md:flex justify-between gap-3">
                  <div className="w-full relative">
                    <SelectField
                      name="transport_type"
                      label="Transport Type"
                      required
                      options={[
                        { value: "", label: "Select Transport Type" },
                        { value: "own_transport", label: "Own Transport" },
                        {
                          value: "vendor_transport",
                          label: "Vendor Transport",
                        },
                      ]}
                    />
                  </div>
                  <div className="w-full">
                    <InputField
                      name="dealer_name"
                      label="Dealer Name"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <InputField
                      name="vehicle_no"
                      label="Vehicle No."
                      required
                    />
                  </div>
                  <div className="w-full">
                    <InputField name="do_si" label="DO(SI)" required />
                  </div>
                </div>
                <div className="mt-5 md:mt-1 md:flex justify-between gap-3">
                  <div className="w-full">
                    <InputField name="address" label="Address" required />
                  </div>
                  <div className="w-full">
                    <InputField name="no_of_trip" label="No of Trip" required />
                  </div>
                  <div className="w-full">
                    <InputField
                      name="vehicle_mode"
                      label="Vehicle Mode"
                      required
                    />
                  </div>
                </div>
                <div className="mt-5 md:mt-1 md:flex justify-between gap-3">
                  <div className="w-full">
                    <InputField name="quantity" label="Quantity" required />
                  </div>
                  <div className="w-full">
                    <InputField
                      name="per_truck_rent"
                      label="Per Truck Rent"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <InputField name="vat" label="Vat" required />
                  </div>
                  <div className="w-full">
                    <InputField
                      name="total_rent_cost"
                      label="Total Rent Cost"
                      required
                    />
                  </div>
                </div>
              </div>
            )}
            {/* Conditionally Show Guest Fields */}
            {selectedCustomer === "Guest" && (
              <div className="">
                <div className="mt-5 md:mt-1 md:flex justify-between gap-3">
                  <div className="w-full relative">
                    <SelectField
                      name="transport_type"
                      label="Transport Type"
                      required
                      options={[
                        { value: "", label: "Select Transport Type" },
                        { value: "own_transport", label: "Own Transport" },
                        {
                          value: "vendor_transport",
                          label: "Vendor Transport",
                        },
                      ]}
                    />
                  </div>
                  <div className="w-full">
                    <InputField
                      name="vehicle_no"
                      label="Vehicle No."
                      required
                    />
                  </div>
                </div>
                <div className="mt-5 md:mt-1 md:flex justify-between gap-3">
                  <div className="w-full">
                    <InputField
                      name="driver_name"
                      label="Driver Name"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <InputField name="fuel_cost" label="Fuel Cost" required />
                  </div>
                </div>
              </div>
            )}
            {/* transport type input field */}
            {selectedTransport === "own_transport" && (
              <div className="mt-5 md:mt-1 md:flex justify-between gap-3">
                <div className="w-full">
                  <InputField
                    name="driver_commission"
                    label="Driver Commission"
                    required
                  />
                </div>
                <div className="w-full">
                  <InputField name="road_cost" label="Road Cost" required />
                </div>
                <div className="w-full">
                  <InputField name="food_cost" label="Food Cost" required />
                </div>
                <div className="w-full">
                  <InputField
                    name="total_expense"
                    label="Total Expense"
                    required
                  />
                </div>
              </div>
            )}
            {selectedTransport === "vendor_transport" && (
              <div className="mt-5 md:mt-1 md:flex justify-between gap-3">
                <div className="w-full">
                  <InputField name="trip_rent" label="Trip Rent" required />
                </div>
                <div className="w-full">
                  <InputField name="advance" label="Advance" required />
                </div>
                <div className="w-full">
                  <InputField name="due_amount" label="Due Amount" required />
                </div>
              </div>
            )}
            {/* Submit Button */}
            <div className="text-left p-5">
              <BtnSubmit>Submit</BtnSubmit>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddTripForm;

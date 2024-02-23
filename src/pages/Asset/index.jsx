import React, { useState } from "react";

const Asset = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-col gap-3 text-sm">
      <div className="flex flex-col">
        <label>NFT Name</label>
        <input type="text" className="bg-black px-2 py-1" />
      </div>

      <div className="flex gap-2 sm:gap-7">
        <div className="flex flex-col sm:w-full">
          <label>Collection Title</label>
          <input type="text" className="bg-black py-1 px-2" />
        </div>

        <div className="flex flex-col">
          <label>Collection ID</label>
          <input type="text" className="bg-black py-1 px-2" />
        </div>
      </div>

      <button className="p-2 w-24 text-xs self-end rounded-3xl items-center bg-[#FD102C]">
        Add
      </button>

      <div className="flex flex-col">
        <label>Description</label>
        <textarea rows="3" className="bg-black p-1"></textarea>
      </div>

      <div className="flex justify-between">
        <p>Traits</p>
        <button className="p-2 w-24 text-xs self-end rounded-3xl items-center bg-[#FD102C]">
          Add Trait
        </button>
      </div>

      <div className="flex gap-6 text-sm self-center">
        <p>List Immediately</p>
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div
            className={`relative w-8 h-4 rounded-full bg-[#6D7580] transition-all duration-300 ease-in-out ${
              isChecked ? "bg-[#5000ac]" : "bg-[#6D7580]"
            }`}
          >
            <input
              type="checkbox"
              id="toggle"
              className="sr-only"
              checked={isChecked}
              onChange={toggleChecked}
            />
            <div
              className={`absolute left-0 top-0 w-4 h-4 rounded-full bg-white transform transition-all duration-300 ease-in-out ${
                isChecked ? "translate-x-full" : ""
              }`}
            />
          </div>
        </label>
        <p>Schedule Listing</p>
      </div>

      {isChecked && (
        <div className="flex gap-10 self-center mt-1">
          <input type="date" className="text-black px-2 py-1" />
          <input type="time" className="text-black px-2 py-1" />
        </div>
      )}
    </div>
  );
};

export default Asset;

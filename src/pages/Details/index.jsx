import React, { useState } from "react";
import cancel from "../../assets/cancel.png";
import mlpb from "../../assets/royalties/mlpb.png";
import momental from "../../assets/royalties/momental.png";

const redemption = [
  { id: 0, name: "Code", value: "RG100" },
  { id: 1, name: "Supply", value: "250" },
  { id: 2, name: "Discount %", value: "100" },
];

const royalties = [
  { id: 0, name: "MLPB", percentage: "5%", img: mlpb },
  { id: 1, name: "Momental", percentage: "5%", img: momental },
];

const Details = () => {
  const [edit, setEdit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toggleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-col gap-3 text-sm">
      <div className="flex gap-7">
        <div className="flex flex-col w-full">
          <label>Listing Price</label>

          <div className="flex items-center">
            <p className="absolute pl-2 text-[#3D00B7]">$</p>
            <input type="text" className="bg-black py-1 px-2 w-full pl-6" />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label>Supply</label>
          <input type="text" className="bg-black py-1 px-2" />
        </div>
      </div>

      <div className="flex justify-between">
        <p>Minting Fee:</p>
        <p>$</p>
      </div>

      <div className="flex gap-12">
        <p>Create Redemption</p>
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
      </div>

      <div className="flex gap-6">
        {isChecked &&
          redemption.map((data) => (
            <div key={data.id}>
              <p>{data.name}</p>
              <input
                type="text"
                value={data.value}
                onChange={(e) => e.target.value}
                className="bg-black py-1 px-2 text-center"
              />
            </div>
          ))}
      </div>

      <div className="flex justify-between items-center">
        <p>Royalties</p>
        {edit ? (
          <button
            onClick={() => setEdit(false)}
            className="py-1 px-6 text-xs rounded-full border border-[#6D7580] text-[#6D7580]"
          >
            Confirm
          </button>
        ) : (
          <button
            onClick={() => setEdit(true)}
            className="py-1 px-6 text-xs rounded-full border border-[#6D7580] text-[#6D7580]"
          >
            Edit
          </button>
        )}
      </div>

      {edit && (
        <div className="flex gap-7">
          <input
            type="text"
            placeholder="User email"
            className="bg-black py-1 px-2 w-full"
          />
          <input
            type="text"
            placeholder="%"
            className="bg-black w-20 py-1 px-2"
          />
          <button className="p-2 w-24 text-xs self-end rounded-3xl items-center bg-[#FD102C]">
            Add
          </button>
        </div>
      )}

      <div className="flex flex-col text-xs gap-2 border-b border-[#6D7580] pb-4">
        {royalties.map((data) => (
          <div key={data.id} className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              {edit && <img src={cancel} width={13} alt="cancel" />}
              <img src={data.img} alt={data.name} width={25} />
              <p>{data.name}</p>
            </div>
            <p>{data.percentage}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <p>Primary Sales Potential</p>
        <p>$</p>
      </div>
    </div>
  );
};

export default Details;

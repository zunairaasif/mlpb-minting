import React from "react";

const listing = [
  { id: 0, name: "Release date", detail: "05/23/2023 05:00:00" },
  { id: 1, name: "Unit Price", detail: "$15.00" },
  { id: 2, name: "Supply", detail: "1,000" },
  { id: 3, name: "Primary Sales Potential", detail: "$15,00.00" },
];

const royalties = [
  { id: 0, name: "MLPB Armory", detail: "5%" },
  { id: 1, name: "@RyanGreenspan", detail: "5%" },
  { id: 2, name: "Momental", detail: "5%" },
];

const launch = [
  { id: 0, name: "Minting Fee", detail: "$35.00" },
  { id: 1, name: "Stripe Fee", detail: "2.9%" },
];

const Launch = () => {
  return (
    <div className="text-sm">
      <div className="flex flex-col mt-2">
        <p className="pb-1 border-b border-[#393734]">Listing Details</p>

        <div className="flex flex-col">
          {listing.map((data) => (
            <div
              key={data.id}
              className="flex justify-between text-xs mt-3 ml-10 sm:ml-20"
            >
              <p>{data.name}</p>
              <p>{data.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-3">
        <p className="pb-1 border-b border-[#393734]">Royalties</p>

        <div className="flex flex-col">
          {royalties.map((data) => (
            <div
              key={data.id}
              className="flex justify-between text-xs mt-3 ml-10 sm:ml-20"
            >
              <p>{data.name}</p>
              <p>{data.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-3">
        <p className="pb-1 border-b border-[#393734]">Launch Cost</p>

        <div className="flex flex-col">
          {launch.map((data) => (
            <div
              key={data.id}
              className="flex justify-between text-xs mt-3 ml-10 sm:ml-20"
            >
              <p>{data.name}</p>
              <p>{data.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col my-10">
        <div className="flex justify-between pb-1 border-t border-[#393734]">
          <p>Total</p>
          <p>$185.00</p>
        </div>
        <p className="text-xs text-[#C4C4C4]">Paid via [Payment Method]</p>
      </div>
    </div>
  );
};

export default Launch;

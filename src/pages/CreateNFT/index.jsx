import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Asset from "../Asset";
import Launch from "../Launch";
import Details from "../Details";
import Checkout from "../Checkout";
import close from "../../assets/vector.png";
import UploadNFT from "../../components/UploadNFT";

const steps = [
  { id: 0, name: "Asset" },
  { id: 1, name: "Details" },
  { id: 2, name: "Checkout" },
  { id: 3, name: "Launch" },
];

const CreateNFT = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(0);

  const handleNext = () => {
    if (click === 0) {
      setClick(1);
    } else if (click === 1) {
      setClick(2);
    } else {
      setClick(3);
    }
  };

  const handleBack = () => {
    if (click === 3) {
      setClick(2);
    } else if (click === 2) {
      setClick(1);
    } else if (click === 1) {
      setClick(0);
    } else {
      navigate("/template");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <UploadNFT />

      <div className="bg-[#1E1B18] p-6 h-screen flex flex-col">
        <button className="self-end">
          <img src={close} alt="close" width={15} />
        </button>

        <p className="text-lg sm:text-2xl font-bold mb-6 self-start">
          Create your NFT
        </p>

        <div className="flex mb-4 text-sm justify-between border-b border-[#6D7580]">
          {steps.map((data) => (
            <p
              className={`pb-2 ${
                click === data.id && "border-b-2 border-[#6D7580] px-2"
              }`}
              key={data.id}
            >
              {data.name}
            </p>
          ))}
        </div>

        {click === 0 ? (
          <Asset />
        ) : click === 1 ? (
          <Details />
        ) : click === 2 ? (
          <Checkout />
        ) : (
          <Launch />
        )}

        <div className="flex gap-10 self-center sm:mt-0 mt-20 sm:h-screen items-end">
          <button onClick={handleBack} className="underline mb-2 text-sm">
            Back
          </button>

          <button
            onClick={handleNext}
            className="py-2 w-64 text-center text-sm bg-[#FD102C] cursor-pointer"
          >
            {click === 3 ? <p>Create Collectible</p> : <p>Next</p>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;

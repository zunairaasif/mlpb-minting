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
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [click, setClick] = useState(0);
  const [supply, setSupply] = useState("");
  const [nftName, setNftName] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [description, setDescription] = useState("");
  const [collectionId, setCollectionId] = useState("");
  const [listingPrice, setListingPrice] = useState("");
  const [collectionTitle, setCollectionTitle] = useState("");

  const handleNext = () => {
    if (click === 0 && setNftName) {
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

      <div className="bg-[#1E1B18] p-6 min-h-screen flex flex-col">
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

        <div className="flex-grow">
          {click === 0 ? (
            <Asset
              nftName={nftName}
              setNftName={setNftName}
              collectionTitle={collectionTitle}
              setCollectionTitle={setCollectionTitle}
              collectionId={collectionId}
              setCollectionId={setCollectionId}
              description={description}
              setDescription={setDescription}
              toggle={toggle}
              setToggle={setToggle}
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
            />
          ) : click === 1 ? (
            <Details
              listingPrice={listingPrice}
              setListingPrice={setListingPrice}
              supply={supply}
              setSupply={setSupply}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
          ) : click === 2 ? (
            <Checkout />
          ) : (
            <Launch />
          )}
        </div>

        <div className="flex gap-10 self-center items-end">
          <button onClick={handleBack} className="underline mb-2 text-sm">
            Back
          </button>

          <button
            disabled={
              (click === 0 &&
                (!nftName ||
                  !collectionTitle ||
                  !collectionId ||
                  !description ||
                  (toggle && (!date || !time)))) ||
              (click === 1 && (!listingPrice || !supply))
            }
            onClick={handleNext}
            className={`py-2 w-64 text-center text-sm ${
              (click === 0 &&
                (!nftName ||
                  !collectionTitle ||
                  !collectionId ||
                  !description ||
                  (toggle && (!date || !time)))) ||
              (click === 1 && (!listingPrice || !supply))
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#FD102C] cursor-pointer"
            }`}
          >
            {click === 3 ? <p>Create Collectible</p> : <p>Next</p>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;

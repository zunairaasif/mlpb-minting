import React, { useState } from "react";
import close from "../../assets/vector.png";

const Asset = ({
  nftName,
  setNftName,
  collectionTitle,
  setCollectionTitle,
  collectionId,
  setCollectionId,
  description,
  setDescription,
  toggle,
  setToggle,
  date,
  setDate,
  time,
  setTime,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleConfirm = () => {
    console.log("Input 1:", input1);
    console.log("Input 2:", input2);
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col gap-3 text-sm">
      <div className="flex flex-col">
        <label>NFT Name</label>
        <input
          type="text"
          className="bg-black px-2 py-1"
          value={nftName}
          onChange={(e) => setNftName(e.target.value)}
        />
      </div>

      <div className="flex gap-2 sm:gap-7">
        <div className="flex flex-col sm:w-full">
          <label>Collection Title</label>

          <input
            type="text"
            className="bg-black py-1 px-2"
            value={collectionTitle}
            onChange={(e) => setCollectionTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label>Collection ID</label>
          <input
            type="text"
            className="bg-black py-1 px-2"
            value={collectionId}
            onChange={(e) => setCollectionId(e.target.value)}
          />
        </div>
      </div>

      <button
        onClick={handleButtonClick}
        className="p-2 w-24 text-xs self-end rounded-3xl items-center bg-[#FD102C]"
      >
        Add
      </button>

      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-[#1E1B18] p-8 shadow-lg flex flex-col">
            <div className="flex justify-between">
              <p className="text-xl font-semibold mb-4">Collection Title</p>
              <img
                src={close}
                alt="cancel"
                className="h-4"
                onClick={() => setShowPopup(false)}
              />
            </div>

            <div className="flex gap-3">
              <div className="flex flex-col">
                <p>Title</p>
                <input
                  type="text"
                  placeholder="Set collection title"
                  value={input1}
                  onChange={(e) => setInput1(e.target.value)}
                  className="bg-[#000000] px-3 py-2 mb-4"
                />
              </div>

              <div className="flex flex-col">
                <p>Collection ID</p>
                <input
                  type="text"
                  placeholder="set ID"
                  value={input2}
                  onChange={(e) => setInput2(e.target.value)}
                  className="bg-[#000000] px-3 py-2 mb-4"
                />
              </div>
            </div>

            <button
              onClick={handleConfirm}
              className="py-2 px-4 bg-[#FD102C] mr-2 self-center"
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col">
        <label>Description</label>
        <textarea
          rows="3"
          className="bg-black p-1"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
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
              toggle ? "bg-[#3D00B7]" : "bg-[#6D7580]"
            }`}
          >
            <input
              type="checkbox"
              id="toggle"
              className="sr-only"
              checked={toggle}
              onChange={() => setToggle(!toggle)}
            />
            <div
              className={`absolute left-0 top-0 w-4 h-4 rounded-full bg-white transform transition-all duration-300 ease-in-out ${
                toggle ? "translate-x-full" : ""
              }`}
            />
          </div>
        </label>
        <p>Schedule Listing</p>
      </div>

      {toggle && (
        <div className="flex gap-10 self-center mt-1">
          <input
            type="date"
            className="text-black px-2 py-1"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            className="text-black px-2 py-1"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default Asset;

import React, { useState } from "react";

import close from "../../assets/close.png";
import upload from "../../assets/artwork/upload.png";

const UploadNFT = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
  };

  return (
    <div className="flex flex-col p-8">
      <div className="flex justify-between items-center">
        <p className="text-sm sm:text-lg text-[#C4C4C4]">Welcome, NEW USER!</p>
        <button className="px-2 py-1 text-sm sm:px-4 sm:py-2 border rounded-full border-inherit">
          Switch Account
        </button>
      </div>

      <p className="text-lg sm:text-2xl font-bold mt-6 mb-10 sm:mb-24">
        Upload Your NFT
      </p>

      {selectedImage ? (
        <div className="flex flex-col self-center">
          <img
            src={close}
            alt="close"
            className="absolute self-end w-5"
            onClick={() => setSelectedImage(null)}
          />
          <img
            src={selectedImage}
            alt="user"
            className="mb-4 w-80 self-center"
          />
        </div>
      ) : (
        <div className="bg-[#1E1B18] w-72 p-8 pt-14 flex flex-col items-center self-center text-center">
          <img src={upload} alt="upload" width={60} />
          <p className="text-lg mt-8 mb-1">Upload a file</p>
          <p className="text-xs">
            Files must be .jpeg, .png, or .mp4, and less than 1 mb in size.
          </p>
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={handleFileSelect}
            style={{ display: "none" }}
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="mt-4 bg-[#FD102C] py-1 w-full cursor-pointer"
          >
            Browse Files
          </label>
        </div>
      )}
    </div>
  );
};

export default UploadNFT;

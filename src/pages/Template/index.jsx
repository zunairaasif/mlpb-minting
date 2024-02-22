import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import close from "../../assets/vector.png";
import user from "../../assets/players/ryan.png";
import UploadNFT from "../../components/UploadNFT";

const options = [
  { id: 0, name: "Option A", image: user },
  { id: 1, name: "Option B", image: user },
  { id: 2, name: "Option C", image: user },
  { id: 3, name: "Option D", image: user },
];

const Template = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <UploadNFT />

      <div className="bg-[#1E1B18] p-6 h-screen flex flex-col items-center">
        <button className="self-end">
          <img src={close} alt="close" width={15} />
        </button>

        <p className="text-lg sm:text-2xl font-bold mb-12 self-start">
          Select your template
        </p>

        <div className="grid grid-cols-2 self-start w-full">
          {options.map((data) => (
            <div
              key={data.id}
              onClick={() => {
                if (click !== data.id) {
                  setClick(data.id);
                }
              }}
              className={`flex flex-col gap-4 mt-5 p-2 w-40 ${
                click === data.id && "border-2 border-[#393734]"
              }`}
            >
              <p>{data.name}</p>
              <div
                className={`${click !== data.id && "bg-[#D9D9D9]"} self-center`}
              >
                <img src={data.image} alt={data.name} width={100} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-10 px-6 items-end sm:mt-0 mt-20 sm:h-screen">
          <button
            onClick={() => navigate("/")}
            className="underline mb-2 text-sm"
          >
            Back
          </button>
          <button
            // disabled={click === null}
            onClick={() => navigate("/asset")}
            className="py-2 w-64 text-center text-sm bg-[#FD102C] cursor-pointer"
            // className={`py-2 w-64 text-center text-sm ${
            //   click === null
            //     ? "bg-gray-400 cursor-not-allowed"
            //     : "bg-[#FD102C] cursor-pointer"
            // }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Template;

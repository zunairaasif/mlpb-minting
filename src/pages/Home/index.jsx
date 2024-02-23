import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import down from "../../assets/down.png";
import dots from "../../assets/dots.png";
import del from "../../assets/menu/del.png";
import close from "../../assets/vector.png";
import edit from "../../assets/menu/edit.png";
import clone from "../../assets/menu/clone.png";
import ryan from "../../assets/players/ryan.png";
import joel from "../../assets/players/joel.png";
import publish from "../../assets/menu/publish.png";
import custom from "../../assets/artwork/custom.png";
import upload from "../../assets/artwork/upload.png";
import pack from "../../assets/createNew/package.png";
import brandon from "../../assets/players/brandon.png";
import ryanHall from "../../assets/players/ryanHall.png";
import template from "../../assets/artwork/template.png";
import campaign from "../../assets/createNew/campaign.png";
import collection from "../../assets/createNew/collection.png";
import collectible from "../../assets/createNew/collectible.png";

const filters = [
  { id: 0, name: "All NFTs" },
  { id: 1, name: "Pending" },
  { id: 2, name: "Drafts" },
  { id: 3, name: "Listed" },
];

const createNew = [
  { id: 0, name: "Collectible", icon: collectible },
  { id: 1, name: "Variable Collection", icon: collection },
  { id: 2, name: "Pack", icon: pack },
  { id: 3, name: "Campaign", icon: campaign },
];

const users = [
  {
    id: 0,
    name: "Ryan Greenspan",
    price: "$340",
    num: "#138",
    type: "Draft",
    image: ryan,
  },
  {
    id: 1,
    name: "Ryan Hall",
    price: "$230",
    num: "#8",
    type: "Pending",
    image: ryanHall,
  },
  {
    id: 2,
    name: "Joel Eaton",
    price: "$193",
    num: "#201",
    type: "Draft",
    image: joel,
  },
  {
    id: 3,
    name: "Brandon Unger",
    price: "$193",
    num: "#201",
    type: "Listing",
    image: brandon,
  },
];

const menu = [
  { id: 0, name: "Publish", icon: publish },
  { id: 1, name: "Edit", icon: edit },
  { id: 2, name: "Clone", icon: clone },
  { id: 3, name: "Delete", icon: del },
];

const artwork = [
  {
    id: 0,
    title: "Upload your own",
    desc: "If you have existing artwork ready, simply upload your media and mint today.",
    btn: "Started",
    icon: upload,
  },
  {
    id: 1,
    title: "Use a template",
    desc: "Enhance your artwork with premium frames and animations.",
    btn: "Select template",
    icon: template,
  },
  {
    id: 2,
    title: "Custom design",
    desc: "Contract design services to produce original artwork for minting.",
    btn: "Get in touch",
    icon: custom,
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(null);
  const [clickId, setClickId] = useState(null);
  const [activeFilter, setActiveFilter] = useState(0);
  const filteredUsers =
    activeFilter === 1
      ? users.filter((user) => user.type === "Pending")
      : activeFilter === 2
      ? users.filter((user) => user.type === "Draft")
      : activeFilter === 3
      ? users.filter((user) => user.type === "Listing")
      : users;

  const handleFilterClick = (id) => {
    setActiveFilter(id === activeFilter ? null : id);
  };

  const handleClick = (id) => {
    if (id === 1) {
      navigate("/template");
    }
  };

  return (
    <div className="p-8 flex flex-col">
      <button className="self-end">
        <img src={close} alt="close" width={15} />
      </button>

      <div className="px-4">
        <div className="flex items-center gap-4 sm:gap-44">
          <p className="text-sm sm:text-lg text-[#C4C4C4]">
            Welcome, NEW USER!
          </p>
          <button className="px-2 py-1 text-sm sm:px-4 sm:py-2 border rounded-full border-inherit">
            Switch Account
          </button>
        </div>

        <div className="flex flex-col mt-10 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3 sm:gap-10">
            <p className="text-lg sm:text-3xl">My NFTs</p>
            <div className="flex gap-2">
              {filters.map((data) => (
                <button
                  key={data.id}
                  onClick={() => handleFilterClick(data.id)}
                  className={`px-2 py-1 text-xs sm:px-3 sm:py-2 border rounded-full border-[#5000AC] ${
                    activeFilter === data.id && "bg-[#5000AC]"
                  }`}
                >
                  {data.name}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              onClick={() => setClickId(!clickId)}
              className="flex items-center mt-4 pl-3 pr-3 py-2 justify-between sm:mt-0
            sm:pl-14 sm:pr-6 sm:gap-10 text-sm bg-[#FD102C] cursor-pointer"
            >
              <p>Create New</p>
              <img
                className={`w-3 h-2 ${clickId && "rotate-180"}`}
                src={down}
                alt="open"
              />
            </div>

            {clickId && (
              <div className="absolute w-full bg-[#1E1B18]">
                {createNew.map((data) => (
                  <ul key={data.id} className="py-2 px-4">
                    <li
                      className={`flex text-xs items-center gap-3 cursor-pointer 
                    ${data.id === 3 && "text-[#393734]"} `}
                    >
                      <img src={data.icon} alt="icons" className="w-3 h-3" />
                      {data.name}
                      {data.id === 3 && (
                        <span className="text-white"> coming soon</span>
                      )}
                    </li>
                  </ul>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-10 mt-10">
          {filteredUsers.map((data) => (
            <div key={data.id} className="mb-4">
              <div className="bg-[#1A0C0E] p-2">
                <div className="flex justify-between">
                  <div className="px-3 py-1 bg-[#FFFFFF] text-black text-sm font-bold">
                    {data.type}
                  </div>

                  <div
                    onClick={() => setClick(data.id === click ? null : data.id)}
                    className="px-3 py-2 bg-[#FFFFFF] cursor-pointer"
                  >
                    <img src={dots} alt="dots" />
                  </div>
                </div>

                {click === data.id && (
                  <div className="flex flex-col items-end">
                    <div className="absolute w-32 bg-[#FFFFFF] text-black">
                      {menu.map((data) => (
                        <ul key={data.id} className="py-2 px-4">
                          <li className="flex leading-3 text-xs items-center gap-3 cursor-pointer font-bold">
                            <img
                              src={data.icon}
                              alt="icons"
                              className="w-3 h-3"
                            />
                            {data.name}
                          </li>
                        </ul>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-center">
                  <img src={data.image} alt="user" width={150} />
                </div>
              </div>

              <div className="bg-[#393734] px-3 py-1">
                <p className="text-sm">{data.name}</p>
                <p className="text-xs text-[#C4C4C4]">PLAYER CARD</p>
                <div className="flex justify-between mt-1">
                  <p className="text-xs">{data.price}</p>
                  <p className="text-xs text-[#C4C4C4]">{data.num}</p>
                </div>
              </div>
            </div>
          ))}

          {activeFilter === 0 &&
            users
              .slice()
              .reverse()
              .map((data) => (
                <div key={data.id} className="mb-4">
                  <div className="bg-[#1A0C0E] flex flex-col items-center">
                    <img
                      src={data.image}
                      alt="user"
                      width={140}
                      className="p-3 sm:py-4 sm:px-0"
                    />
                  </div>

                  <div className="bg-[#393734] px-3 py-1">
                    <p className="text-sm">{data.name}</p>
                    <p className="text-xs text-[#C4C4C4]">PLAYER CARD</p>
                    <div className="flex justify-between mt-1">
                      <p className="text-xs">{data.price}</p>
                      <p className="text-xs text-[#C4C4C4]">{data.num}</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 mt-10 justify-center">
          {artwork.map((data) => (
            <div
              key={data.id}
              className="bg-[#1E1B18] flex flex-col items-center justify-center pb-6 pt-12 px-2"
            >
              <div className="bg-[#1A0C0E] p-6 rounded-full">
                <img
                  src={data.icon}
                  alt={data.title}
                  className="sm:w-20 w-10"
                />
              </div>

              <div className="flex-col text-center mt-10 sm:px-10 leading-7">
                <p className="font-bold">{data.title}</p>
                <p className="text-xs">{data.desc}</p>
              </div>

              <button
                onClick={() => handleClick(data.id)}
                className="bg-[#FD102C] w-full py-2 text-sm mt-6"
              >
                {data.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

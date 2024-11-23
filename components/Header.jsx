"use client";

import React, { useState } from "react";
import Logo from "./icons/Logo";
import SmallScreenLogo from "./icons/SmallScreenLogo";
import ShoppingcartLogo from "./icons/ShoppingcartLogo";
import Menuicon from "./icons/Menuicon";
import Cross from "./icons/Cross";

const HeaderItems = [
  {
    id: 1,
    name: "Products",
    subNames: [
      { id: 1, item: "Ledger Flex" },
      { id: 2, item: "Ledger Stax" },
      { id: 3, item: "Ledger Nano X" },
      { id: 4, item: "Ledger Nano S Plus" },
      { id: 5, item: "Compare our devices" },
      { id: 6, item: "Hardware Wallet" },
      { id: 7, item: "Packs" },
      { id: 8, item: "Accessories" },
      { id: 9, item: "Collaborations" },
      { id: 10, item: "See all products" },
      { id: 11, item: "----" },
      { id: 12, item: "Download Ledger Live" },
      { id: 13, item: "Supported crypto" },
    ],
  },
  {
    id: 2,
    name: "App and Services",
    subNames: [
      { id: 1, item: "Ledger Live" },
      { id: 2, item: "Ledger Recover" },
      { id: 3, item: "CL Card" },
      { id: 4, item: "Supported Services" },
      { id: 5, item: "Crypto Prices" },
    ],
  },
  {
    id: 3,
    name: "Learn",
    subNames: [
      { id: 1, item: "Ledger Academy" },
      {
        id: 2,
        item: "Learn and Earn",
      },
      {
        id: 3,
        item: "Classroom",
      },
      {
        id: 4,
        item: "Blog",
      },
      {
        id: 5,
        item: "What is crypto wallet",
      },
      { id: 6, item: "How to buy" },
      {
        id: 7,
        item: "How to Swap",
      },
      {
        id: 8,
        item: "How to Stake",
      },
    ],
  },
  {
    id: 4,
    name: "For Business",
    subNames: [
      {
        id: 1,
        item: "Ledger Enterprise Solution",
      },
      {
        id: 2,
        item: "Ledger Partners",
      },
      {
        id: 3,
        item: "Ledger Co-branded Partnership",
      },
    ],
  },
  {
    id: 5,
    name: "For Developers",
  },
  { id: 6, name: "Support" },
  {
    id: 7,
    name: "English",
    subNames: [
      { id: 1, item: "one" },
      { id: 2, item: "one" },
      { id: 3, item: "one" },
    ],
  },
];

function Header() {
  const [hoverItemId, setHoverItemID] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isclicked, setisClicked] = useState(null);

  const handleclick = (id) => {
    if (isclicked === id) {
      setisClicked(null);
    } else {
      setisClicked(id);
    }
  };

  return (
    <div className="flex flex-col">
      <div
        className={`bg-[#000000]  w-screen h-16 flex  flex-row  justify-between items-center ${
          isOpen ? "bg-white" : "bg-[#000000]"
        }`}
      >
        <div className="lg:ml-28  lg:hidden sm1:ml-8 md:ml-12 ml-5">
          <SmallScreenLogo fillcolor={isOpen ? "black" : "white"} />
        </div>
        <div className="hidden lg:block lg:ml-10">
          <Logo />
        </div>
        <div className="flex flex-row lg:hidden justify-center items-center gap-5 mr-5 sm1:mr-8 md:mr-12 lg:mr-6">
          <button>
            <ShoppingcartLogo fillcolor={isOpen ? "black" : "white"} />
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <Cross /> : <Menuicon />}
          </button>
        </div>
        <div className="hidden lg:block">
          <ul className="flex flex-row justify-center items-center gap-6 mr-20">
            {HeaderItems.map((item) => (
              <li
                key={item.id}
                className="text-white cursor-pointer relative font-semibold text-sm"
                onMouseEnter={() => setHoverItemID(item.id)}
                onMouseLeave={() => setHoverItemID(null)}
                onClick={() => handleclick(item.id)}
              >
                <div className="flex flex-row justify-center items-center gap-1.5">
                  {item.name}
                  {item.subNames && (
                    <svg
                      className={`w-3 h-3 transform transition-transform ${
                        isclicked === item.id ? "rotate-0" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </div>
                {(hoverItemId === item.id || isclicked === item.id) &&
                  item.subNames && (
                    <div className="relative">
                      <div className="absolute left-3 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
                      <div className="text-black py-5 pl-3 pr-8 absolute w-52 bg-white mt-2">
                        <ul className="flex flex-col gap-5 w-full">
                          {item.subNames.map((item) => (
                            <li key={item.id} className="text-sm font-semibold">
                              {item.item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
              </li>
            ))}
            <ShoppingcartLogo fillcolor={"white"} />
          </ul>
        </div>
      </div>
      <div>
        {isOpen && (
          <div className="bg-[#FFFFFF] lg:hidden text-black mt-3 mb-4">
            <ul className="flex flex-col gap-4 text-sm font-bold ml-3 ">
              {HeaderItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() =>
                    setisClicked((prev) => (prev === item.id ? null : item.id))
                  }
                >
                  <div className="flex flex-row justify-start items-center gap-1">
                    {item.name}{" "}
                    {item.subNames && (
                      <svg
                        className={`w-5 h-5 transform transition-transform ${
                          isclicked === item.id ? "rotate-0" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>
                  {isclicked === item.id && item.subNames && (
                    <div className="p-5">
                      <ul className="flex flex-col gap-3 text-[#3c3b3b] font-normal">
                        {item.subNames.map((item) => (
                          <li key={item.id}>{item.item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
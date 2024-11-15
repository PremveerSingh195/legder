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
  { id: 7, name: "English" },
];

function Header() {
  const [hoverItemId, setHoverItemID] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isclicked, setisClicked] = useState(null);

  return (
    <div className="flex flex-col">
      <div className="bg-[#000000] w-screen h-16 flex flex-row justify-between items-center">
        <div className="lg:ml-28 ml-3 md:ml-7 lg:hidden">
          <SmallScreenLogo />
        </div>
        <div className="hidden lg:block lg:ml-10">
          <Logo />
        </div>
        <div className="flex flex-row lg:hidden justify-center items-center gap-4 mr-5 md:mr-7">
          <button>
            <ShoppingcartLogo />
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
              >
                {item.name}
                {hoverItemId === item.id && item.subNames && (
                  <div className="text-black py-5 pl-3 pr-8 absolute w-52 bg-white mt-2">
                    <ul className="flex flex-col gap-2 w-full">
                      {item.subNames.map((item) => (
                        <li key={item.id} className="text-sm font-semibold">
                          {item.item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        {isOpen && (
          <div className="bg-[#FFFFFF] lg:hidden text-black mt-3">
            <ul className="flex flex-col gap-4 text-sm font-bold ml-3">
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

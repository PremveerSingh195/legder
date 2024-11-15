import React from "react";
import Star from "./icons/Star";
import Halfstar from "./icons/Halfstar";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Download for",
    subname: "Windows",
    url: "https://www.ledger.com/wp-content/themes/ledger-v2/public/images/ledger-live/download-buttons/windows.svg",
  },
  {
    id: 2,
    name: "Download for",
    subname: "macOS",
    url: "https://www.ledger.com/wp-content/themes/ledger-v2/public/images/ledger-live/download-buttons/macos.svg",
  },
  {
    id: 3,
    name: "Download for",
    subname: "Linux",
    url: "https://www.ledger.com/wp-content/themes/ledger-v2/public/images/ledger-live/download-buttons/linux.svg",
  },
  {
    id: 4,
    name: "Download for",
    subname: "iOS",
    url: "https://www.ledger.com/wp-content/themes/ledger-v2/public/images/ledger-live/download-buttons/ios.svg",
  },
  {
    id: 5,
    name: "Download for",
    subname: "Android",
    url: "https://www.ledger.com/wp-content/themes/ledger-v2/public/images/ledger-live/download-buttons/android.svg",
  },
];

function Herosection1() {
  return (
    <div className="flex flex-col bg-[#000000] justify-center items-center w-screen">
      <div className="flex flex-row justify-center gap-16 items-center">
        <div className="text-white flex flex-col gap-5 py-36 justify-start items-start">
          <h1 className="text-[#d4a0ff] text-5xl font-semibold">
            A crypto wallet app <span className="text-white">and</span> <br />
            <span className="text-white">Web3 gateway</span>
          </h1>
          <h2 className="text-2xl font-bold">
            The best companion app to securely manage crypto and <br /> NFTs.
          </h2>
          <div>
            <div className="flex-row flex justify-center items-center gap-1 p-2 bg-[#171717] rounded-lg">
              <Star />
              <Star />
              <Star />
              <Star />
              <Halfstar />
              <p className="text-sm ml-2 font-bold">
                Trusted by over 6 million customers
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/hero-LL-landing-page.webp"
          width={620}
          height={600}
          alt="Ledger"
        />
      </div>
      <div className="flex flex-row pb-24 gap-5">
        {data.map((item) => (
          <div
            key={item.key}
            className="flex flex-row  text-white justify-center gap-2 items-center py-3.5  px-10 hover:border-[#d4a0ff] bg-custom-gradient border border-[#525252] rounded-[4px] hover:bg-custom-gadient-hover"
          >
            <Image src={item.url} width={60} height={60} alt="Platform" />
            <div className="flex flex-col justify-center items-start">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-2xl font-bold">{item.subname}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Herosection1;

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
    <div className="flex flex-col bg-[#000000] justify-center items-center w-screen xs:px-4">
      <div className="flex sm1:flex-row flex-col justify-center gap-16 sm1:gap-5 lg:gap-5 lg1:gap-8 items-center mx-3 md:mx-5 lg:mx-12">
        <Image
          src="/hero-LL-landing-page.webp"
          width={620}
          height={600}
          alt="Ledger"
          className="sm1:hidden pt-16"
        />
        <div className="text-white flex flex-col gap-5 lg:py-36 justify-start items-start">
          <h1 className="text-[#d4a0ff] text-[26px] sm:text-[] lg:text-6xl font-bold ">
            A crypto wallet app <span className="text-white "> and </span>
            <span className="text-white lg:block">Web3 gateway</span>
          </h1>
          <h2 className="text-[20px] font-bold">
            The best companion app to securely manage crypto and{" "}
            <span className="lg:block">NFTs.</span>
          </h2>
          <div className="mb-5 ">
            <div className="flex-row flex justify-center items-center gap-1 p-2 bg-[#171717] rounded-lg">
              <Star />
              <Star />
              <Star />
              <Star />
              <Halfstar />
              <p className="text-sm ml-2 font-bold flex-wrap">
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
          className="hidden sm1:block sm1:w-72 sm1:h-80 md:w-[350px] md2:h-80 md2:w-[400px] lg:h-[350px] lg:w-[450px] lg1:min-h-[400px] lg1:h-auto lg1:min-w-[500px] lg1:w-auto"
        />
      </div>
      <div className="md:hidden flex flex-row px-10 justify-center items-center gap-2 sm1:mt-10 mb-5">
        <img
          src="/app-store.webp"
          alt="Appstore"
          className="min-w-[120px] min-h-[40px] max-w[150px] max-h-[50px]"
        />
        <img
          src="/google-play.webp"
          alt="Playstore"
          className="min-w-[120px] min-h-[40px] max-w[150px] max-h-[50px]"
        />
      </div>
      <p className="text-white font-semibold text-sm mt-3 md:hidden mb-16">
        Also available on desktop
      </p>
      <div className="md:grid md:grid-cols-2 md1:grid-cols-3 lg1:grid-cols-4 xl:grid-cols-5 md:mt-16 lg:-mt-14 lg1:mt-1 pb-24 gap-5 hidden md1:px-14 lg1:px-30">
        {data.map((item) => (
          <div
            key={item.key}
            className="flex flex-row  text-white justify-center gap-2 items-center py-3.5  px-8 hover:border-[#d4a0ff] bg-custom-gradient border border-[#525252] rounded-[4px] hover:bg-custom-gadient-hover md:px-[40px]"
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

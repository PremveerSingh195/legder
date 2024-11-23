import React from "react";

function Herosection2() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#000000] text-white lg:px-24  xl:px-32 sm1:px-7 px-4 ">
      <div className="flex flex-row justify-center items-start gap-10">
        <div className="flex flex-col justify-start items-start gap-5 lg:w-[80%] mx-3 xs:mx-4">
          <h2 className="lg:text-5xl text-2xl xs:text-3xl font-bold">
            A multi-crypto wallet app to secure thousands of coins and NFTs
          </h2>
          <p className="font-bold lg:text-xl sm:text-lg">
            A free Bitcoin wallet app and much more
          </p>
        </div>
        <div className="md2:w-80 bg-[#232121] hover:bg-[#424242] px-3 py-3 md2:flex justify-center items-center rounded-full border-[#fff] border hidden ">
          <button className="font-semibold">See all supported cryptos</button>
        </div>
      </div>
      <div></div>
      <div className="w-auto my-5 bg-[#232121] hover:bg-[#424242] px-4 py-3 flex justify-center items-center rounded-full border-[#fff] border md2:hidden">
        <button className="font-semibold">See all supported cryptos</button>
      </div>
    </div>
  );
}

export default Herosection2;
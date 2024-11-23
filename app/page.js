import Header from "@/components/Header";
import Herosection1 from "@/components/Herosection1";
import Image from "next/image";
import Herosection2 from "@/components/Herosection2";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center overflow-x-clip bg-[#000000]">
      <Header />
      <Herosection1 />
      <Herosection2 />
    </div>
  );
}

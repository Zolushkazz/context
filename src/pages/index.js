import Image from "next/image";
import { Inter } from "next/font/google";
import One from "@/components/One";
import { MainProvider } from "@/components/MainProvider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainProvider.Provider value={{ name, setName }}>
      <One na="Zoluush" />
    </MainProvider.Provider>
  );
}

import Image from "next/image";
import SearchBar from "./components/SearchBar";
import Dropdown from "./components/Dropdown/Dropdown";

export default function Home() {
  return (
    <main className="p-2">
      <header>
        <div className="flex justify-between" >
          <Image src="/images/logo.svg" alt="Site logo" width={140} height={40} />
          <Dropdown />
        </div>
      </header>
      <h1 className="text-6xl text-white font-bold text-center p-10">How's the sky looking today?</h1>
      <SearchBar />
    </main>
  );
}

import Image from "next/image";

import { Button } from "../ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { SearchModal } from "../searchbar/search-modal";

export const Header = () => {
  return (
    <header className="lg:px-12 md:mb-6 md:px-8 p-4 border-b border-slate-300">
      <nav className="w-full flex justify-between items-center">
        <Image src={"/logo.svg"} alt="logo" width={95} height={15} priority />
        <div className="flex flex-row gap-2 justify-center items-center">
          <SearchModal />
          <Button size={"icon"} variant={"outline"}>
            <HamburgerMenuIcon fontSize={24} />
          </Button>
        </div>
      </nav>
    </header>
  );
};

"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { SearchBar } from "./searchbar";

export const SearchModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} variant={"outline"} className="rounded-full">
          <MagnifyingGlassIcon fontSize={24} />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col items-center bg-white text-black rounded-lg sm:max-w-lg max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="md:text-xl font-normal sm:text-lg">
            Enter Pokemon Name or Id
          </DialogTitle>
          <DialogDescription aria-describedby="Search Pokemon" />
        </DialogHeader>
        <SearchBar />
      </DialogContent>
    </Dialog>
  );
};

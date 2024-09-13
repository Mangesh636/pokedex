import React from "react";
import { Input } from "../ui/input";

import { PokeApi } from "@/utils/api";
import { SearchProps } from "@/interface";

export const SearchBar = () => {
  const [search, setSearch] = React.useState("");
  const [suggestions, setSuggestions] = React.useState<SearchProps[]>([]);

  React.useEffect(() => {
    if (search.length > 2) {
      PokeApi.get("pokemon?limit=100000&offset=0")
        .then((res) => {
          const filteredSuggestions = res.data.results.filter(
            (pokemon: SearchProps) =>
              pokemon.name.toLowerCase().includes(search.toLowerCase())
          );
          console.log(filteredSuggestions);
          setSuggestions(filteredSuggestions);
        })
        .catch((error) => {
          console.log("Error fectching data from PokeApi", error);
        });
    } else {
      setSuggestions([]);
    }
  }, [search]);
  return (
    <div className="flex flex-col gap-4">
      <Input
        type="search"
        placeholder="Search here"
        className="mt-2 sm:w-96 w-72 p-6 text-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {suggestions.length > 0 && (
        <ul className="flex flex-col gap-2 max-h-56 overflow-scroll scroll-smooth">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="cursor-pointer border rounded-3xl pl-6 p-2 hover:bg-zinc-300/30"
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

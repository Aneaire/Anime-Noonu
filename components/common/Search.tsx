"use client";

import { useSearchAnime } from "@/utils/react-query/query";
import { Loader, SearchIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import NodataToShow from "./NodataToShow";
import PlainInput from "./PlainInput";

const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [onSearch, setOnSearch] = useState(false);

  const { mutate: searchAnime, data, isPending } = useSearchAnime();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchAnime(searchValue.toLowerCase());
  };

  console.log(data);

  return (
    <>
      <div
        className={`flex absolute max-w-[300px] transition-all duration-500 top-2 right-2 z-10 px-2 rounded-md ${
          search ? " bg-background lg:max-w-600 w-3/6" : " bg-slate-700 w-fit"
        }`}
      >
        <span className=" flex items-center cursor-pointer px-1 py-2">
          {isPending ? (
            <Loader className=" animate-spin" />
          ) : (
            <SearchIcon
              className=" scale-140"
              onClick={() => setSearch(!search)}
            />
          )}
        </span>
        <form action="submit" onSubmit={handleSubmit}>
          <PlainInput
            handleBlur={() => setTimeout(() => setOnSearch(false), 100)}
            onChange={setSearchValue}
            onClick={() => setOnSearch(true)}
            placeholder="Search"
            className={`px-0 w-0 placeholder:hidden duration-150 transition-all ease-in delay-500 ${
              search && "px-2 w-full"
            }`}
          />
        </form>
      </div>
      {data && onSearch && (
        <div className="absolute bg-sBackground top-12 right-2 z-10 rounded-md w-10/12 mx-auto md:mx-0 md:w-7/12 lg:w-5/12 overflow-y-scroll max-h-[400px] no-scrollbar border-sBackground border-4">
          {data.suggestions.length === 0 && <NodataToShow text="No results" />}
          {data?.suggestions?.map((suggestion) => (
            <div
              onClick={() =>
                router.push(`/anime/episodes/${suggestion.id}?watchNow=true`)
              }
              className=" cursor-pointer h-fit flex hover:bg-background transition-colors px-2 py-2 border-b-2 border-background"
              key={suggestion.id}
            >
              <div className=" w-[80px] h-[120px] relative object-cover rounded ">
                <Image
                  draggable={false}
                  className="object-cover"
                  src={suggestion.poster}
                  alt={suggestion.name}
                  fill
                  sizes="2000px"
                />
              </div>
              <div className="pl-2 w-full">
                <p className=" text-xl font-bold ">{suggestion.name}</p>
                <p>{suggestion.moreInfo[2]}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Search;

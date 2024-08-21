import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggesetion from "./GptMovieSuggesetion";
import { BG_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen md:h-[100%] object-cover" src={BG_IMG} alt="logo" />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggesetion />
      </div>
    </>
  );
};

export default GptSearch;

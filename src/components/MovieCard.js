import React, { useState } from "react";
import { IMG_URL_PATH } from "../utils/constants";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const MovieCard = ({ movieKey }) => {
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "310",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div>
      <div className="w-36 md:w-48 pr-4">
        <img
          key={movieKey.id}
          onClick={() => handleClick(movieKey)}
          // className="object-contain"
          src={IMG_URL_PATH + movieKey.poster_path}
          alt={movieKey.name}
        ></img>
      </div>
      <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div>
    </div>
  );
};

export default MovieCard;

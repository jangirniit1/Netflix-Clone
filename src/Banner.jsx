import React, { useState, useEffect } from "react";
import axios from "axios";
import endpoints from "./endpoints";

function Banner() {
  const [bannerImg, setBannerImg] = useState({});
  const img_baseURL = "https://image.tmdb.org/t/p/original/";
  const API_KEY = "83cc7645619bf29b32782f33f5c4b203";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        console.log(response.data.results);
        const randomIndex = Math.floor(
          Math.random() * response.data.results.length
        );
        setBannerImg(response.data.results[randomIndex]);
      });
  }, []);

  return (
    <div
      className="bannerImage"
      style={{
        backgroundImage: `url(${img_baseURL}${bannerImg.backdrop_path})`,
      }}
    ></div>
  );
}

export default Banner;

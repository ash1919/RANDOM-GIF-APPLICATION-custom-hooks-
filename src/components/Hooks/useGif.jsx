import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (category) => {
  console.log(category);
  const [gif, setGif] = useState("");

  const fetchGif = async (category) => {
    const { data } = await axios.get(category ? `${url}&tag=${category}` : url);

    const imageSrc = data.data.images.downsized_large.url;

    setGif(imageSrc);
  };
  useEffect(() => {
    fetchGif(category);
  }, [category]);

  return { gif, fetchGif };
};

export default useGif;

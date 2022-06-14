import React, { useState } from "react";
import useGif from "./Hooks/useGif";

const Tag = () => {
  const [category, setCategory] = useState("dog");
  const { gif, fetchGif } = useGif(category);
  
  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img width="500" height="500" src={gif} alt="Random Gif" />
      <input
        type="text"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />
      <button onClick={() => fetchGif(category)}>CLICK FOR NEW</button>
    </div>
  );
};

export default Tag;

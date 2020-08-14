import React from "react";
import Giphy from "./Giphy";

function GiphyList(props) {
  const allGiphies = props.giphies.map((giphy, index) => {
    return <Giphy giphy={giphy} key={index} />;
  });
  return (
    <div>
      <h1>GiphyList</h1>
      {allGiphies}
    </div>
  );
}

export default GiphyList;

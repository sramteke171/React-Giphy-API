import React, { Component } from "react";

//we are not doing class because this component doesnt have state
function Giphy(props) {
  return (
    <div>
      <h2> Giphy</h2>
      {/* {props.Giphy} */}
      <img src={props.giphy.images.preview_gif.url}></img>
      <img src={props.giphy.images.original.url}></img>
      {/* <img src="https://media1.giphy.com/media/3oz8xH46dD1DSx3vNK/480w_s.jpg?cid=622a4ef6vt9g1k2n0mqe0j7e113aj8eyz3aj4vze8awour4s&rid=480w_s.jpg"></img> */}
    </div>
  );
}

export default Giphy;

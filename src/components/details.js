import React from "react";

function Details(props) {
  return (
    <div>
      <h4> {props.title} </h4>
      <p>{props.info} </p>
    </div>
  );
}

export default Details;

import React from "react";

function Video(props) {
  let source = `https://www.youtube.com/embed/${props.vid}?controls=1`;
  return (
    <div>
      <iframe width="100%" height="345" src={source} />
    </div>
  );
}

export default Video;

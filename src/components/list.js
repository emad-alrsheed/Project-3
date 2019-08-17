import React from "react";

function List(props) {
  return (
    <div className="list">
      {props.items.map((item, index) => {
        return (
          <div
            className="listItem"
            onClick={() => {
              props.clickHandler(index);
            }}
          >
            <img src={item.snippet.thumbnails.default.url} />
            <p>{item.snippet.title} </p>
          </div>
        );
      })}
    </div>
  );
}

export default List;

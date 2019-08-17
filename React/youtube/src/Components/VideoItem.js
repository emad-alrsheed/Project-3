import React, { Component } from "react";

export default class VideoItem extends Component {
  state = {};

  render() {
    return (
      <>
        <dev
          className="item"
          onClick={this.props.openVideo.bind(this, this.props.item)}
        >
          <div>
            <img
              style={{ maxWidth: "180px", maxHeight: "200px" }}
              src={this.props.item.snippet.thumbnails.medium.url}
              alt="thumbnails"
            />
          </div>
          <div>{this.props.item.snippet.title}</div>
        </dev>
        <hr />
      </>
    );
  }
}

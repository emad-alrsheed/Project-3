import React, { Component } from "react";

export default class VideoItem extends Component {
  state = {};

  render() {
    return (
      <>
        <dev
          className="item"
          onClick={this.props.openVideo.bind(this, this.props.items)}
        >
          <div>
            <img
              style={{ maxWidth: "180px", maxHeight: "200px" }}
              src={this.props.items.snippet.thumbnails.medium.url}
              alt="thumbnails"
            />
          </div>
          <div>{this.props.items.snippet.title}</div>
        </dev>
        <hr />
      </>
    );
  }
}

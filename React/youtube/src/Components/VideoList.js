import React, { Component } from "react";
import VideoItem from "./VideoItem";

export default class VideoList extends Component {
  state = {};

  render() {
    return (
      <>
        <dev className="videoList">
          {this.props.items.map((elem, index) => (
            // maping through items, to store every item as prop to Videoitem component
            <VideoItem
              items={elem}
              openVideo={this.props.openVideo}
              key={index}
            />
          ))}
        </dev>
      </>
    );
  }
}

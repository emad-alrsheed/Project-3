import React, { Component } from "react";

export default class VideoPlayer extends Component {
  state = {};

  render() {
    if (this.props.t === 0)
      // this if statement is to show a message that indecates that the search term doesnt match any results .. by checking the total results (which is a prop called t)
      return (
        <>
          <dev>
            <h3 style={{ textAlign: "center" }}>No results found</h3> Try
            different keywords or remove search filters
          </dev>
        </>
      );
    return (
      <>
        <dev className="Video">
          <iframe
            width="560"
            height="315"
            title="Youtube VideoPlayer"
            src={this.props.url}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </dev>
      </>
    );
  }
}

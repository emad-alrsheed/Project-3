import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/search.js";
import Video from "./components/video";
import List from "./components/list";
import Details from "./components/details";

class mainApp extends Component {
  state = {
    youtubeData: {},
    id: 0
  };

  componentDidMount() {
    let request = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=Orca&type=video&key=AIzaSyDJfV4Io9lIg28IVDUllIywSI1_v6qWwSk`;

    axios
      .get(request)
      .then(response => {
        this.setState({ youtubeData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  clickHandler = i => {
    this.setState({ id: i });
  };

  searchRequest = s => {
    let request = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${s}&type=video&key=AIzaSyDJfV4Io9lIg28IVDUllIywSI1_v6qWwSk`;
    axios
      .get(request)
      .then(response => {
        this.setState({ youtubeData: response.data, id: 0 });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <h1>React youtube</h1>
        <Search className="top" searchRequest={this.searchRequest} />

        <div className="bottom">
          {this.state.youtubeData.items && (
            <div className="videoAndDetail">
              <Video vid={this.state.youtubeData.items[this.state.id].id.videoId} />
              <Details
                info={this.state.youtubeData.items[this.state.id].snippet.description}
                title={this.state.youtubeData.items[this.state.id].snippet.title}
              />
            </div>
          )}

          {this.state.youtubeData.items && (
            <List className="list" items={this.state.youtubeData.items} clickHandler={this.clickHandler} />
          )}
        </div>
      </div>
    );
  }
}

export default mainApp;

import React, { Component } from "react";
import "./App.css";
import VideoPlayer from "./Components/VideoPlayer";
import VideoList from "./Components/VideoList";
import SearchBar from "./Components/SearchBar";
import VideoDetail from "./Components/VideoDetail";
import axios from "axios";

var myKey = "AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA"; // this is a key for youtube api
var maxResults = 3; // this variable is to declare how many maximum results

export default class App extends Component {
  state = {
    u: "", // this key to store the video's url which will be opened
    items: [], // this key to store "maximum results" videos shows up by using the search
    description: "", // this key to store the description of opened video
    title: "" // this key to store the title of opened video
  };

  search = (q, Clean) => {
    // this function is to get the videos from the search term, and to get the total results(to check if there are any videos, or the serach doesnt match any result), and to implement the clear function which will clear the search box after clicking on the search button

    // while(q.indexOf("+") !== -1)
    // q = q.replace("+" ,"%2B")
    // those statements are to get the exact search term (in the url) when using special characters (by replacing every special character with the real strings that represent those special characters) .. instead of using encodeURIComponent
    // q = q.replace(/[%]/g, "%25"); //8 ... put this statement on the first to avoid replacing any other % (while converting the another special characters)
    // q = q.replace(/[+]/g, "%2B"); //1
    // q = q.replace(/[~]/g, "%7E"); //2
    // q = q.replace(/[`]/g, "%60"); //3
    // q = q.replace(/[!]/g, "%21"); //4
    // q = q.replace(/[@]/g, "%40"); //5
    // q = q.replace(/[#]/g, "%23"); //6
    // q = q.replace(/[$]/g, "%24"); //7
    // q = q.replace(/\^/g, "%5E"); //9
    // q = q.replace(/[&]/g, "%26"); //10
    // q = q.replace(/[*]/g, "%2A"); //11
    // q = q.replace(/[(]/g, "%28"); //12
    // q = q.replace(/[)]/g, "%29"); //13
    // q = q.replace(/[=]/g, "%3D"); //14
    // q = q.replace(/[\\]/g, "%5C"); //15
    // q = q.replace(/[?]/g, "%3F"); //16
    // q = q.replace(/[/]/g, "%2F"); //17
    // q = q.replace(/[|]/g, "%7C"); //18
    // q = q.replace(/[<]/g, "%3C"); //19
    // q = q.replace(/[>]/g, "%3E"); //20
    // q = q.replace(/[;]/g, "%3B"); //21
    // q = q.replace(/[:]/g, "%3A"); //22
    // q = q.replace(/[']/g, "%27"); //23
    // q = q.replace(/["]/g, "%22"); //24
    // q = q.replace(/[[]/g, "%5B"); //25
    // q = q.replace(/[\]]/g, "%5D"); //26
    // q = q.replace(/[{]/g, "%7B"); //27
    // q = q.replace(/[}]/g, "%7D"); //28
    // q = q.replace(/ /g, "%20"); //29

    q = encodeURIComponent(q); // this statement is to replace every special character to A new string representing the provided string encoded as a Uniform Resource Identifier (URI) component.
    console.log(q);
    if (q === "") return; // this if statement is to avoid searching when theres no content in the search box

    // var x = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${q}&type=video&key=${myKey}`; // this variable is to store the http link to get the data from youtube .. using 3 variables in it: q which is the search term, maxResults to specifiy the maximum results, and myKey which is the youtube api key.
    // console.log(q);
    // console.log(x);

    axios // using axios method to get the data
      .get(`http://localhost:8600/search/${q}`)
      .then(response => {
        //  console.log(response.data.items);
        //  console.log(response.data.items[0].snippet.title);
        // console.log(response.data.pageInfo.totalResults);

        this.setState({
          items: response.data.items, //storing the vidoes
          totalResults: response.data.pageInfo.totalResults // stroing total results
        });
        // console.log(this.state.totalResults);
      })

      .catch(error => {
        console.log(error);
      });
    Clean(); // executing the clear function (to clear search box)
  };

  /* Below, another code for searching, using axios instance (axios.create):
  first, create a file for example YoutubeApi.js, and define instance:

  import axios from 'axios';
  export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/'
  })

  
  Then in app file, import and use it: ... using async + await (ES8) instead of then 
  
  search = async (q, Clean) => {
    if (q === "") return;
    const response = await YoutubeApi.get("/search", {
      params: {
        q: q,
        part: "snippet",
        maxResults: 3,
        key: myKey,
        type: "video"
      }
    });

    this.setState({
      items: response.data.items,
      totalResults: response.data.pageInfo.totalResults
    });
    Clean();
  }; */

  openVideo = item => {
    // this function to store the link, description and title of the selected video from vidoes list.
    // console.log(item.id.videoId)
    // console.log("____________")
    // console.log(item.snippet.description)
    this.setState({
      u: "https://www.youtube.com/embed/" + item.id.videoId, //this key to store the link of the selected video
      description: item.snippet.description, // this key to store the description
      title: item.snippet.title // this key to store the title
    });
    // console.log("BELOW")
    // console.log(this.state.u)
  };

  render() {
    if (this.state.totalResults === 0) {
      // this if statement is to clear any previous info (if exist) if the search doesnt match any results (total results = 0)
      this.state.u = "";
      this.state.description = "";
      this.state.title = "";
      // this.setState({u: "", description:"", title:""}) not using setState due to unwanted results (to prevent the react to re render some components)
    }

    return (
      <>
        <dev className="Body">
          <div className="searchDev">
            <SearchBar search={this.search} />{" "}
          </div>
          <div className="FLEX">
            <div className="videoAndDetailDev">
              <VideoPlayer url={this.state.u} t={this.state.totalResults} />
              <VideoDetail
                description={this.state.description}
                title={this.state.title}
                t={this.state.totalResults}
              />
            </div>
            <div className="listDev">
              <VideoList items={this.state.items} openVideo={this.openVideo} />
            </div>
          </div>
        </dev>
      </>
    );
  }
}

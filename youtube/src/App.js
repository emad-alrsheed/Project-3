import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import YouTubeSearch from 'youtube-api-search';
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail';

//your-API-key 
const API_KEY = 'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s';



export default class App extends Component {
  
  //constructor App component
  constructor(props){
    super(props);

    this.state = { 
        videos: [],
        selectedVideo: null
    };

    //default value for title search
    this.videoSearch('Maher Zain');
}


// search the title video and get result (method)

videoSearch=(searchTerm)=> {

  YouTubeSearch({key: API_KEY, term: searchTerm}, (data) => {
    //get videos - array of object
    console.log(data);

      this.setState({ 
          videos: data,
          selectedVideo: data[0]
      });
  });

}
  render() {
    const {selectedVideo,videos} = this.state;
    const {videoSearch}=this;
    return (
      <React.Fragment>
      <div>
        {/* calls components  */}

        <SearchBar videoSearch={videoSearch}/>

        <VideoDetail video={selectedVideo}/>

        <VideoList 
          onVideoSelect={videoUserSelected => this.setState({selectedVideo: videoUserSelected})}
          videos={videos} />

      </div>
      </React.Fragment>
    );
  }
}

 

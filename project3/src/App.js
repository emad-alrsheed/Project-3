import React, { Component } from 'react';
import Search from './components/Search';
import YouTubeSearch from 'youtube-api-search';
//install through npm 
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail';
const MYAPI ='AIzaSyAw6JZUllNqBiKl3NCqfqtA-oXvs_sRG5E';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
        videos: [], // my data from my api
        selectedVideo: null //the data selected
    };

    this.videoSearch('The World in 2030 and 2040');
    //youtube search with the term and returns us the result from youtube in data. It is an array of object 
}

videoSearch(searchValue) {
  YouTubeSearch({key: MYAPI, term: searchValue}, (data) => {
    //key my api , term the value in search bar
    console.log(data);
      this.setState({ 
          videos: data,
          selectedVideo: data[0] // the first item in array
      });
  });

}
  render() {
    return (
      <div>
        <Search SearchChange={searchValue => this.videoSearch(searchValue)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          videoSelect={userSelected => this.setState({selectedVideo: userSelected})}
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

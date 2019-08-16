
import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
// Import Other Components.
import Search from './Components/Search';
import Video from './Components/Video';
import List from './Components/List';

const API_KEY = 'AIzaSyAbU4azHjAu9ZeuAyqGeMvmkyqysD8Rrug';  // MY API KEY.
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';  // BASE URL TO MAKE SEARCH PROCESS USING IT.

class App extends Component{

  constructor(props) {
    super(props);
    // State Composed of tow things: 1- Array Of Videos Comes From API Response.   2- Selected Video State To Handle Which Video Is Selected From Videos List.
    this.state = {
      videos: [],
      selectedVideo: null
    }
    // Execute The Function That Make Search Process For Us.
    this.videosSearch('Galaxy Note 10');
  }

  // The Definition Of The Function That Make Search Process For Us.
    videosSearch (term){
      // Parameters That will Be Included In Request URL
      const params = {
        part: 'snippet',
        maxResults: 25,
        key: API_KEY,
        q: term,
        type: 'video'
      };
      //@Method GET
      //Fetch All Videos From Server To React App 
      axios.get(ROOT_URL, { params: params })
        .then(response => {
          console.log(response)
          this.setState({videos : response.data.items, // Set The Response Array To The Array in "App State"
                selectedVideo: response.data.items[0]}); // Set "Selected Video" To First Element Of Response Array
        })
        .catch(error => {
          console.error(error);
        });
      }

  render() {
    return (
      <div className="App">
        <Search onSearchTermChange={ searchTerm => this.videosSearch(searchTerm)}/>
        <Video video={this.state.selectedVideo}/>
        <List onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})} videos={this.state.videos} />
      </div>
    );
  }
}
export default App;

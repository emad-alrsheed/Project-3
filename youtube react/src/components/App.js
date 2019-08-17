import React from 'react';

import SearchBar from './SearchBar';
import youtube from './youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoItemShow';
// API KEY
const KEY =  'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s';

class App extends React.Component {
    // state array:videos bring from API response link.
    // selectedvideo:video selected from videos list.
    constructor(props){
        super(props);
        this.state={
          videos:[],
          selectedVideo:null
         
        };
        // shuld show what inside the video search.
        this.videoSearch('plane');
      }
    //   make search process.
    videoSearch(searchTerm){
        youtube({key:KEY, term:searchTerm},(data)=>{
          this.setState({
            videos:data,
            selectedVideo:data[0]
          });
        });
      }
    //   handelsubmit a prop to the SearchBar component to be able to take the term we want from the search bar.
    // add note.to check

    //   async: when I get data from API.
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }
    videoButton = async (val) => {
        let videosUrl = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s=${val}&part=snippet&maxResults=9&type=video`)
    }
    render() {
        return (
            
            <div className='ui container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit} 
                videoButton={this.videoButton}
                onSearchTermChange={searchTerm=>this.videoSearch(searchTerm)}/>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
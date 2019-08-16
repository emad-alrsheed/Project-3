import React ,{Component}from 'react';
import SearchBar from'./Component/SearchBar';
import axios from './Component/axios';
import VideoList from'./Component/VideoList';
import VideoItemShow from'./Component/VideoItemShow';
// import you from './you.png';
const APIKEY="AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s";

const KEY = 'AIzaSyAFUNYmE1gfydRFrlb3Q05gXlPSgQmiY6I';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
          videos:[],
          selectedVideo:null
         
        };
        this.videoSearch('plane');
      }
    videoSearch(searchTerm){
        youtube({key:KEY, term:searchTerm},(data)=>{
          this.setState({
            videos:data,
            selectedVideo:data[0]
          });
        });
      }
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

    render() {
        return (
            <div className='ui container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit} onSearchTermChange={searchTerm=>this.videoSearch(searchTerm)}/>
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




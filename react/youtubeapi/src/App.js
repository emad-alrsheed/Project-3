import React ,{Component}from 'react';
import SearchBar from'./Component/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from'./Component/VideoList'

const APIKey='useYourOwn';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      videos:[]
    };
    this.videoSearch('React tutorials');
  }
  videoSearch(term){
    YTSearch({key:APIKey, term:term},(data)=>{
      this.setState({
        videos:data
      });
    });
  }
  render(){
  return (
    <div >
      Youtube Project
       <SearchBar/>
       <VideoList videos={this.state.videos}/>
    </div>
  );
}
}

export default App;

import _ from 'lodash';
import React,{Component} from 'react';
import Search from "./component/Search";
import YTSearch from 'youtube-api-search';
import VideoList from './component/VideoList';
import VideoDetail from './component/VideoDetail';

const API='AIzaSyATSu9n7yTzx6DI1q7dczvFEx84Xa3rbbk';
// const channel_id='UCW5YeuERMmlnqo4oq8vwUpg';
// const Results = 50
// var full_url=`https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channel_id}&part=snippet,id&order=date&maxResults=${Results}`
export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('react js ');
  }

  videoSearch(term) {
    YTSearch({ key: API, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    },300);

    return (
      <div>
       <Search onSearchTermChange={videoSearch} /> 
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}



































  // constructor(props){
  // super(props);
  // this.state={
  //   vedio:[],
  // //   selectedVideo:null
  // };
  // this.videosearch("netnaja")
 


  // videosearch(searshterm){
  //  YTSearch({key:API,term:searshterm},(data)=>{
  //    this.setState({
  //      vedio:data,
  //      selectedVideo:data[0]
           
  //   })
  //  }
  //   )
  // }
  
  // componentDidMount(){
  //   fetch(full_url)
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     console.log("data:",data);
  //   })
  //   .catch(()=>{
  //     console.log("loding.......");
  //   })
  // }
 
//   render(){
//   return (
//     <>
//     {/* <Search Search={searshterm=>this.videosearch(searshterm)}/> */}
    
//     {/* <Playlist videoslected={userselected =>this.setState({selectedVideo:userselected})}
//     vedio={this.state.vedio}/> */}
//     </>
  
  
//   )
// }



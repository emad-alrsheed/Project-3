import React, {Component} from 'react';
import './App.css';
import VideoPlayer from './Components/VideoPlayer';
import VideoList from './Components/VideoList';
import SearchBar from './Components/SearchBar';
import VideoDetail from './Components/VideoDetail'
import axios from 'axios';

var myKey = "AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA"; 
var maxResults = 3;


export default class App extends Component {
 state = {
   u: "",
   items: [],
   description: "",
   title:""
 }
 
search = (q) => {
  var x = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${q}&type=video&key=${myKey}`
  // console.log(q)
  axios.get(x)

     .then(response => {

      //  console.log(response.data.items);
      //  console.log(response.data.items[0].snippet.title);


       this.setState({

        //  u: "https://www.youtube.com/embed/" + response.data.items[0].id.videoId,
         items: response.data.items

       });
      //  console.log(this.state.u);

     })

     .catch(error => {

       console.log(error);

     });
}

openVideo = (item) => {
  // console.log(item.id.videoId)
  // console.log("____________")
  // console.log(item.snippet.description)
  this.setState({
  u: "https://www.youtube.com/embed/" + item.id.videoId,
  description: item.snippet.description,
  title: item.snippet.title
  })
  // console.log("BELOW")
  // console.log(this.state.u)

}

 
  render(){
  return (
    <>
    <dev className="Body">
      <div className="searchBox">
      <SearchBar search = {this.search}/> </div>
      <div className="FLEX">
        <div>
      <VideoPlayer url = {this.state.u}/>
      <VideoDetail description= {this.state.description} title={this.state.title}/>

      </div>
      <div>
      <VideoList items={this.state.items} openVideo={this.openVideo} />
      {/* <VideoDetail description= {this.state.description}/> */}
      </div>
      </div>
      <div>
        
      </div>
    </dev>
    </>
  );
}
}

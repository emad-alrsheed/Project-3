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
  // while(q.indexOf("+") !== -1)
  // q = q.replace("+" ,"%2B")
  q = q.replace(/[%]/g ,"%25")//8
  q = q.replace(/[+]/g ,"%2B")//1
  q = q.replace(/[~]/g ,"%7E")//2
  q = q.replace(/[`]/g ,"%60")//3
  q = q.replace(/[!]/g ,"%21")//4
  q = q.replace(/[@]/g ,"%40")//5
  q = q.replace(/[#]/g ,"%23")//6
  q = q.replace(/[$]/g ,"%24")//7
  q = q.replace(/\^/g ,"%5E")//9
  q = q.replace(/[&]/g ,"%26")//10
  q = q.replace(/[*]/g ,"%2A")//11
  q = q.replace(/[(]/g ,"%28")//12
  q = q.replace(/[)]/g ,"%29")//13
  q = q.replace(/[=]/g ,"%3D")//14
  q = q.replace(/[\\]/g ,"%5C")//15
  q = q.replace(/[?]/g ,"%3F")//16
  q = q.replace(/[/]/g ,"%2F")//17
  q = q.replace(/[|]/g ,"%7C")//18
  q = q.replace(/[<]/g ,"%3C")//19
  q = q.replace(/[>]/g ,"%3E")//20
  q = q.replace(/[;]/g ,"%3B")//21
  q = q.replace(/[:]/g ,"%3A")//22
  q = q.replace(/[']/g ,"%27")//23
  q = q.replace(/["]/g ,"%22")//24
  q = q.replace(/[[]/g ,"%5B")//25
  q = q.replace(/[\]]/g ,"%5D")//26
  q = q.replace(/[{]/g ,"%7B")//27
  q = q.replace(/[}]/g ,"%7D")//28
  q = q.replace(/ /g ,"%20")//29



  var x = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${q}&type=video&key=${myKey}`
  console.log(q)
  console.log(x)

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

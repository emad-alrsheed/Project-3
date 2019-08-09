import React, {Component} from 'react';
import './App.css';
import VideoPlayer from './Components/VideoPlayer';
import VideoList from './Components/VideoList';
import SearchBar from './Components/SearchBar';


export default class App extends Component {
 state = {

 }
 
  render(){
  return (
    <>
    <dev className="Body">
      <SearchBar/>
      <VideoPlayer/>
      <VideoList/>
    </dev>
    </>
  );
}
}

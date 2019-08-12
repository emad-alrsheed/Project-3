import React, {Component} from 'react';
import VideoItem from './VideoItem';


export default class VideoList extends Component {
 state = {

 }
 
  render(){
  return (
    <>
    <dev className="videoList">
    {this.props.items.map(elem =>  <VideoItem items={elem} openVideo ={this.props.openVideo}/> )}
    </dev>
    </>
  );
}
}

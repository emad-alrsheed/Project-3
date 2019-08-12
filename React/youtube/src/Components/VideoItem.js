import React, {Component} from 'react';


export default class VideoItem extends Component {
 state = {

 }
//  openVideo = () => {
//    this.setState({
//      u: u
//    })

//  }

changeCursor = () => {
  this.style = {cursor: "pointer"}
}

 
  render(){
  return (
    <>
    <dev className="item" onClick={this.props.openVideo.bind(this,this.props.items)} >
    <img src={this.props.items.snippet.thumbnails.default.url} alt="thumbnails"/>
    {this.props.items.snippet.title}
    </dev>
    </>
  );
}
}

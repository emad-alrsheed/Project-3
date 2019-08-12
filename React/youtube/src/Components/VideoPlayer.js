import React, {Component} from 'react';

export default class VideoPlayer extends Component {
 state = {

 }
 
  render(){
  return (
    <>
    <dev className="searchBar1">
      <iframe width="560" height="315" src={this.props.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </dev>
    </>
  );
}
}

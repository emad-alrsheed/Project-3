import React, {Component} from 'react';

export default class VideoPlayer extends Component {
 state = {

 }
 
  render(){
    if(this.props.t ===0)
      return <><dev><h3 style={{textAlign:"center"}}>No results found</h3> Try different keywords or remove search filters </dev></>
  return (
    <>
    <dev className="searchBar1">
      
      <iframe width="560" height="315" src={this.props.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </dev>
    </>
  );
}
}

import React, {Component} from 'react';


export default class VideoDetail extends Component {
 state = {

 }

  render(){
  return (
    <>
    <dev className="VideoDetail" >
        {this.props.description}
    </dev>
    </>
  );
}
}

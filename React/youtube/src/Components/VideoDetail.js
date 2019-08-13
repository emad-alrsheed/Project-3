import React, {Component} from 'react';


export default class VideoDetail extends Component {
 state = {

 }

  render(){
    if(this.props.t===0)
    return "";
  return (
    <>
    <dev className="VideoDetail" style={{

border: (this.props.description) ? '0.5px solid gray' : 'none'

}}>
        <h6 style={{fontWeight:"bold"}}>{this.props.title}</h6>
        {this.props.description}
    </dev>
    </>
  );
}
}

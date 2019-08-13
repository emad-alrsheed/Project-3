import React, {Component} from 'react';


export default class VideoDetail extends Component {
 state = {

 }

  render(){
  return (
    <>
    <dev className="VideoDetail" style={{

border: (this.props.description) ? '0.5px solid gray' : 'none'

}}>
        {this.props.description}
    </dev>
    </>
  );
}
}

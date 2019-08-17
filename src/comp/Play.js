import React, { Component } from 'react';
import ListItem from './ListItem'
class Play extends Component {

  state = { }

  render() {
    return (
      <>
        <div style={{ paddingTop: "7px" }} className="col-4 ">
          <div className="row">
            {this.props.src.map((elem, i) => <ListItem index={i} change={this.props.change} src={elem.img} title={elem.title} key={i} />)}
          </div></div>
      </>
    );
  }
}
export default Play;

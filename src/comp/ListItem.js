import React, { Component } from 'react';
class ListItem extends Component {

  state = {}
  render() {
    return (
      <>
        <div className="col-6" style={{ paddingLeft: "25px" }}>
          <img onClick={this.props.change.bind(this, this.props.index)} role="button" alt="" src={this.props.src}
            width="135px" height="60px" style={{ marginBottom: "11px", frameborder: 0 }}/>
        </div>
        <div className="col-6" style={{ fontSize: "7px", fontWeight: "bold" }}>
          <p>{this.props.title}</p>
        </div>

      </>
    );
  }
}
export default ListItem;

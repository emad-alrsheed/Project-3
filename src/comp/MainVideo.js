import React, { Component } from 'react';
class MainVideo extends Component {

  state = {}
  render() {
    return (
      <div style={{ background: "white", paddingTop: "8px", paddingLeft: "50px" }} className="col-8">
        <iframe src={this.props.src.name} width="565px" height="330px"
          title={this.props.src.title} />
        <p style={{ fontSize: "12px", fontWeight: "bold", paddingLeft: "3px" }}>{this.props.src.title}</p>
        <hr></hr>
        <div className="row">
          <div className="col-1">
            <img className=" rounded-circle" alt="" width="30px" height="34px" src={this.props.src.img}></img>
          </div>
          <div style={{ paddingLeft: "6px" }} className="col-8">
            <p style={{ fontSize: "9px", fontWeight: "bold", paddingLeft: "3px", marginBottom: "0px" }}>{this.props.src.channel}</p>
            <p style={{ fontSize: "8px", color: "gray", paddingLeft: "3px" }}>Published on {this.props.src.published}</p>
            <p style={{ fontSize: "10px", color: "black", paddingLeft: "3px" }}>{this.props.src.breif}</p>
          </div>
        </div>
        <hr></hr>


      </div>
    );
  }
}
export default MainVideo;

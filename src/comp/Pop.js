import React, { Component } from 'react';
class Pop extends Component {

  state = {}
  render() {
    return (
      <>

        <div className="col-4 ">
          <div className="card-body ">
            <iframe src={this.props.src} title={this.props.title} width="270px" />
            <p style={{ textAlign: "center", padding: "5px", fontSize: "12px", fontWeight: "bold" }}>{this.props.title}</p>

          </div>
        </div>
      </>

    );
  }
}
export default Pop;

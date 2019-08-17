
import React, { Component } from 'react';
class SearchBar extends Component {

  state = {
    name: []
  }
  videoName = (e) => {
    let Name = e.target.value
    this.setState({ name: Name })
  }
  render() {
    return (
      < >
        <div style={{ textAlign: "center", padding: "7px" }} >
          <input style={{ padding: "1px" }} type="search" size="45" onChange={this.videoName.bind(this)} />
          <input type="button" style={{ marginBottom: "2px", background: "red", color: "white" }} className="btn btn-sm " value="Search" onClick={this.props.videoButton.bind(this, this.state.name)} />
        </div>
      </>
    );
  }
}
export default SearchBar;


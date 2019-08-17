import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    q: "",
    u: "",
    items: []
  };

  change = e => {
    // this function is to handle the change on input (to store what user inputs)
    //  console.log( e.target.value)
    var s = e.target.value; // this variable is to store what user write on serach box.
    this.setState({ q: s }); // storing the variable s in the key q (q is one of the params, that represent the search term)
    // console.log(this.state.q);
  };

  Clean = () => {
    // this function is just to clean the input field after searching
    this.setState({ q: "" });
  };

  render() {
    return (
      <>
        <dev className="searchBar">
          <input
            type="text"
            className="form-control"
            value={this.state.q}
            placeholder="Search"
            id="Search"
            onChange={this.change}
          />
          <button
            type="submit"
            className="btn btn-secondary"
            style={{ verticalAlign: "baseline" }}
            onClick={this.props.search.bind(this, this.state.q, this.Clean)}
          >
            <i className="fa fa-search" />
          </button>
        </dev>
      </>
    );
  }
}

import React, { Component } from 'react'
export class Navbar extends Component {
    state = {
        search: ""
    }
    changeSearch = async (e) => {
        await this.setState({ search: e.target.value });

        //asynce to make sure the search take it time to save the new value from events (there was delay in function ) await and async is es8 2017 it promes function like call back i will ask jozaa about it
    }
    sendSearch = (e) => {
        if (this.state.search) {
            e.preventDefault();//prevent form to default
            this.props.changeSelected(this.state.search)
        }

    }
    render() {
        return (
            <>
                <nav className="navbar sticky-top navbar-light bg-light">
                    <div onClick={this.props.reload} style={{ cursor: "pointer" }} className="navbar-brand">
                        <img src="vlogo.png" width="30" height="30" className="d-inline-block align-top mr-2" alt=" " />
                        You<span style={{ color: "red" }}>Tube</span> API</div>

                    <form onSubmit={this.sendSearch} className="form-inline container col-12 col-xl-9 col-lg-9" >
                        <input onChange={this.changeSearch} className="form-control  col-9 col-lg-11 " type="text" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary  col-3 col-lg-1 my-sm-0" value="Submit" type="submit">Search</button>
                    </form>
                </nav>
            </>
        );
    }
}


export default Navbar
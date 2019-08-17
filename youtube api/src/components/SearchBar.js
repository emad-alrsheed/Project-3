import React from 'react';

class Searchbar extends React.Component {
    state = {
        term: ''
    };
    // change video by search bar
    onInputChange=this.onInputChange.bind(this);
    handleChange = (event) => {
        this.setState({
            term: event.target.value
            
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }
    onInputChange(event){
        this.setState({term:event.target.value});
        this.props.onSearchTermChange(event.target.value);
    }
    

    render() {
        return (
            <div className='search-bar ui segment' id="search">
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search">Youtube project</label>
                        <input placeholder="Search for..." onChange={this.onInputChange}
                        value={this.state.term} />
                    </div>
                </form>
            </div>
        )
    }
}
export default Searchbar;
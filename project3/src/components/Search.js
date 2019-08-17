import React from 'react';

class Search extends React.Component{
    state = { term: '' };
        //initial state object by this.state = { term: ‘’ }; which set a key-value pair. The value for key term is empty string. 

    InputChange(e) {
        this.setState({ term: e.target.value });
        this.props.SearchChange(e.target.value);
        // It is changing the state object and setting term equal to event.target.value, It is ‘a’ in this case, so term : ‘a’
    }

    render(){
        return (
            <div className="search-bar">
                <input                
                    value={this.state.term}
                    //so we are setting it to value of term.
                    onChange={this.InputChange.bind(this)} 
                    //this onChange handler will wait until the user types something in input field. Suppose the user types ‘a’ in input box, it will trigger the function onInputChange.
                />               
            </div>
        );        
    }

}

export default Search;
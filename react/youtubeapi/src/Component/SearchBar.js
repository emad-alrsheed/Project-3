import React from 'react';

class SearchBar extends React.Component{
    
        
       state={term:''};
        onInputChange=this.onInputChange.bind(this);

    
    onInputChange(event){
        this.setState({term:event.target.value});
        this.props.onSearchTermChange(event.target.value);
    }
    render(){
        return(
            <div className="search-bar">
                <input value={this.state.term}
                onChange={this.onInputChange}/>
            </div>
        );
    }
}
export default SearchBar;

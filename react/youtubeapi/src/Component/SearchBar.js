import React from 'react';

class SearchBar extends React.Component{
   
       state={term:''};
       onInputChange=this.onInputChange.bind(this);

        // ip
        handleChange = (event) => {
          this.setState({
              term: event.target.value
              
          });
      };
      handleSubmit = event => {
          event.preventDefault();
          this.props.handleFormSubmit(this.state.term);
      }
        
        
        // ip

    
    
    onInputChange(event){
        this.setState({term:event.target.value});
        this.props.onSearchTermChange(event.target.value);
    }
    render(){
        return(
            <div className="search-bar">
                <input 
                onChange={this.handleChange} placeholder="search"/>


                <button  > search</button>
            </div>
        );
    }
}
export default SearchBar;

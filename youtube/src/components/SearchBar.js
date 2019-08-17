import React,{Component} from 'react';

export default class SearchBar extends Component{

    //constructor SearchBar component
    constructor(props){
        super(props);

        this.state = { 
            term: '' 
        };

    }

    // on change the input value (method) and sent title value to (videosearch ) 
    //method then get data from youtube api 

    onInputChange=(event)=> {
        this.setState({ term: event.target.value });
        this.props.videoSearch(event.target.value);
    }

    render(){
        const {term} = this.state;
        const {onInputChange} = this;
        return (
            <React.Fragment>

                {/*render search component  */}

            <div className="search">
                <img src='https://amp.businessinsider.com/images/59a59a8d79bbfd1d008b601a-960-480.png' alt='youTube Logo' width='113px' height='40px' ></img>
                <input         
                    value={term}
                    onChange={onInputChange} 
                    placeholder="  Search Video... "
                />               
            </div>
            
            </React.Fragment>
        );        
    }

}


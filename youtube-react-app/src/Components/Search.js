import React,{Component} from 'react';
import '../Style/Search.css';

class Search extends Component {
  
  constructor(props){
    super(props);
    this.state={ result : ''}
    this.onInputChange = this.onInputChange.bind(this); 
    this.term = ''
  }

  onInputChange(event){
    this.term = event.target.value;
    this.setState({result: this.term});
    this.props.onSearchTermChange(this.term);
  }

    render (){
      return (
        <div className='search'>
          <header className='header'>
            <img alt='Logo' className='logo' src={require('../Assets/youtube.svg')} />
            <p className='orange'>Orange<span className='tube'>Tube</span></p>
            <div className='input-container'>
              <input className='form-control' placeholder="Search Here..." type='search'  onChange={this.onInputChange}></input>
            </div>
          </header>
        </div>
      );
  }
}

export default Search;

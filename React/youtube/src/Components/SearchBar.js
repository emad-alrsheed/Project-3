import React, {Component} from 'react';
import axios from 'axios';

export default class SearchBar extends Component {
 state = {
  q:"",
  u:""
 }

 change = (e) => {
   console.log( e.target.value)
   this.setState({q: e.target.value})
 }

 search = () => {
   
   var x = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.q}&type=video&key=AIzaSyBWM2E6zwTUf5Rc4gYfvnJmUGelCnVo3xg`
   console.log(`${this.state.q}`)
   axios.get(x)

      .then(response => {

        console.log(response.data.items);

        this.setState({

          u: "https://www.youtube.com/embed/" + response.data.items[0].id.videoId,
          q:""

        });
        console.log(this.state.u);

      })

      .catch(error => {

        console.log(error);

      });
 }
 
  render(){
  return (
    <>
    <dev className="searchBar"><input type="text" value={this.state.q} placeholder="Search" id="Search" onChange={this.change}/>   <button type="submit" onClick={this.search}><i className="fa fa-search"></i></button>
     </dev>
    <dev className="searchBar1">
      <iframe width="560" height="315" src={this.state.u} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </dev>
    </>
  );
}
}

import React, { Component } from "react";

export default class Search extends Component {
 state={
   term:""
 }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div  style={{margin: "40px", textAlign: "center"}}>
       <input
          value={this.state.term}
          onChange={value => this.onInputChange(value.target.value)}
          
        />
      </div >
    );
  }
}



















// export default class Search extends Component {
//   state={
//       term:" "
//   }

//    search_bar=(event) =>{ 
//        this.setState({term:event.target.value}) 
//        console.log(event) 
//    }


   
//   render(){
//   return (
//     < > 
//     <h1>Youtube</h1>
//     <input search={this.search_bar.bind(this)}/>
           
//     </>
//   );
// }
// }
import React ,{Component}from 'react';
import SearchBar from'./Component/SearchBar';

const APIKey='AIzaSyDzp8RJFjEwxsCa4z0wxjsQJzB_JfiUi9g';

class App extends Component {
  render(){
  return (
    <div className="App">
      Youtube Project
       <SearchBar/>
    </div>
  );
}
}

export default App;

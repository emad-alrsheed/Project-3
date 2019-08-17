import React, {Component} from 'react';
import ListItem from './ListItem';
import '../Style/List.css';

class List extends Component {
    render(){
      // Receive All Props That Comes From "APP.js" Component.
      const {videos, onVideoSelect} = this.props;
      return (
        <div className="list">
          <ul>
            {/* Loop Over Whole Response Using "MAP" To Return "ListItem" Component in Each Iterate. */}
            {videos.map(video => <ListItem key={video.etag} video={video} onUserSelected={onVideoSelect}/>)}
          </ul>
        </div>
      );
  }
}

export default List;

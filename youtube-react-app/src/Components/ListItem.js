import React, {Component} from 'react';
import '../Style/ListItem.css';

class ListItem extends Component {
  
  render(){
      // Receive All Props That Comes From "LIST.js" Component.
    const {video, onUserSelected} = this.props;

    return (
      // Handle "Video 'LI' " On Click Event. 
      <li onClick={() => onUserSelected(video)} className='list-group-item'>
        <div className="video-list media">
          <div>
            <img alt='Video thumbnail' className='lmedia-object' src={video.snippet.thumbnails.default.url}/>
          </div>
          <div className= 'media-body'>
            <h5 className="media-heading" >{video.snippet.title}</h5>
          </div>
        </div>
      </li>
    );
  }
}

export default ListItem;

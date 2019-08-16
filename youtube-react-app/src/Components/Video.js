import React, {Component} from 'react';
import '../Style/Video.css';

class Video extends Component {
  render(){
    const {video} = this.props;
    // Show Loading Message If Response is Slow.
    if(!video){
      return <div>Loading...</div>
    }
    // Get The Video 'ID';
    let videoID = video.id.videoId;
    console.log(videoID)
    // Create 'URL' With Dynamic 'VIDEO ID' .
    let url = "https://www.youtube.com/embed/"+videoID
    console.log(url)
    return (
      <div className='video-detail col-md-8'>
        <div className="embed-responsive embed-responsive-16by9" title='Video From API'>
          <iframe className='vid-container' title='video' width="560" height="315" src={url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; allowfullscreen"></iframe>
        </div>
        <div className='details'>
          <h5>{video.snippet.title}</h5>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
}

export default Video;

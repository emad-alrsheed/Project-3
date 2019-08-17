import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
    render(){
    const videoItems =this.props.videos.map((video) => {
        return (
            <VideoItem 
                userSelected={this.props.videoSelect}           
                key={video.etag} 
                video={video} />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
    }
};

export default VideoList;
import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {

    const {videos,onVideoSelect} =props;


    const videoItems = videos.map((video) => {
        return (
            
            <VideoListItem 
                onUserSelected={onVideoSelect}           
                key={video.etag} 
                video={video} />
        );
    });

    return (
        /*render video list component  */

        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;




import React from 'react';
import VideoTitle from './VideoTitle';

const VideoList=(props)=>{
    const videoItems=props.videos.map((video)=>{
        return(
            <VideoTitle  onUserSelected={props.onVideoSelect}
            key={video.etag}
            video={video}/>
        );
    });
    return(
        <ul className="col-md-4 list-group">{videoItems}</ul>
    );
};
export default VideoList;
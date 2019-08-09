import React from 'react';
import VideoTitle from './VideoTitle';

const VideoList=(props)=>{
    const videoItems=props.videos.map((video)=>{
        return(
            <VideoTitle key={video.etag}
            video={video}/>
        );
    });
    return(
        <ul className="col-md-4 list-group">{videoItems}</ul>
    );
};
export default VideoList;
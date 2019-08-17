import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos , handleVideoSelect}) => {
    const videoItems =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        // console.log(video.id);
    });

    return <div className='ui relaxed divided list'>{videoItems}</div>;
};
export default VideoList;
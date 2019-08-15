import React from 'react';

const VideoShow=(props)=> {
    const video=props.video;
    if(!video){
        return <div>Loading</div>;
    }
    let videoID=video.id.videoId;
    let url = "https://www.youtube.com/embed/"+videoID;
    
    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9" >
            <iframe className='vid-container' title='video' width="560" height="315" src={url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <div className="details">
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};
export default VideoShow
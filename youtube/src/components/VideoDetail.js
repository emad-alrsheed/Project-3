import React from 'react';

const VideoDetail = (props) => {
    const {video} = props;
    
    if(!video){
        return <div>Loading youtube web page...</div>;
    }
    
    const url = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        /*render video detail component  */

        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} ></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;

import React from 'react';

class VideoDetail extends React.Component {
    render(){
    const video = this.props.video; 

    if(!video){
        return <div>waiting to loading ...</div>;
    }
    //this if statment to make time to laod the data and can take time to create the consts

    
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`; // to link with youtube

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
    }
};

export default VideoDetail;
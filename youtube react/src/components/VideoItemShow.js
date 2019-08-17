import React from 'react';

const VideoShows = (props) => {
    const video = props.video;
    if (!video) {
        return <div className="center">Loading</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;;
    console.log(typeof(video));
    return (
        <div>
            <div className='ui embed'>
                <iframe src={url} allowFullScreen title='Video player'/>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoShows;
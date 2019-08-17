import React from 'react';

class VideoItem extends React.Component {
    render(){
    const video = this.props.video;
    const userSelected = this.props.userSelected;
    // console.log(video);    
    const imageUrl = video.snippet.thumbnails.default.url;
    //get the imgs of videos

    return (
    <div onClick={() => userSelected(video)} className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageUrl} />
            </div>
            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </div>
    </div>
    );
    }
};

export default VideoItem;
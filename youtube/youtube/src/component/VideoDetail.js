import React from 'react';


const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }


  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

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
};

export default VideoDetail;


























// import React,{Component} from 'react';


// export default class PlaylistItem extends Component{
//  videoitem=(props)=>{
// const video =props.video;
// console.log(video);
// const img = video.snippet.thumbnail.default.url;


// return(
// <>

// <img src={img}/>
// <h1>{video.snippet.title}</h1>

// </>

// )
// }
// }
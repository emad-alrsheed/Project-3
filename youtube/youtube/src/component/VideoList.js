import React from 'react';
import VideoListItem from './video_list_item'


const VideoList = (props) => {

  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key={video.etag}
        video={video}
        />
      )
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )

};


export default VideoList;







































// import React,{Component} from 'react';
// import PlaylistItem from './PlaylistItem';
// export default class Playlist  extends Component{



//  videolist = (props)=>{
// const videoitem = props.video.map((video)=>{
//     return(
//         <PlaylistItem
//         key={video.etge}
//         video={video} />
//     );
//    });

//     return (
//       < >
//       <ul>
    
//     {videoitem}


//     </ul>
//       </>
//     );
//   }
// }

  
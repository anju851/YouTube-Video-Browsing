import React from 'react';
import VideoItem from './VideoItem';

/*const VideoList = (props) => {

    const renderList = props.videos.map((video) => {
        return <VideoItem  video={video} />;
    });

    return <div className="ui relaxed divided list">{renderList}</div>;
}*/

const VideoList = ({ videos, onVideoSelect }) => {

    const renderedList = videos.map((video) => {
        //in the videoItem component key prop is passed inorder to remove t he error - each video item in the list should be associated with a key
        return <VideoItem  key={video.id.videoId} video={video}  onVideoSelect={onVideoSelect} />;
    });

    return <div className="ui relaxed divided list">{renderedList}</div>;
}


export default VideoList;
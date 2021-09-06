import './VideoItem.css';
import React from 'react';

//the below code would give an error saying  Each child in a list should have a unique "key" prop.
/*const VideoItem = props => {
    return <div>VideoItem</div>;

}; */

// to resolve the error we have refactored as below
const VideoItem = ({ video, onVideoSelect }) => {
    return (
    <div className="video-item item" onClick={() => onVideoSelect(video)} >
        <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
        <div className="content">
        <div className="header">{video.snippet.title}</div>
        </div>
    </div>
    );

};

export default VideoItem;

//{video.snippet.thumbnails.medium.url}
// NOTE:- when we have to communicate from parent to child we make use of "props"
// but when a child has to communicate with the poarent it has to be done by callbacks from parent component
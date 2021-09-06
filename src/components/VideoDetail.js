// it will show the video player and beneath that details of the video
import React from 'react';

/*const VideoDetail = (props) => {
   return <div></div>;

}*/

const VideoDetail = ({ video }) => {
    //this if condition is to cater the scenario whenever the page is refreshed/opened for first time the videoSelected is set to  null
    if(!video) 
       return <div>Loading....</div>;

       const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}` ;
 
    return (
        <div>
            {/* the below classname - ui embed signifies that this div consists of an embeded video player*/}
            <div className="ui embed"> 
                <iframe title="video player" src={videoSrc} />

            </div>
            <div className="ui segment">
                <h4 className="ui header">{ video.snippet.title }</h4>
                <p>{ video.snippet.description }</p>
            </div>
            </div>
           );
 
 };

 export default VideoDetail ;

 //To write comments in JSX, you need to use JavaScript’s forward-slash and asterisk syntax, enclosed inside a curly brace
 // {/* comment here */}.
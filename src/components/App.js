import React from 'react';
import YouTubeApi from '../apis/YouTubeApi';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends React.Component {

    state = { 
        videos: [],
        selectedVideo: null
    };

    componentDidMount(){
        this.onTermsubmit('maroon');
    }

    onTermsubmit = async term => {
         const response = await YouTubeApi.get('/search' , {
             params: {
                 q: term
             }
         });

         this.setState({
             videos: response.data.items,
             selectedVideo: response.data.items[0]  // this is to show similar item in the video detail and player on a search is performed, this takes the first item from the search result(videolist)
            
            });
    };

    onVideoSelect = video => {
        //console.log('From the App!' , video);
        this.setState({ selectedVideo: video });
    };

    render(){
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermsubmit} />
            <div className="ui grid">
            <div className="ui row"> 
                <div className="eleven wide column">
                   <VideoDetail video={this.state.selectedVideo} />
                 </div>
                <div className="five wide column">
                   <VideoList videos={this.state.videos}  onVideoSelect={this.onVideoSelect} />
                 </div>
            </div>
            </div>
        </div>
        );
    }
}

export default App;

// the name of the props and the callback fucnction that we are passing to the prop of the child component
// need not be the same, it is just the users choice
import axios from 'axios';

const KEY = 'AIzaSyA6jfZ-4103eIPb7rxb4yCcRrvAAfNyUSU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        //type: 'video',   //can be added to ensure - Warning: (Each child in a list should have a unique "key" prop) do not pop up even after we add a key prop
        key: KEY
    }
});


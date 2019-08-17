import axios from 'axios';
const KEY =  'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    
    params: {
        part: 'snippet',
        maxResults: 4,
        key: KEY,
    
    },
   
})
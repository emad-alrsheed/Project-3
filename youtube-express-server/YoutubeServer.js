//Import Packages
const express = require('express');
const cors = require('cors');         // Allows Us To Make Requests From Front End.
const morgan = require('morgan');     // it's 'Logger' That Allows Us To See Incoming Requests. 
require('dotenv').config();           // Package That Allows Me To Hide 'API-KEY' On Github.

//Create Our Express App
const app = express();

//Use Middleware.
app.use(cors());
app.use(morgan('tiny'));

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyAbU4azHjAu9ZeuAyqGeMvmkyqysD8Rrug';

// var params = {
//     part: 'snippet',
//     maxResults: 25,
//     key: MY_API_KEY,
//     q: '',
//     type: 'video'
//   };
  

//@Method GET
//Fetch User Search Videos. 
// app.get('/videos', (req, res) => {
//     console.log(req)

     // Parameters That will Be Included In Request URL
//      const params = {
//         part: 'snippet',
//         maxResults: 25,
//         key: API_KEY,
//         q: term,
//         type: 'video'
//       };

//       axios.get(ROOT_URL, { params: params })
//         .then(response => {
//           console.log(response)
//           this.setState({videos : response.data.items, // Set The Response Array To The Array in "App State"
//                 selectedVideo: response.data.items[0]}); // Set "Selected Video" To First Element Of Response Array
//         })
//         .catch(error => {
//           console.error(error);
//         });
// })

// Create PORT To Run Our Server On It.
const PORT = 1333;
//Make Our App Listen To The PORT.
app.listen(PORT, ()=> console.log(`Listening To Port ${PORT} ^_^`));
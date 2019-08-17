//Import Packages
const express = require('express');
const cors = require('cors');         // Allows Us To Make Requests From Front End.
const axios = require("axios");
//Create Our Express App
const app = express();

//Use Middleware.
app.use(cors());
app.use(express.json());

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyAbU4azHjAu9ZeuAyqGeMvmkyqysD8Rrug';


app.get('/', (req, res) => {
    // console.log(req);
    res.send('<h1>The server works</h1>');
  });

//@Method GET
//Fetch User Search Videos. 
app.get('/videos/:term', (req, res) => {
    console.log(req)

     // Parameters That will Be Included In Request URL
     const params = {
        part: 'snippet',
        maxResults: 25,
        key: API_KEY,
        q: req.params.term,
        type: 'video'
      };

      axios.get(ROOT_URL, { params: params })
        .then(response => {
        //   console.log(response.data.items )
          res.send(response.data.items)
          res.json(response)
        })
        .catch(error => {
          console.error(error);
        });
})

// Create PORT To Run Our Server On It.
const PORT = 1333;
//Make Our App Listen To The PORT.
app.listen(PORT, ()=> console.log(`Listening To Port ${PORT} ^_^`));
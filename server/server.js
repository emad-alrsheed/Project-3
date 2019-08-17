const express = require("express");
const app = express();
const axios = require("axios");
app.use(express.json());

const maxResults = 4; 
const myKey = 'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s'; 
const type = "video";

app.use(function(req, res, next) {
  
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("it's fine");
});

app.get("/search/:searchTerm", (req, res, next) => {
  let char = encodeURIComponent(req.params.searchTerm); 
  console.log(char);
  const x = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${char}&type=${type}&key=${myKey}`;
  axios.get(x).then(response => {
    res.json(response.data);
  });
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
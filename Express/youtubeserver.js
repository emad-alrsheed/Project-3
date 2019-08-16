const express = require("express");
const app = express();
const axios = require("axios");
app.use(express.json());

var maxResults = 3; // this variable is to declare how many maximum results to show when using youtube search api
var myKey = "AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA"; // this is a key for youtube api
var type = "video"; // this the type of searching

app.use(function(req, res, next) {
  // this function to solve that 2 files (server and react) running on differnt ports, they are different JavaScript origin
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Working fine");
});

app.get("/search/:searchTerm", (req, res, next) => {
  let s = encodeURIComponent(req.params.searchTerm); // this statement is to replace every special character to A new string representing the provided string encoded as a Uniform Resource Identifier (URI) component.
  console.log(s);
  var x = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${s}&type=${type}&key=${myKey}`;
  axios.get(x).then(response => {
    res.json(response.data);
  });
});

const PORT = 8600;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));

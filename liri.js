var axios = require ('axios');
var command = process.argv[2]
var Spotify = require('node-spotify-api');
// var request = require("request");
 var input = process.argv[3];
// var keys = require("./keys.js");
// var fs = require("fs");
// var spotify = new Spotify(keys.spotify);

if (command==="spotify-this-song"){
    spotifyThisSong()
} else if (command==="concert-this"){
    
}


function spotifyThisSong (songName){
  if(!songName){
      songName = "Sucker";
   }
  var spotify = new Spotify({
    id:"7f28e30b7b89450d82d9b77c020be00c",
    secret:"e9186560f3f64bf79c3fa3d3583d0efb",
  });
   
   spotify
  .search({ type: 'track', query: songName })
  .then(function(response) {
     console.log(JSON.stringify(response,null,2));
   })
   .catch(function(err) {
     console.log(err);
   });
}

// handles commands
if(command === "spotify-this-song") {
  spotifyThisSong(input);
} else if(command === "concert-this"){
  concertThis(input)
} else if (command === "movie-this"){
  movieThis(input)
}

// make a function for each command
function spotifyThisSong(songName) {
  // spotify code
}

function concertThis(artist) {
  // bands in town code
}
// Optionally the request above could also be done as
axios.get('/user', {
  params: {
    ID: 12345
  }
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
  // always executed
});  


// var axios = require("axios");
// var fs = require("fs");

// var TV = function () {
//   var divider = "\n-----\n\n";


//   this.findShow = function (show) {
//     var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

//     axios.get(URL).then(function (response) {

//       var jsonData = response.data;
//       console.log(jsonData)
//       var showData = [
//         "Show: " + jsonData.name,
//         "Genre(s): " + jsonData.genres,
//         "Rating: " + jsonData.rating.average,
//         "Network: " + jsonData.network,
//         "Summary: " + jsonData.summary
//       ].join("\n\n");

//       // Append showData and the divider to log.txt, print showData to the console

//       fs.appendFile('message.txt', showData, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//       });

      
//     })
//   }
// }
// module.exports = TV;
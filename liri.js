var axios = require ('axios');
var command = process.argv[2]
var Spotify = require('node-spotify-api');
var request = require("request");
var input = process.argv[3];
var keys = require("./keys.js");
var fs = require("fs");
var spotify = new Spotify(keys.spotify);

if(command === "spotify-this-song") {
  spotifyThisSong(input);
} else if(command === "concert-this"){
  concertThis(input)
} else if (command === "movie-this"){
  movieThis(input)
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

// // make a function for each command
//   function concertThis (songName){
//   if(!songName){
//       songName = "Sucker";
//    }
//   // bands in town code
// }
// // Optionally the request above could also be done as
// axios.get('/user', {
//   params: {
//     ID: 12345
//   }
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// })
// .then(function () {
//   // always executed
// });  

  this.concert-this + function (band) {
    var URL ="http//rest.bandsintown.com/artists" + artist + "events?app_id=codingbootcamp"

    axios.get(URL).then(function (response) {

      var jsonData = response.data;
      console.log(jsonData)
      var showData = [
        "Venue name: " + jsonData.name,
        "Venue location: " + jsonData.location,
        "Date : " + jsonData.Date.event,
      ].join("\n\n");

      // Append showData and the divider to log.txt, print showData to the console

      fs.appendFile('message.txt', venueta, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

      
    })
  }

this.movie-this + function(movieThis) {
  var URL = "http://www.imdb.com/title/tt0485947/" + Mr.Nobody;

  axios.get(URL).then(function(response) {
    var jsonData = response.data[0].person;
    var actorData = [
      "Year: " + jsonData.year,
      "IMDB rating: " + jsonData.imdb.rating,
      "Language: " + jsonData.language,
      "Country: " + jsonData.country.name,
      "URL: " + jsonData.url,
      "Actors: " + jasonData.actors,
      "Plot: " + jasonData.plod,
      "Rotten tomatoes" + jasonData.rotten.tomatoes,
    
    ].join("\n\n");

    
    fs.appendFile("log.txt", actorData + divider, function(err) {
      if (err) throw err;
      console.log(actorData);

    });
  });
};



require("dotenv").config()
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
    id: keys.spotify.id,
    secret: keys.spotify.secret
  });
   
   spotify
  .search({ type: 'track', query: songName })
  .then(function(response) {
    var songs = response.tracks.items;
    var getArtistNames = function(artist) {
      return artist.name;
    };
    

    for (var i = 0; i < songs.length; i++) {
      console.log(i);
      console.log("artist(s): " + songs[i].artists.map(getArtistNames));
      console.log("song name: " + songs[i].name);
      console.log("preview song: " + songs[i].preview_url);
      console.log("album: " + songs[i].album.name);
      console.log("-----------------------------------");
    }

   })
   .catch(function(err) {
     console.log(err);
   });
}

  function concertThis (artist) {
    var URL ="https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    axios.get(URL).then(function (response) {

      var jsonData = response.data;
      console.log(jsonData)
     
    }).catch(function(error){
      console.log(error)
    })
  }

function movieThis(title) {
  var URL = "http://www.omdbapi.com/?apikey=" + keys.omdb.key + "&t=" + title;

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



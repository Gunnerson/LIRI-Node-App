require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
// console.log(keys.spotify);
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var instruction = process.argv[3];


if ("spotify-this-song" === command) {
console.log("spotify-this-song")
spotifyThisSong(instruction);
}

else if ("movie-this" === command) {
  console.log("movie-this running")
  }

else if ("concert-this" === command) {
  console.log("concert-this running")
  }

else if ("do-what-it-says" === command) {
  console.log("do-what-it-says running")
  }



// 9. Make it so liri.js can take in one of the following commands:

// `node liri.js spotify-this-song '<song name here>'`

//    * This will show the following information about the song in your terminal/bash window

//      * Artist(s)

//      * The song's name

//      * A preview link of the song from Spotify

//      * The album that the song is from

//    * If no song is provided then your program will default to "The Sign" by Ace of Base.

//    * You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.


// Spotify Command
 function spotifyThisSong (songName) {
    if(songName === undefined) {
        songName = "Beez in the Trap";
    }
    // console.log(songName);

    spotify.search(
    {
        type: "track",
        query: songName
    },
    function(err,data) {
        if (err) {
          return console.log("error: " + err);
        }

        var songs = data.tracks.items;
        // console.log(data.tracks.items[0]);
       var artist = data.tracks.items[0].artists[0].name;
       console.log(artist);
      }
    )
  };


// node liri.js spotify-this-song '<song name here>'   manually run application
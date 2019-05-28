require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// 9. Make it so liri.js can take in one of the following commands:

// `node liri.js spotify-this-song '<song name here>'`

//    * This will show the following information about the song in your terminal/bash window

//      * Artist(s)

//      * The song's name

//      * A preview link of the song from Spotify

//      * The album that the song is from

//    * If no song is provided then your program will default to "The Sign" by Ace of Base.

//    * You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.


// Adding Arguments (based off activity 4)
console.log(parseFloat(process.argv[2]) + parseFloat(process.argv[3]));


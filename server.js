//Dependencies
var bodyParser = require( 'body-parser' );
var express = require( 'express' );

var app = express();    //express server app

// Sets up the Express Server to handle data parsing
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );

// set initial port
var PORT = process.env.PORT || 3000;

//import modules for routes ( api and html files )
require( './app/routing/apiRoutes.js' )( app );
require( './app/routing/htmlRoutes.js' )( app );


//---------- Server start listening ----------
app.listen( PORT, 'localhost', function() {
    console.log( 'Friend Finder on http://localhost:' + PORT );
});
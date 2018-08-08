// HTML Routes

var path = require( 'path' );

module.exports = function( app ){

    app.get( '/survey', function( req, res ){
        res.sendFile( path.join( __dirName, '../app/public/survey.html' ) );
    } );

    app.get( '*', function( req, res ){
        res.sendFile( path.join( __dirName, '../app/public/home.html' ) );
    } );
}
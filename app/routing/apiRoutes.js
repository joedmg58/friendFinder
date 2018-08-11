//API routes

var friendsData = require( '../data/friends' );

module.exports = function( app ){

    app.get( '/api/friends', function( req, res ){
        res.json( friendsData );
    } );

    app.post( '/api/friends', function( req, res ){

        /* var body = req.body;

        var friend = {
            'name': body.name,
            'photo': body.photo,
            'scores': [ 
                parseInt( body.q1Options ), 
                parseInt( body.q2Options ), 
                parseInt( body.q3Options ), 
                parseInt( body.q4Options ), 
                parseInt( body.q5Options ),
                parseInt( body.q6Options ),
                parseInt( body.q7Options ),
                parseInt( body.q8Options ),
                parseInt( body.q9Options ),
                parseInt( body.q10Options ) 
            ]
        }

        //Friend compatibility logic here

        friendsData.push( friend );

        //res.json( friend );

        res.redirect('/'); */

        
    } );
}
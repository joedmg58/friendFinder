//API routes

var friendsData = require( '../data/friends' );

module.exports = function( app ){

    app.get( '/api/friends', function( req, res ){
        res.json( friendsData );
    } );

    app.post( '/api/friends', function( req, res ){

        /* 
        var body = req.body;

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
        */
        console.log( req.body );
        
        var rxData = req.body;
        var us1 = rxData.scores;

        var matched_index = 0;
        var best_match = 100;

        for (var i=0; i<friendsData.length; i++){
            var us2 = friendsData[i].scores;
            var totalDif = 0;
            for (var j=0; j<us2.length; j++){
                totalDif += Math.abs( us2[j] - us1[j] );
            }
            if (totalDif < best_match){
                matched_index = i;
                best_match = totalDif;
            }
        }

        friendsData.push( rxData );
        res.json( friendsData[ matched_index ] ); 
    } );
}
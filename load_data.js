
'use strict';

var fs = require('fs');

module.exports = (function(){

  return {
    getData: function(){

      return new Promise(function (fulfill, reject){

          var arr = [];
          var input = fs.createReadStream( 'triangle.txt').on( 'data', function( data ) {

            var inputAsString = data.toString();
            var inputAsRows = inputAsString.split("\n");

            inputAsRows.forEach( function(e,i){
              // Get our 2nd dimension set
              arr[ i ] = [];
              e.split( ' ' ).forEach( function( e, i ){
                arr[ i ].push( e );
              })

            })
            fulfill( arr );
          });


        });
    }
  }

})();

'use strict';

var loader = require( './load_data.js' );
var inputSet =

module.exports = (function(){

  var recurse = function( input, dimension ){

    var total = 0;

    if( input[ dimension + 1 ] ){
      console.log( dimension )
      input.forEach(function(i,e){
        total += recurse( input, dimension + 1 );
      })
    }

    return total;
  }

  return {
    getHighestValue: function(){
      return loader.getData().then(function(inputSet){
        return recurse( inputSet, 0 );
      });
    }
  }
})();

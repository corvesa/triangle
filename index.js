
var runner = require( './process_data.js' );

runner.getHighestValue().then(function(value){
  console.log( value );
});

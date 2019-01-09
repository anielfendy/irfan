var x = '/dummy.json';

$.getJSON( x, function( json ) {
  console.log( json.dummy[3].frequency );
  var total = 0;
  for (var i = json.dummy.length - 1; i >= 0; i--) {
  	total = total + json.dummy[i].frequency;
  }
  console.log(total);
 });
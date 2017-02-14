'use strict'
const words = {
  words(str) {
  	if(str === '') {
  		var msg = "No String to Perform Operation On";
  		return msg;
  	} else if(typeof(str) !== "string") {
  		var msg = "Invalid Input";
  		return msg;
  	}
  var obj = {};
  //Replace every \n \t with a space
  var repl = str.replace(/[\n\t]/g, " " );
  repl = repl.replace(/\s\s+/g, " " );
  //Split every word by a space
  repl = repl.split(" ");
  //Push every element in the array into the obj
  for(var i in repl){
    obj[repl[i]] = 1;
  }
  //Filter every element to count number of occurence
  var ans = repl.filter(function(a,b){
    if(repl.indexOf(a) !== b){
      obj[a] += 1;
    }
  });
  return obj;
}
}
module.exports = words;
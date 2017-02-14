'use strict'
const words = {
  words: function(str){
  const obj = {};
  //Replace every \n \t with a space
  const repl = str.replace(/[\n\t]/g, " " );
  //Split every word by a space
  repl = repl.split(" ");
  //Push every element in the array into the obj
  for(var i in repl){
    obj[repl[i]] = 1;
  }
}
}
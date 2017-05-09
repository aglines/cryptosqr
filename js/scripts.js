//BUSINESS LOGIC
var Encryptor = function(inputString){

  inputString = inputString.replace(/\W/g, "");

  var stringLength = inputString.length;
  var root = Math.sqrt(stringLength);
  var rows = Math.ceil(root);
  var columns = Math.floor(root);

console.log("inputString ", inputString);
console.log("rows = ", rows, "  cols = ", columns);


var encodedBox = [];
k = 0;

for ( var j = 0 ; j < rows ; j +=1 ) {
  encodedBox[j] = [];
  for ( var i = 0 ; i < columns ; i +=1 ) {
  encodedBox[j][i] = inputString[k];
  // console.log("j ", j, "  i ", i, encodedBox[i]);
  k += 1 ;
  };
};

console.log(encodedBox);

}; // END FRONTEND

//FRONTEND

$(document).ready(function(){

  $("form#formOne").submit(function(event){
        event.preventDefault();

      var inputString = $("#userInput").val();
      var result = Encryptor(inputString);

  $("#output").text(result);

      // output gets result
  }); //submit
});
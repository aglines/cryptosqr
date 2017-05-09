//BUSINESS LOGIC
var Encryptor = function(inputString){
  inputString = inputString.replace(/\W/g, "");
  var stringLength = inputString.length;
  var root = Math.sqrt(stringLength);
  var rows = Math.ceil(root);
  var columns = Math.floor(root);
  // console.log("inputString ", inputString);
  // console.log("rows = ", rows, "  cols = ", columns);


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
console.table(encodedBox);

// DECRYPTOR
i = j = k = 0;
var encodedString = [];
for ( i = 0 ; i < columns ; i +=1 ) {
  for ( j = 0 ; j < rows ; j +=1 ) {
    if ( typeof(encodedBox[j][i]) != "undefined" ) {
          encodedString[k] = encodedBox[j][i];
          k += 1;
    };
  };
};

// FINALIZE OUTPUT STRING WITH SPACES
// console.log(encodedString);
// loop thru encodedString,
// at position 0, remove 5 items
outputArray = [];
while ( encodedString.length > 0 ) {
  var currentSplice = encodedString.splice(0, 5);
  var currentNewWord = currentSplice.join("") + " ";
  // console.log("current splice ", currentSplice);
  console.log("current new word ", currentNewWord);
  console.log("encodedString is now ", encodedString);
  var outputArray = outputArray + currentNewWord;
}
console.log(outputArray);

return outputArray;

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

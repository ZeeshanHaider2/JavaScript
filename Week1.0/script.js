



var newArr = []; //We have declared a var

var hYF06 = ['Zeeshan Haider', 'Anas', 'Sajid', 'Anuradha', 'Gary', 'Marco', 'Ehsan','Haretha','Krishna', 'Mohammad Azizul Huq','Mohammad Mosiur Rahman','Samara', 'Vignesh', 'Zoey Zou', 'Mohammad Subhiyeh']

//1.We have shuffled the unshuffled array i.e.hYF06 by using  map and sort
//2.We put each element in the array in an object, and give it a random sort key
//3.We sort using the random key
//4.We unmap to get the original objects
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
let shuffled = hYF06  
  .map((a) => ({sort: Math.random(), value: a}))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value)

  console.log (shuffled);


//Here we have converted the one dimentional array into two dimentional array by using splice method
//https://stackoverflow.com/questions/22464605/convert-a-1d-array-to-2d-array/22464838
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
while(shuffled.length) newArr.push(shuffled.splice(0,2));

console.log(newArr);


//We have used document.write to display the pairs on the index.html document by using a simple for loop.
//http://www.java2s.com/Tutorial/JavaScript/0220__Array/Outputallarrayelementwithdocumentwrite.htm
var newArr;

for (var i=0; i < newArr.length; i++) {

  document.write("Team " +i+ " members: " +newArr[i]+ "<br /><br />");
}




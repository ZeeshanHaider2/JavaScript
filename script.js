
  

var  hYF06 = ['Zeeshan Haider', 'Anas', 'Sajid', 'Anuradha', 'Gary', 'Marco', 'Ehsan','Haretha','Krishna', 'Mohammad Azizul Huq','Mohammad Mosiur Rahman','Samara', 'Vignesh', 'Zoey Zou', 'Mohammad Subhiyeh']

var pair1 ;
var pair2 ;
var duplicate=[];

console.log(hYF06);

pair1 = hYF06 [Math.floor(Math.random()*hYF06.length)];
pair2 = hYF06 [Math.floor(Math.random()*hYF06.length)];


if (pair1 === pair2){  //if names of two members are similar, we push them in an array called duplicate with a message "try again".
 duplicate.push(pair1 + pair2);
 document.write("Please Try Again!")
}
else{
console.log("First member is: " + pair1 + " , " + "Second member is: " + pair2);
document.write(`First member is: ${pair1} and Second member is: ${pair2}`)
}


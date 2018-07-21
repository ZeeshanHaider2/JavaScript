
console.log("Step01:");

console.log("Solution01");

//the function takes 4 arguments
function threeFive(startIndex, stopIndex, callbackThree, callbackFive){
 let newArray = [];
 //https://stackoverflow.com/questions/8069315/create-array-of-all-integers-between-two-numbers-inclusive-in-javascript-jquer#
 while(startIndex <= stopIndex){
    newArray.push(startIndex++);
 }
 //console.log(newArray);
 newArray.forEach(function(element){
    //console.log(element);

    if (element % 3 == 0){
        console.log("using callbackThree");
        callbackThree(element);
    }
    if (element % 5 == 0){
        console.log("using callbackFive");
        callbackFive(element);
    }

  
 });
 
}//end of threeFive


function sayThree(element){
    console.log(`${element} is divisible by 3`);
    //https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
}
function sayFive(element){
    console.log(`${element} is divisible by 5`);
}

threeFive(10, 15, sayThree, sayFive);



console.log("Solution03");

//https://medium.freecodecamp.org/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d
function repeatStringNumTimes(string, times) {

    let repeatedString = "";
  
    while (times > 0) {
  
      repeatedString += string;
  
      times--;
  
    }
  
    console.log(repeatedString);
   
  }
  
  repeatStringNumTimes("abc", 3);
  


  console.log("Solution04");
//https://stackoverflow.com/questions/4549894/how-can-i-repeat-strings-in-javascript
  function repeatStringNumTimes(string, times){
    let repeatedString = "";
    for(let i = 0; i < times; i++){
        repeatedString += string;
    }
    console.log(repeatedString) ;
    
}

repeatStringNumTimes("abc", 3);





console.log("Solution05");
function repeatStringNumTimes(string, times){
    let repeatedString = "";
    if (times > 0){
    do{
        repeatedString += string;
        times--;
    }while (times > 0);
 }  
     console.log(repeatedString);

}
repeatStringNumTimes("abc", 3);



console.log("Solution06");

let x1 = function Dog() {
    this.name = "Tommy";
    this.color = "grey";
    this.numLegs = 4;
  }

  console.log(x1);


  console.log("Solution07");
  function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i=0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
          product = product * (arr[i][j]); //1*2*3*4*5*6*7 = 5040
        }
      }
    // Only change code above this line
    console.log (product);
  }
  
  // Modify values below to test your code
  multiplyAll([[1,2],[3,4],[5,6,7]]);



  console.log("Explaination for 08 :https://stackoverflow.com/questions/7652342/how-to-print-the-following-multi-dimensional-array-in-java-script");

  console.log("Explaination for 09");

  console.log("Pass by Value:In Pass by Value, Function is called by directly passing the value of the variable as the argument.Changing the argument inside the function doesn’t affect the variable passed from outside the function.");

 var x = 9; 
function f1(val) { 
    val = val+1; 
    return val;
}
f1(x);
console.log(x);

console.log("Pass by Reference:In Pass by Reference, Function is called by directly passing the reference/address of the variable as the argument.Changing the argument inside the function affect the variable passed from outside the function.");
var y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);

//Explaination: http://nodesimplified.com/pass-value-pass-reference-javascript/



console.log(".............................................................");

const button = document.querySelector(".callFunction");
const button2 = document.querySelector(".btn-primary");
const button3 = document.querySelector(".search");
const input = document.querySelector(".input-repo");


button.addEventListener("click", function() {
    console.log("you clicked me!");
    renderList("showFullList");
  });


  button2.addEventListener("click", function() {
    console.log("you clicked me!");
    renderList("DataStructures");
  });

  button3.addEventListener("click", function() {
    console.log("you clicked me!");
    renderList(input.value);
  });

function getAjaxData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes 
        if (this.status === 200) {
            callback(JSON.parse(request.responseText));
        } else {
            console.log('Something is probably wrong with the url');
        }
    });

    request.addEventListener('error', function () {
        console.log('Server error like timeout');
    });

    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request 
    request.send();
}

function renderList(toShow) {
getAjaxData('https://api.github.com/orgs/HackYourFuture/repos', function(repolist) {
   

let showOnWebpage = [];
if (toShow === "showFullList"){
    showOnWebpage = repolist;
} else {
    showOnWebpage = repolist.filter(element =>{
        return element.name == toShow;
    });

}
  
    const ul = document.querySelector("#repos-list");
   // console.log(ul);
    ul.innerHTML = ""; 
    
    showOnWebpage.forEach(repo => {
      
      const li = document.createElement('li');
      li.innerHTML = '<a target="_blank" href=' + repo.html_url + "> " + repo.name + " </a>";
      //console.log(li);
     
        ul.appendChild(li);


    });
});
}

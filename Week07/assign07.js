function getAjaxData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes 
        if (request.status === 200) {
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

getAjaxData('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json', (allMoviesData)=> {
    

console.log("STEP:01");
console.log("All movie data =", allMoviesData);



//Step 1:Say you would like to write a program that doubles the odd numbers in an array and throws away the even number.
//01. 

'use strict';
// Filter an array for only odd numbers and then double them
let numbers = [1, 2, 3, 4];

let doubleOdd = numbers
    .filter (number => number % 2 !==0)
     .map (number => number * 2);
console.log("Filtered array",doubleOdd);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


//2.1.Give each movie a tag: Good (>= 7), Average (>= 4 and < 7), Bad (< 4) based on the ratings.
    allMoviesData.forEach (movie=>{
        if (movie.rating >=7){
           return movie.tag = 'Good';
         }
        else if(movie.rating >= 4 && movie.rating < 7){
            return movie.tag ='Average';
        }
        else if (movie.rating < 4){
           return  movie.tag = 'Bad';
        }
         
    });

    

//2.2. Calculate the average rating of all the movies.
const averageRatings = allMoviesData
.map((movie) =>  {
      return movie.rating;
}) 
.reduce((accumulator, rating) => {
 
  //console.log("accumulator", accumulator);
 // console.log("rating",rating);
    return accumulator + rating;
   
});

console.log("The average of all movie ratings = ",averageRatings/allMoviesData.length); 

//Count the total number of Good, Average and Bad movies.

//2.3.1.Good Movies
const moviesWithGoodRating = allMoviesData
.filter( movie => movie.tag === "Good");  
//.map (movie => movie.rating);  //can also be done like this  
/*.filter((movie) =>  {
      return movie.rating >= 7;
})     
 .map((movie) =>{
      return movie.rating;     
});*///For understanding the => funtion (making it shorter)

 console.log("Total number of Good movies =", moviesWithGoodRating.length);

//2.3.2.Average Movies
const moviesWithAverageRating = allMoviesData
.filter(movie => movie.tag ==="Average");

console.log("Total number of Average movies =", moviesWithAverageRating.length);


//2.3.3.Bad Movies
const moviesWithBadRating =allMoviesData
.filter(movie => movie.tag === "Bad");

console.log("Total number of Bad movies =", moviesWithBadRating.length)



//2.4.Count he number of movies containing the following keywords: ["The", "dog", "who", "is", "not", "a", "man"]. Can you make sure the search is case insensitive?

const keywords = allMoviesData

.map(movie => 
(movie === "The") && (movie === "dog") && (movie === "who") && (movie === "is") && (movie === "not") && (movie === "a") && (movie=== "man"))
.length

console.log('Total number of Keywords "The", "dog", "who", "is", "not", "a", "man" in movies =', keywords);



//2.5.Count the number of movies made between 1980-1989 (including both the years).
const moviesBetween1980To1989 = allMoviesData
.filter (movie => movie.year >= 1980 && movie.year <= 1989 )
console.log("Total number of movies between1980To1989 = ", moviesBetween1980To1989.length);



 
});





    

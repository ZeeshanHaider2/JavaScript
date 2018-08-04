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

getAjaxData("https://api.github.com/orgs/HackYourFuture-CPH/repos", (hYFrepos)=> {
    console.log("HYF Repositories", hYFrepos);

const namesOfForkedRepo = hYFrepos
.filter(repo => repo.forks_count )
.map(repo => repo.full_name);
console.log(" Names of HYF repositories, that have been forked are", namesOfForkedRepo)

const totalForkedRepo = hYFrepos
.filter(repo => repo.forks_count )
.map(repo => repo.forks_count).length;
console.log(" Total HYF repositories, that have been forked", totalForkedRepo)


const mostForkedRepo = hYFrepos
.filter(repo => repo.forks_count >= 9 )
.map(repo => repo.full_name );
console.log(" Names of most Forked repositories (7 or more times) are", mostForkedRepo)

const leastForkedRepo = hYFrepos
.filter(repo => repo.forks_count <=4 && repo.forks_count >1)
.map(repo => repo.full_name );
console.log("Names of least forked repositories (4 or less than 4 but more than one time) are ", leastForkedRepo)


const OnceForkedRepo = hYFrepos
.filter(repo => repo.forks_count ===1)
.map(repo => repo.full_name );
console.log("Names of once forked repositories are ", OnceForkedRepo)

const zeroForkedRepo = hYFrepos
.filter(repo => repo.forks_count === 0)
.map(repo => repo.full_name );
console.log(" Zero forked HYF repositories are", zeroForkedRepo)







const totalRepoForks = hYFrepos
.map((repo) =>  {
      return repo.forks_count;
}) 
.reduce((accumulator, forks_count) => {
 
  //console.log("accumulator", accumulator);
 // console.log("rating",rating);
    return accumulator + forks_count;
   
});

console.log("Sum of Forks for all repos =", totalRepoForks);

const namesOfWatchedRepo = hYFrepos
.filter(repo => repo.watchers_count )
.map(repo => repo.full_name);
console.log(" Names of HYF repositories, that have been Watched are", namesOfWatchedRepo)

const totalStargazersCount= hYFrepos
.filter(repo => repo.stargazers_count)
.map(repo => repo.stargazers_count).length;
console.log(" Total HYF repositories, that have been stargazed", totalStargazersCount)







});

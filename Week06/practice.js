function fetchJSONData(url,callback){

    // Create new ajax call with the js function called XMLHttpRequest
    const req = new XMLHttpRequest();
    req.addEventListener('load', function (data) {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes 
        if (this.status === 200) {
            const responseText = req.responseText;
            const data = JSON.parse(responseText)
            callback(data);
        } else {
            console.log('Something is probably wrong with the url');
        }
    });
    
    req.addEventListener('error', function () {
        console.log('Server error like timeout');
    });
    
    // initializes a request with an http method
    req.open("GET", url);
    // Sends the request 
    req.send();
    }

    





    
    const form = document.querySelector('#searchForm');
    //console.log(form);
    form.addEventListener('submit', event =>{  //event listener for the submit form
        
         event.preventDefault();//for preventing the query from being submitted by default i.e.form's default behaviour
         const formData = new FormData(event.target); //formData give a new data structure
         const searchString = formData.get('searchString');
         //console.log("form is being submitted", formData); 
         //console.log(searchString);
         const url = 'https://api.github.com/search/repositories?q=user:HackYourFuture+' + searchString
    
         fetchJSONData(url, data =>{

            const tbody = document.querySelector('#Repo-List >tbody');
            tbody.innerHTML = "" ; //to clear the body before sending the ajax request

            if (data.Response === 'False') { //If I write wrong queries
                alert(data.Error);
                return;
            }
    
       

        for (const element of data.items){ //for iterating over each element of the object array
            const tr = document.createElement('tr');
            tbody.appendChild(tr);
    
            tr.innerHTML = `<td>
             <a href ='#'   class = 'elementName'>${element.name }</a>
             <div class = 'elementDetails'></div>
             </td>`
             const link = tr.querySelector('.elementName');//instead of document.querySelector
             const div = tr.querySelector('.elementDetails');
             //console.log(link);
             link.addEventListener('click', (event) =>{
                 event.preventDefault();

                 showElementDetails(element, div);// movie details will be rendered in this div
             });
        }
    });
    
    
    });

    
    function showElementDetails(element, div){
        const url = 'https://api.github.com/search/repositories?q=user:HackYourFuture+'+ element.name
        fetchJSONData(url, elementDetails =>{
            div.innerHTML = `
            Repo's Id : ${element.id}<br>
            Repo's Full Name : ${element.full_name}<br>
            No. of forks : ${element.forks}<br>
            No. of watchers  : ${element.watchers}<br>
            contributors_url: ${element.contributors_url}`

        })
        //div.innerHTML = 'Coming soon' + element.name;

    };



    const button = document.querySelector(".callFunction");
  
    
    
    button.addEventListener("click", function() {
        console.log("you clicked me!");
        renderList("showFullList");
      });
    
  
    
    function renderList(toShow) {
        fetchJSONData('https://api.github.com/orgs/HackYourFuture/repos', function(repolist) {
       
    
    let showOnWebpage = [];
    if (toShow === "showFullList"){
        showOnWebpage = repolist;
    
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




const moviesUrl = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
const getMoviesPromise = fetch(moviesUrl);

getMoviesPromise
    .then((data) => {
        data.json()
            .then((allMovies) => {
                const taggedMovies = tagMovies(allMovies);
                console.log(taggedMovies);
                
                const form  = document.querySelector('#searchForm')
 
                
                form.addEventListener('submit', (event)=>{
                    event.preventDefault();
                  const formData = new FormData(form)
                  const searchText = formData.get('searchText').toLocaleLowerCase();
                  const selectedTag = formData.get('selectedTag');
                 
                  console.log("You are searching for :", searchText, selectedTag);
                  let filteredMovies = taggedMovies.filter(x => x.title.toLocaleLowerCase().includes(searchText));
                  
                  if (selectedTag !== 'All'){
                       filteredMovies = filteredMovies.filter(x => x.tag === selectedTag);
                  }
                  renderMovies(filteredMovies);

                  
                });


            function tagMovies(movies){//changed from allMovies
                const taggedMovies=  movies.map(movie=>{//changed from allMovies
                    if (movie.rating >=7){
                        movie.tag = 'Good';
                    } else if (movie.rating >=4 && movie.rating <7){
                        movie.tag = 'Average';
                    } else {
                        movie.tag = 'Bad';
                    }
                      return movie;
                });
                      return taggedMovies;
            }
            
            function renderMovies(movies){
                const p = document.querySelector('#searchCount')
                p.style.display = 'block';
                p.innerHTML = movies.length === 0 ? "No movies found" : `${movies.length} movies found`
                const table = document.querySelector('#moviesList');
                table.style.display = movies.length > 0 ? 'block' : 'none';
                const tbodyElement = document.querySelector('#moviesList >tbody')
                tbodyElement.innerHTML = '';
                for( const movie of movies){//taggedMovies changes to movies
                    const tr = document.createElement('tr');
                    tr.innerHTML =
                     `<td>${movie.title}<td>
                      <td>${movie.year}<td>
                      <td>${movie.rating}<td>
                      <td>${movie.votes}<td>
                      <td>${movie.tag}<td>
                                      
                    `;
                    tbodyElement.appendChild(tr);
                }
            }
            });
    });
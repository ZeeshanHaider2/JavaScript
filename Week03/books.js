

/*

1-Open a new js file and start by declaring an array that contains 10 strings. These strings should be of book titles you have read (or made up) and be lowercase without spaces or special characters so that you can use these later as Id's. (Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets).

2-Create a basic html file called index.html and use it to load the js file, confirm the console.log show the array. (This is for debugging and making sure everything is in order. Delete it later when you're done :))

3-Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop.

4-Make an object containing information for each book. Each item (object) in this object should have the book ID you thought up in point 1 as a key, and it should have at least the following fields: title, language and author.

5-Now change the function you used to display the book ID's in a list to take the actual information about the book from the object and display that. Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.

6-Beautify your html page with css, add sources and alts to each of the images.

7-Download book covers for each book, construct a new Object which has as keys the bookId's again, and as value the path to the image source (e.g. {"harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}). Now loop over these entries (hint: Object.keys(objectName) gives you an array containing the keys). Then write a function which places an image at the corresponding li element. Remember that Objects are not ordered, so you cannot guarantee that the first key is the first li element. (Hint: you could give each li item an id tag by modifying the function you made before)

*/

const books = [

    {

        title: 'book title 1',

        author: 'Peter hansen'

    },

    {

        title: 'book title 2',

        author: 'Mogens Dalsgaard'

    },

    {

        title: 'book title 3',

        author: 'Mogens Dalsgaard'

    },

    {

        title: 'book title 4',

        author: 'Mogens Dalsgaard'

    },

    {

        title: 'book title 5',

        author: 'Mogens Dalsgaard'

    },

    {

        title: 'book title 6',

        author: 'Mogens Dalsgaard'

    },

    {

        title: 'book title 7',

        author: 'Mogens Dalsgaard'

    },

    {

        title: 'book title 8',

        author: 'Mogens Dalsgaard'

    },

    {

        title: 'book title 9',

        author: 'Mogens Dalsgaard'

    },

    {

        title: 'book title 10',

        author: 'Mogens Dalsgaard'

    }

];



const bookListElement = document.querySelector('.book-list');

console.log(bookListElement);



books.forEach(function(book) {

    const liElement = document.createElement('li'); //creating elements

    liElement.innerHTML = book.author + ': ' + book.title; //text of the elements



    bookListElement.appendChild(liElement); //appending elemnts to the UL -> fist we should define the bookListElement by using querySelector and give class to the html.index

});
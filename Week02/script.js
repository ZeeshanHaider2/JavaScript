
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
             "October", "November", "December"];
    
var weekDays = ["Sunday","Monday", "Tuesday", "Wednesday",  "Thursday", "Friday", "Saturday"];


var someDate = new Date();//This line create a date object containing the current date and time
//https://books.google.dk/books?id=7pTviyp3SZYC&pg=PA28&lpg=PA28&dq=str+%2B%3D+(someDate.getMonth()+%2B+1)+%2B+%22/%22;&source=bl&ots=0dkwUbEaFJ&sig=pTqHG-oD-2zgCsmG9CaCFRFhWi0&hl=en&sa=X&ved=0ahUKEwifjqeeis7bAhVqIpoKHZPEDlAQ6AEINzAB#v=onepage&q=str%20%2B%3D%20(someDate.getMonth()%20%2B%201)%20%2B%20%22%2F%22%3B&f=false
console.log ( "Today is :" + someDate);

//Formatting to dd/mm/yyyy 
someDate.getDay();
var dd = someDate.getDay();
var dt = someDate.getDate();
var mm = someDate.getMonth(); 
var y = someDate.getFullYear();

var someFormattedDate = (weekDays[dd]  + " , " + months[mm] + " , " +  dt + '/'+ y);
document.write( "Today is :" + someFormattedDate + "<br /><br />" );

var numberOfDaysToAdd = parseInt(prompt("Today is :" + someDate + "Please enter, after how many day we can meet : ", "0"), 10); //JavaScript will "convert" numeric string to integer, if you perform calculations on it (as JS is weakly typed). But you can convert it yourself using parseInt or parseFloat
//https://stackoverflow.com/questions/17907455/how-to-get-numeric-value-from-a-prompt-box
someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
//https://stackoverflow.com/questions/3818193/how-to-add-number-of-days-to-todays-date

console.log( " We will meet on :" + someDate);
//Formatting to dd/mm/yyyy 
//https://docs.microsoft.com/en-us/scripting/javascript/reference/getdate-method-date-javascript 

//Formatting to dd/mm/yyyy 
someDate.getDay();
var dd = someDate.getDay();
var dt = someDate.getDate();
var mm = someDate.getMonth(); 
var y = someDate.getFullYear();

var someFormattedDate = (weekDays[dd]  + " , " + months[mm] + " , " + dt + '/'+ y);
document.write( "We will meet on :" + someFormattedDate + "<br /><br />" );
   


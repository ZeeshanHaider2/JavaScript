


for (let i = 1 ; i<= 1000 ; i++){


    if ( i % 15 === 0)
    {
        console.log("FizzBuzz");
        document.write("FizzBuzz" )
     }
     
    else if (i % 3 === 0) 
     {
         
         console.log("Fizz");
         document.write("Fizz")
     }
     
    else if (i % 5 === 0)
     {
         console.log("Buzz");
         document.write("Buzz")
     }

     else{

          console.log(i);
          document.write(i);
    
     }

          document.write("</br>");
}
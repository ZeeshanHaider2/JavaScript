let students= [
    {
        firstName: "Zeeshan",
        lastName:"Haider",
        address: "Copenhagen",
        telephone: 91770770,
        postCode:2500,
        course: ["css","Html","Javascipt"],
        grade: Math.floor(Math.random() * (95 - 60) + 60) 
        
    },
    {
        firstName: "Anas",
        lastName:"",
        address: "Copenhagen",
        telephone: 91770770,
        postCode:2500,
        course: ["css","Html","Javascipt"],
        grade: Math.floor(Math.random() * (95 - 60) + 60)
    },
    {
        firstName: "Mohammad",
        lastName:"Subhiyeh",
        address: "Copenhagen",
        telephone: 91770770,
        postCode:2500,
        course: ["css","Html","Javascipt"],
        grade: Math.floor(Math.random() * (95 - 60) + 60)
    },
    {
        firstName: "Krishna ",
        lastName:"Rana",
        address: "Copenhagen",
        telephone: 91770770,
        postCode:2500,
        course: ["css","Html","Javascipt"],
        grade:Math.floor(Math.random() * (95 - 60) + 60)
    },
    {
        firstName: "Zoey ",
        lastName:"Zou",
        address: "Copenhagen",
        telephone: 91770770,
        postCode:2500,
        course: ["css","Html","Javascipt"],
        grade:Math.floor(Math.random() * (95 - 60) + 60)
    },
    {
        firstName: "Haretha",
        lastName:"",
        address: "Copenhagen",
        telephone: 91770770,
        postCode:2500,
        course: ["css","Html","Javascipt"],
        grade: Math.floor(Math.random() * (95 - 60) + 60)
        
    },
    {
        firstName: "Samara",
        lastName:"Salam",
        address: "Copenhagen",
        telephone: 91770770,
        postCode:2500,
        course: ["css","Html","Javascipt"],
        grade: Math.floor(Math.random() * (95 - 60) + 60)
    },
    {
        firstName: "Vignesh",
        lastName:"",
        address: "Copenhagen",
        telephone: 91770770,
        postCode:2500,
        course: ["css","Html","Javascipt"],
        grade: Math.floor(Math.random() * (95 - 60) + 60)
    },
    {
        firstName: "Anuradha",
        lastName:"Mohanty",
        address: "Copenhagen",
        telephone: 91770770,
        postCode:2500,
        course: ["css","Html","Javascipt"],
        grade:Math.floor(Math.random() * (95 - 60) + 60)
    },
    {
        firstName: "Marco",
        lastName:"",
        address: "Copenhagen",
        telephone: 91770770,
        postCode:2500,
        course: ["css","Html","Javascipt"],
        grade:Math.floor(Math.random() * (95 - 60) + 60)
    }
]




// We collected student grades in an array using the map method
const studentGrades = students.map(function(student) {
    return student.grade;
});

console.log(studentGrades); 


// Then we calculated the sum of the studentGrades by using the reduce method
// How to calculate sum and average of an array https://stackoverflow.com/questions/10359907/array-sum-and-average
const sum = studentGrades.reduce(function(a,b)
{return a + b;});

console.log(sum);
//the we took the average of student grades
const avg = sum / studentGrades.length;
console.log(avg);
document.write("The sum of the grades is: " + sum + ". The average of grades is: " + avg + "<br /><br />");

// then we calculated the student object with the maximum grade and minimum grade by using reduce method
// How to find max and minimum value in anrray of objects: https://stackoverflow.com/questions/4020796/finding-the-max-value-of-an-attribute-in-an-array-of-objects
const max = students.reduce(function (a, b) {
    return (a.grade > b.grade) ? a : b
 });
 
 console.log (max);
 document.write( max.firstName + " " +  max.lastName + " secured the highest grade with "  + max.grade + " percent. Excellent keep it up." + "<br /><br />");



 const min = students.reduce(function (a, b) {
    return (a.grade < b.grade) ? a : b
 });
 
 console.log (min);
 document.write( min.firstName + " " +  min.lastName + " secured the lowest grade with "  + min.grade + " percent. Work harder!!!");

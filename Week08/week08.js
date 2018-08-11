
function giveStartAndEnd (start,end){
    let emptyArrayToBeFilled = [];
    for (let i=start;i<=end;i++){
        emptyArrayToBeFilled.push(i)
    }
     return emptyArrayToBeFilled;
}

//const x1= 100;
//const n = 5 ;

function divisibilityChecker(n){
    function check(x){
    return x % n === 0;
//const  check = x1 =>  x1 % n === 0;
}
    return check;
}
const arrayOfNumbers = giveStartAndEnd(1,1000);
console.log(arrayOfNumbers);
//const divisibleBy03 = divisibilityChecker(2);
console.log("arrayOfNumbers divided by 3", arrayOfNumbers.filter(divisibilityChecker(3)));
console.log("arrayOfNumbers divided by 10", arrayOfNumbers.filter(divisibilityChecker(10)));
console.log("arrayOfNumbers divided by 21", arrayOfNumbers.filter(divisibilityChecker(21)));
const arrayWithNumbers1To30 = giveStartAndEnd(1,30);

const newArray= arrayWithNumbers1To30.map(x=>{
    const finalArray = arrayOfNumbers.filter(divisibilityChecker(x));
    return finalArray.length;
});

console.log (" Items in array, which are divisible by numbers between 1-30", newArray);
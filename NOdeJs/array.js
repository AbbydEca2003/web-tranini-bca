//Function
/*let fizzbuz2 = function(input){
    return input*2;
}*/
/*
//Arrow function
let fizzbuz3 = (input) => {
    return 2;
}
let add2 = (a,b) =>a+b;

//Array
    const fruits=["Apple", "Orange", "strawberry", "Berry"];
    console.log(fruits);

//Array method
    console.log(fruits.length);
    console.log(fruits[fruits.length - 1]);//Last content
    fruits[0]='Banana';// Change array contrnt
console.log(fruits);
//Push to array
    fruits.push("Cherry");
    console.log(fruits);
//Pop to array 
    fruits.pop();
    console.log(fruits);

//Sorting the aray
    console.log(fruits.sort());
    const numbers = [54, 656, 53, 23, 45, 651];
    console.log(numbers.sort());
// Loop in array
    for(var i = 0; i<fruits.length; i++){
        console.log(fruits[i]);
    }

fruits.forEach(function(fruit){
    console.log(fruit);
});
*/

// Create array of subjects, loop the array ans print plural subjects
    const subject=["Algorithm", "Microprocesor", "Account"];
    const subjects=[];
    subject.forEach(function(subject)
    {
         subjects.push(subject+"s");

    });
console.log(subject);
console.log(subjects);

// Map Function
let newsubject = subject.map(function(subject){
    return subject + 'es';
});
console.log(newsubject);

//Exercise
const movies=["Lord of the rings", "Arrival", "Primer"];
let newmovies=movies.map(function(movies){
    return "<li> class='movie'>" + movies+ "</li>";
});
console.log(newmovies);
//Output 
/*[
    "
    <li class="movie>Lord of the ring</li>
    "
]*/

//String method
    let biggestHits= "Avatar"
    console.log(biggestHits.length);

    biggestHit = biggestHits.split(" "); 
    console.log(biggestHits);
    
        
let car = {
    color: "white",
    launch: 2010,
    type: "fiat",
    model: 500,
  }
  
  let person = {
    firstName: "Sheldon",
    lastname: "Cooper",
    age: 33,
    isActor: true,
  }
  
  console.log(person.firstname);
  
  person.firstName = 'Raj';
  person.lastname = "Koothrapali"
  console.log(person);
  
  const cars = [
    {
      name: "Kia",
      model: 2020,
    },
    {
      name: "Cheevrolet",
      model: 1999,
    }
  ]
  const filterCars=[];
  cars.forEach(function(cars){
    if (cars.model>2000) {
      filterCars.push(cars);
    } 
  });
  
//   cars.forEach(function(car){
//     console.log(`car name: ${car.name}`)
//   })

  console.table(filterCars);


const students=[
    {
        name: "Aadarsh",
        age:22,
        grade:3.0
    },
    {
        name: "Ankita",
        age:19,
        grade:2.7
    },
    {
        name: "Sharon",
        age:23,
        grade:3.7
    }
]
console.table(students);

const passedStudent=[];
students.forEach(function(students){
    if(students.grade>=3){
        passedStudent.push(students);
    }

})
console.table(passedStudent);

let filterStudents = students.filter(function(students){
    if(students.grade>=3.0){
        return true;
    }
})
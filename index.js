
let person = {
    name: 'Lisa',
    age: 42,
    city: 'Stockholm'
}

for (let key in person) {
  console.log(person[key]);
}

person.age = 43
person.email = 'lisa@mail.se'

for (let key in person) {
  console.log(person[key]);
}

let car = {
    make: 'Opel',
    model: 'Agila', 
    start: function () {
        console.log('BRRRRRMMMM')
    }
}
for (let key in car) {
  console.log(car[key]);
}

for (var key in person) {
  console.log(key);
  console.log(person[key]);
}

let student = {
    name: 'Anna',
    course1: {
        subject:'historyInFinland',
        grade:'A'
    },
     course2: {
        subject:'historyInSweden',
        grade:'B'
    },
     course3: {
        subject:'science',
        grade:'B'
    },
   
}
student.course3.grade = 'A'


let books = [
    {
        Title: 'Anne Franks dagbok',
        Author: 'Anne Frank'
    },
    {
       Title: 'Brott och straff',
       Author: 'Fjodor Dostojevski'  
    },
     {
       Title: 'Processen',
       Author: 'Frans Kafka'  
    }
]

books.forEach((book) => {

for (let key in book) {
  console.log(key);
  console.log(book[key])
}
}
)
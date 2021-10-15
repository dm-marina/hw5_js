// Task1
let user ={
    name: "John",
    surname: "Smith"
};
user.name="Pete";
console.log(user);
delete user.name;
console.log(user);

// Task2
const user2 = {
    name: "John"
  };
//   Можно изменять элементы обьекта, обьявленные в обьекте const  
user2.name="Pete"; //этот код будет работать
console.log(user2);

// Task3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130 
  }
let sum = Number(salaries.John) + Number(salaries.Ann) + Number(salaries.Pete);
console.log(sum); 
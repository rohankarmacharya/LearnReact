//Shorter
const name = user.name;
const age = user.age;
//You can write:
const {name,age} = user;


//Removes repeated object name:
console.log(user.name);
console.log(user.age);
console.log(user.city);

//Instead we can:
const {name,age,city} = user;
console.log(name,age,city);
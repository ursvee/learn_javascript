// array

let users = ['Alice', 'Bob', 'Bard', {user : 'John'}]

// normal way

first = users[0]
second = users[1]
third = users[2]

console.log(first, second, third);

// destruct

let [firstUser, secondUser, thirdUser, fourthUser] = users

console.log(firstUser, secondUser, thirdUser);
console.log(fourthUser);

// object

let info = {
    name : 'vee',
    age : 24,
    address : 'Sittwe'
}

let userName = info.name
let userAge = info.age
let userAddress = info.address

// destruct
// sameless key address
let {name, age, addr} = info

console.log(name, age); 

// sameless key's value undefined
console.log(name, age, addr);
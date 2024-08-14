// array

let users = ['Alice', 'Bob', 'Bard']

console.log(users);
console.log(users[0]);

users[4] = 'Jack' // add

users[1] = 'John' // override
console.log(users);


let games = ['ml', 'pubg', 'coc']
console.log(games);

games.push('lol') // add last
games.unshift('hok') // add first
games.pop() // delete last
games.shift() // delete first
console.log(games);
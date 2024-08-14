// global
let user = 'vee'

if(true) {
    console.log(user);
    // local
    const age = 24
    // var global
    var address = 'Sittwe' 
    color = 'brown' // default var
}

console.log(address); // global 
console.log(color); // var

console.log(age); // error
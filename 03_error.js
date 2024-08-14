const num = 10

try{
    // write possible errors
    num++
}catch(error) {
    console.log('error here', error);
}

console.log('error handling');
console.log(num);
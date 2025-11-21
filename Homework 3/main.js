function sumArray(numbers){
    let sum = 0
    for(let num of numbers){
        sum += num
    }
    return sum;
}

const array = [10, 50, 6, 7, 8, 11, 6, 3, 9]
console.log(sumArray(array))

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    isloggedin: true 
}

function userInfo(){
    console.log(`მომხმარებლის სახელია ${user.firstname}, მისი გვარია ${user.lastname}, ${user.isloggedin}`)
}

userInfo()

function checkNumber(num) {
    if (num % 2 === 0) {
        return "this number is even";
    } else {
        return "this number is odd";
    }
}

console.log(checkNumber(5))


for (let i = 5; i <= 100; i++) {
    console.log(i);
}

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i = 0; i < array1.length; i++) {
    if (array1[i] < 0 && array1[i] > 10) {
        console.log(array1[i]);
    }
}

let array2 = [1, 2, 3, 4, 5];
let sum = 0;

for(let i = 0; i < array2.length; i++){
    sum = sum + array2[i]
}

console.log(sum)


console.log(sum / array2.length)

let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,  
  studentstatus: "active"
};

console.log(user.studentstatus)

let user2 = {
    name: 'anna',
    age: 20,
    studentstatus: 'active'
}

if(user2.age < 18){
    console.log('hello user')
}else if(user2.name === 'levan'){
    console.log('hello levan')
}else if(user2.studentstatus === 'active'){
    console.log('student status is active')
}else{
    console.log('error')
}

let userCon = user2.age < 18 ? 'hello user' : user2.name === 'levan' ? 'hello levan' : user2.studentstatus === 'active' ? 'student status is active' : 'error'
console.log(userCon)


let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

for(let i = 0; i < array6.length; i++){
    if(array6[i] % 2 === 0){
        console.log(array6[i]);
    }
}


let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
];

for(let i = 0; i < users.length; i++){
    if(users[i].status === true){
        console.log(users[i]);
    }
}


let array7 = [32, 14, null, '40', 50];

for(let i = 0; i < array7.length; i++){
    if(typeof array7[i] === 'number' && array7[i] % 5 === 0){
        console.log(array7[i]);
    }
}


let array8 = [ [2, 3, 5, 11], [1, 35, 11], [12, 36, 24] ];

for(let i = 0; i < array8.length; i++){
    for(let j = 0; j < array8[i].length; j++){
        if(array8[i][j] > 30){
            console.log(array8[i][j]);
        }
    }
}

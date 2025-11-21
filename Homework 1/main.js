let number = 100;

if(number < 50){
    console.log('hi');
}
else if(number > 20){
    console.log('hi2');
}
else{
    console.log('hi3');
}

let conditionResult = number < 50 ? 'hi' : number > 20 ? 'hi2' : 'hi3';

console.log(conditionResult)

//2

let user = 'Mariami';

if(user === 'Mariami'){
    console.log(true)
}else{
    console.log(false)
}

let found = user === 'Mariami' ? true : false

console.log(found)


let array = [12, 41, 21, 12, 41, 54, 62 , 52, 65]

let num = []

for(let i = 0; i < array.length; i++){
    for(let j = 1; j < array.length; j++){
        if(array[i] === array[j]){
            conseole.log(array[i])
        }
    }
}

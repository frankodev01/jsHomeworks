// 1
let array1 = [14, 150, 'css', null, 'javascript', 25];
let newArray1 = array1.map(item =>
  typeof item === 'number'
    ? item * item
    : typeof item === 'string'
    ? item.toUpperCase()
    : item
);
console.log(newArray1);

// 2
let correct = 'თბილისი';
let answer = prompt('საქართველოს დედაქალაქი?').toLowerCase();
console.log(answer === correct ? 'სწორია' : 'არასწორია');

// 3
let array2 = ["hello1", 14, 24, "hello2"];
let onlyNumbers = array2.filter(item => typeof item === 'number');
console.log(onlyNumbers);

// 4
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let longWords = languages.filter(item => item.length > 3);
console.log(longWords);

// 5
let words = ['Madrid', 'rome', 'Milan', 'berlin'];
let mWords = words.filter(item => item.toLowerCase().includes('m'));
console.log(mWords);

// 6
let link = "https://google.com";
function checkLink(text) {
  console.log(text.includes('https://') ? 'კი მოიცავს' : 'არა, არ მოიცავს');
}
checkLink(link);

// 7
let array7 = [5, 4, 3, 2, 1];
let squared = array7.map(item => item * item);
console.log(squared);

// 8
let str = '12345';
let sum = str.split('').map(Number).reduce((a, b) => a + b);
console.log(sum);

// 9
let nums = [2, 4, 6];
let sumNums = nums.reduce((a, b) => a + b);
console.log(sumNums);

// 10
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let merged = arr1.concat(arr2, arr3);
console.log(merged);

// 11
let arr11 = [1, 2, 3, 4, 5];
arr11.splice(arr11.length - 2, 1, 'strawberry');
console.log(arr11);

// 12
let info = 'good day';
let day = info.slice(5);
console.log(day);

// 13
function stringLength(text) {
  console.log(text.length);
}
stringLength('javascript');

// 14
let arr14 = [5, 25, 89, 120, 36];
arr14.push('javascript', 'python');
arr14.unshift('html', 'css');
console.log(arr14.length);
arr14.shift();
arr14.pop();
console.log(arr14);

// 15
let fruits = ['ფორთოხალი', 'ბანანი', 'კივი'];
console.log(fruits.length);
fruits.push('ვაშლი', 'ანანასი');
fruits.unshift('საზამთრო');
console.log(fruits.length);
fruits.splice(2, 0, 'მანგო');
fruits.shift();
fruits.pop();
console.log(fruits.length);

// 16
let array16 = [1, 2, 3, 4, 5];
array16.splice(3, 0, 'a', 'b', 'c');
console.log(array16);

// 17
let array17 = [15, 100, 25, 10, 36];
array17.splice(array17.indexOf(10), 1);
console.log(array17);

// 18
let array18 = [1, 2, 3, 4, 5];
array18.splice(2, 1, 'three');
console.log(array18);

// 19
let array19 = [14, 150, 'css', null, 'javascript', 25];
let newArray19 = array19.map(item =>
  typeof item === 'number'
    ? item * item
    : typeof item === 'string'
    ? item.toUpperCase()
    : item
);
console.log(newArray19);

// 20
let array20 = [12, 25, 3, 6, 8, 14, 7, 23];
let divided = array20.map(item => item / 3);
console.log(divided);

// 21
let array21 = ['apple', 'orange', 'mango', 'kiwi'];
array21.splice(2, 0, 'strawberry', 'avocado');
console.log(array21);

// 22
let numbers = [12, 56, 18, 35, 10];
let even = numbers.filter(item => item % 2 === 0);
console.log(even);

// 23
let array23 = [1, 2, 3, 4, 5];
let multiply = array23.reduce((a, b) => a * b);
console.log(multiply);

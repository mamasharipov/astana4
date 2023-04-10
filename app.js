



// let array2 = [2,2,2,2,2,22,4,4,44,4,4,5,5,5,56,6,6,6,6,4,4,87,87,87,87,00,0,0,0]
// let arr_2 = array2.filter((item, index) => {
//   return array2.indexOf(item) === index
// });
// console.log(arr_2);


let arr = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br'];
let count = {};

for (let i of arr) {
    if (count[i] === undefined) {
    count[i] = 1;
    } else {
    count[i]++;
    }
}
console.log(count); 

var array = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
var newArray = []
for(var number of array)
{
  if(newArray.includes(number)) continue
  newArray.push(number)
}
console.log(newArray);
/********** 
arr.sort()
배열 재정렬
주의! 배열 자체가 변경됨
인수로 정렬 로직을 담은 함수를 받음
*/

let arr = [1,5,4,2,3];

arr.sort((a,b) => {
    return a-b;
});
console.log(arr);

//Lodash 실무에서 많이 사용

/*
arr.reduce()
인수로 함수를 받음
(누적 계산값, 현재값) => { return 계산값 };
*/
// 배열의 모든수 합치기
let arr2 = [1, 2, 3, 4, 5];

// for, for of, forEach

// let result = 0;
// arr.forEach(num => {
//     // result = result + num;
//     result  += num;
// });
const result = arr.reduce((prev, cur)=>{
    return prev + cur;
}, 0);

console.log(result);

let userList = [
    { name: "Mike", age: 30},
    { name: "Tom", age: 10},
    { name: "Jane", age: 27},
    { name: "Sue", age: 26},
    { name: "Harry", age:42},
    { name: "Steve", age: 60},
];
let result2 = userList.reduce((prev, cur)=>{
    if(cur.age>19){
        prev.push(cur.name);
    }
    return prev;
}, [])
let result3 = userList.reduce((prev, cur)=>{
    return prev += cur.age;
}, 0)
let result4 = userList.reduce((prev, cur)=>{
    if (cur.name.length ===3){
        prev.push(cur.name);
    }
    return prev;
}, []);



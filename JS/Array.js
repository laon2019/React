// arr.splice(n, m) : 특정 요소 지움
let arr = [1,2,3,4,5];
arr.splice(1,2);
console.log(arr);

let arr2 = [1,2,3,4,5];
arr2.splice(1, 3, 100, 200);
console.log(arr2);

let result = arr.splice(1,2);

// forEach
let arr3 = ["Mike", "Tom", "Jane"];

arr3.forEach((name, index) => {
    console.log(`${index+1}. ${name}`);
});

let arr4 = [1,2,3,4,5];

const result4 = arr4.find((item)=>{
    return item % 2 ===0;
});

console.log(result4);

//findIndex
let userList = [
    {name: "Mike", age: 30},
    {name: "Jane", age: 27},
    {name: "Tom", age: 10},
];

const result5 = userList.findIndex((user)=>{ //2번째
    if(user.age<19){
        return true;
    }
    return false;
});
console.log(result5);
//filtr
let arr6 = [1,2,3,4,5];

const result6 = arr6.랴ㅣㅅㄷㄱ((item)=>{
    return item % 2 ===0;
});

console.log(result6);

//arr.reverse() : 역순

//arr.map : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
let userList7 = [
    {name: "Mike", age: 30},
    {name: "Jane", age: 27},
    {name: "Tom", age: 10},
];
let newUserList = userList7.map((user, index)=>{
    return Object.assign({}, user, {
        id: index + 1,
        isAdult: user.age >19,
    });
});

console.log(newUserList);
console.log(userList);

//join, split
let arr8 = ["안녕", "나는", "짱구야"];
let result8 = arr8.join("-");
console.log(result8);

const users9 = "Mike,Jane,Tom,Tony";
const result9 = users9.split(",");
console.log(result9);

//Array.isArray()
let user10 = {
    name: "Mike",
    age: 30,
};
let userList10 = ["Mike", "Tom", "Jane"];

console.log(typeof user10);
console.log(typeof userList10);

console.log(Array.isArray(user10));
console.log(Array.isArray(userList10));

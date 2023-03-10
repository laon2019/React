//변수

// let age = 30;
// function showAge(){
//     console.log(age);
// }
// showAge();
// 문제 없음

// let age = 30;
// function showAge(){
//     console.log(age);
//     let age =20;
// }
// showAge();
//문제있음


//변수의 생성과정
//1. 선언단계 2. 초기화단계 3. 할당 단계

//var 1. 선언 및 초기화 단계 2.할당 단계 (초기화 : undefined를 할당 해주는 단계)
//let 1. 선언 단계 2. 초기화 단계 3.할당단계
//const 1.선언+초기화+할당

// let name;
// name = 'Mike';

// var age;
// age =30;

// const gender;
// gender = 'male';
//const 에러

//=============================

//2.생성자 함수
//객체 리터럴
let user = {
    name: 'mike',
    age: 30,
}

//생성자함수
function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log(this.name);
    }
}
let user1 = new User('Mike', 30);

function Item(title, price) {
    this.title = title;
    this.price = price;
    this.showPrice = function () {
        console.log('가격은 ${price}원 입니다.');
    }
}
const item = new Item('인형', 9000);
item.showPrice();

//=======================
//3. 객체 메소드
//Object.assign():객체 복제
const newUser = Object.assign({}, user);
newUser.name = 'Tom';
console.log(user.name);
newUser != user

const newUser1 = Object.assign({gender:'male'}, user);
//gender : 'male', name : 'mike', age : 30

//---------------------
//Object.keys() : 키 배열 반환
const user2 = {
    name : 'Mike',
    age : 30,
    gender : 'male',
}
Object.keys(user2); // name, age ,gender 반환

//---------------------
//Object.values() : 값 배열 반환
Object.values(user2);

//---------------------
//Object.entries() : 키/값 모두 배열 반환

//---------------------
//Object.fromEntries() : 키/값 배열을 객체로

let n ="name";
let a = "age";

const user3 = {
    [n] : "Mikek",
    [a] : 30,
    [1+4]:5,
};
console.log(user3); // {name: "Mike", age:30, 5:5}

function makeObj(key, val){
    return {
        [key] : val
    }
}
const obj = makeObj('나이', 33);



//=======================
//4. Symbol
//Symbol : 유일성 보장
// const id = Symbol('id');
// const id2 = Symbol('id');  id == id2 -> false
const id = Symbol('id');
const user4 = {
    name : 'Mike',
    age : 30,
    [id] : 'myid'
}
// user -> {name: "Mike", age : 30, Symbol(id): "myid"}
// Object.keys(user); -> ["name", "age"]


//다른 개발자가 만들어 놓은 객체
const user5 = {
    name: "Mike",
    age: 30,
};
//내가 작업
//user.showName = function () {}; -> His showName is function(){}. 
const showName1 = Symbol('show name');
user[showName1] = function () {
    console.log(this.name);
};

user5[showName1](); //-> Mike

//사용자가 접속하면 보는 메세지
for(let key in user5){
    console.log('His ${key} is ${user[key]}.');
}
// His name is Mike. His age is 30.


//=======================
//6. String
let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
];

let newList = [];
for(let i =0; i<list.length;i++){
    newList.push(list[i].slice(4));
}
console.log(newList);

function hasCola(str){
    if(str.indexOf("콜라") > -1){
        console.log("금칙어가 있습니다.");
    } else {
        console.log("통과");
    }
}

hasCola("와 사이다가 짱이야!");
hasCola("무슨소리, 콜라가 최고");
hasCola("콜라");

// includes : 문자가 있으면 true 없으면 false 반환
function hasCola(str){
    if(str.includes("콜라")){
        console.log("금칙어가 있습니다.");
    } else {
        console.log("통과");
    }
}

hasCola("와 사이다가 짱이야!");
hasCola("무슨소리, 콜라가 최고");
hasCola("콜라");
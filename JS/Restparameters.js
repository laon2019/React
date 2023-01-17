/*
나머지 매개변수
전달받은 모든 수를 더해야함
*/
function add(...numbers){
    let result = 0;
    numbers.forEach((num) => (result += num));
    console.log(result);
}
function add(...numbers){
    let result = numbers.reduce((prev, cur)=> prev + cur);
    console.log(result);
}
add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
}
const user1 = new User('Mike', 30, 'html', 'css');
const user2 = new User('Tom', 20, 'JS', 'React');
const user3 = new User('Jane', 10, 'English');

console.log(user1);
console.log(user2);
console.log(user3);

let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log(arr1);

// arr2.reverse().forEach((num) => {
//     arr1.unshift(num);
// });
arr1 = [...arr2, ...arr1];
console.log(arr1);

let user = { name: "Mike"};
let info = { age: 30};
let fe = ["JS", "React"];
let lang = ["Korean", "English"];
// user = Object.assign({},user,info,{
//         skills : [],
// });
// fe.forEach((item)=>{
//     user.skills.push(item);
// });
// lang.forEach((item)=>{
//     user.skills.push(item);
// });
user = {
    ...user,
    ...info,
    skills:[...fe, ...lang],
};

console.log(user);
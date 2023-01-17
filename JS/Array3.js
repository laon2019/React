//배열 구조 분해
// let users = ['Mike', 'Tom', 'Jane'];
// let [user1, user2, user3] = users;
// console.log(user1,user2,user3);

let str = "Mike-Tom-Jane";
let [user1, user2, user3] = str.split("-");
console.log(user1,user2,user3);

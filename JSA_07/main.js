// Bài 1

// const student = (fullName, age, address) => 
//     ({
//         name : fullName,
//         age : age,
//         adress : address
//     })

// console.log(student('Dang',16, 'Hanoi',))

// // Bài 2
// var smartPhones = [
//     {name: 'iphone', price: 649},
//     {name: 'Galaxy S6', price: 576},
//     {name: 'Galaxy Note 5', price: 489}
// ];

// for(let phone of smartPhones){
//     console.log(phone.price)
// }

// // Bài 3
// const foo = (x,y,z) => {
//     console.log(x,y,z);
// }
// const foo = () => {
//     alert('Hello')
// }

// for, for in : lặp qua key, for of : lập qua các value

// let arrCourses = [
//     {
//         name : 'JavaScript',
//         price : 100
//     },
//     {
//         name : 'C#',
//         price : 0
//     },
//     {
//         name : 'Python',
//         price : 200
//     }
// ];

// some : true/false

// const a = arrCourses.some((course, index) => {
//     return course.price === 100
// })
// console.log(a)


// map

// const a = arrCourses.map((course, index) => {
//     return {
//         name : `Khoa học : ${course.name}`,
//         price : course.price*2
//     }
// })
// console.log(a);

// filter

// const a = arrCourses.filter((course, index) => {
//     return course.price === 200;
// })

// console.log(a);

// find

// const a = arrCourses.find((courses, index) => {
//     return courses.price === 200
// })

// console.log(a);

// Các vòng lặp xử lý mảng
// forEach

// arrMembers.forEach((member, index) => {
//     console.log(`${index} : ${member}`)
// })



// for(let member in arrMembers) {
//     console.log(arrMembers[member]);
// }

// for(let member of arrMembers){
//     console.log(member)
// }

// Toán tử 3 ngôi

// let a = 3;
// a = a > 5 ? 10 : 0;
// // let a = 3;
// // if(a > 5){
// //     a = 10
// // }else {
// //     a = 0
// // }
// console.log(a)


// ES6

// arrow function

// function fuc1() {

// }

// const fuc2 = function(a,b){
//     return a + b;
// }
// console.log(fuc2(2,3));

// const fuc3 = (a,b) => {
//     return a + b;
// }

// const fuc3 = (a,b) => a + b;
// const fuc4 = (fullName, age) => 
//     ({
//         name : fullName,
//         age : age
//     })

// console.log(fuc4('Dang',16))

// const fuc3 = a => a + 10;
// // 1 cái thì không cần (), 2 cái thì cần

// console.log(fuc3(3))


// var, let, const
// scope, hosting, assignment

// Scope (1st part): phạm vi, nên dùng let và const (như nhau)
// global, block let, const theo quy chuẩn còn var thì không

// {
//     let fullName = 'Dang'
//     {
//         console.log(fullName)
//         {
//             let age = 18
//         }
//     }
// }

// console.log (fullName)

// Hosting (2nd part): hosting let, const không hosting, var thì hosting

// a = 2;
// var a;
// console.log(a)

// Assignment: chỉ dùng cho const

// const a = ['Dang', 'Hao'];
// a.push('Phong')
// console.log(a)

// const a = {
//     name : 'Dang',
//     age : 15
// }
// a.age = 16;
// console.log(a)

// template string

// var fullName = 'Dang\n'+'Hao\n';

// var firstName = 'Dang'
// var lastName = 'Nguyen'

// var fullName = firstName + " " + lastName;
// var fullName = `${firstName} ${lastName}`

// var fullName = `Dang
// Hao
// Phong`

// // var fullName = `Cách dùng template string là thêm \${} \\`

// console.log(fullName);
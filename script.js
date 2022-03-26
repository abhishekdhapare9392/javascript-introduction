// How to show output on DOM
let heading = document.getElementById("heading");
document.getElementById("heading").innerHTML =
  "<h3>Let's Learn JavaScript</h3>";
let head1 = document.getElementsByClassName("head1");

// document.querySelector("h1")
// document.querySelectorAll("h2")

// console.log("Basic Log")
// console.info("Information")
// console.error("Error")

// console.log("Heading: ", heading, ", Head1", head1)
// window.alert('Testing with alert.')
// window.confirm('Are you want to do this?')
// window.prompt("sometext", "testing")

// document.write('<br><h3>Website is in progress</h3>')

// Operators
// Assignment Operators
// var a = 10 // = is assignment operator

// Arithmatic Operators
// var c = a + b // + is addition operator

// -
// *
// /
// % // % is modulus operator
// even and odd

// ++
// --

// let a = 10
// let b = 20
// let c = 50
// let d = 2
// let e = 3

// a = a + b
// console.log('a = a + b : ', a)
// c += d
// console.log('c += d : ', c)
// // a += b; == a = a + b;
// e -= d
// console.log('e -= d :', e)
// a = a**d // a = a^d
// e **= d
// console.log('e: ', e)

// let a = 'Something else things going on'
// console.log('Length of string: ', a.length)

// let b = a.slice(0, 4)
// console.log('First 4 characters: ', b)
// let c = a.substring(2, 6)
// console.log('First 4 characters: ', c)
// let d = a.substr(0, 14)
// console.log('First 14 characters: ', d)
// let e = a.search('else')
// console.log('Index of else: ', e)
// let f = a.indexOf('else')
// console.log('Index of else: ', f)
// // let g = a.lastIndexOf('else', 14)
// // console.log('*last Index of else: ', g)
// let h = a.startsWith('Something')
// console.log('Starts with else: ', h)
// let i = a.replace('Something', 'Else')
// console.log('Replace string: ', i)
// let j = a.split(' ')
// console.log('Split string: ', j)
// let k = j.join(' ')
// console.log('Join string: ', k)

// a = 'John'
// b = 'working hard'
// c = a + ' is studieng hard! he also ' + b
// c = `${a} is studieng hard! he also ${b}`
// document.getElementById('heading').innerHTML = c
// console.log(c)

// let price = 999
// let tax = 90
// 999 + 90
// console.log('Price + Tax', price + ' + ' + tax)
// console.log(price+tax)

// Objects
// let a = [{ string: '1' }, { num: 2 }, { num: 3 }]
// const a = {
//   name: 'John Doe',
//   age: 30,
// }
// a.name = 'Smith Johns'

// console.log(a)

// var b = [6, 25, 3, 2, 12]
// var brands = ['Apple', 'Samsung', 'HTC', 'LG', 'Motorola']
// console.log(a[0].post)
// let c = b.join(',')
// b.pop()
// b.push(6)
// brands.push('Dell')
// brands.pop()
// brands.shift()
// brands.unshift('Dell')
// delete brands[0]
// const c = b.concat(brands)
// brands.splice(0, 0, 'Dell')
// console.log(brands.slice(0, 2))/
// const c = b.reverse()
// const c = b.sort(function (a, b) {
//   return a - b
// })
// console.log(c)
// console.log(brands[3])

// var a = [
//   {
//     id: 1,
//     post_title: 'First Post',
//     post_content: 'First Post Content',
//   },
//   {
//     id: 2,
//     post_title: 'Second Post',
//     post_content: 'Second Post Content',
//   },
//   {
//     id: 3,
//     post_title: 'Third Post',
//     post_content: 'Third Post Content',
//   },
//   {
//     id: 4,
//     post_title: 'Fourth Post',
//     post_content: 'Fourth Post Content',
//   },
//   {
//     id: 5,
//     post_title: 'Fifth Post',
//     post_content: 'Fifth Post Content',
//   },
// ]

// function funName(){

// }

// funName();

// const testFun = () => {

// }

// testFun()

// a.forEach((ele) => {
//     if (ele.id === 3) {
//       console.log(ele.post_title)
//     }
// })

// a.map((ele) => {
//   console.log(ele.post_title)
// })

let date = new Date();
// console.log(date.toString())
// console.log(date.getDate())
// console.log(date.getMonth() + 1)
// console.log(date.getTime())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getFullYear())
// 07-08-2021
// console.log(
//   date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear(),
// )
// console.log(date.getTimezoneOffset() / 60)

// console.log(Math.PI)
// console.log(Math.random() * 100)
// let randomNum = Math.random() * 1000
// console.log(Math.round(randomNum))

// let price = 99.99
// console.log(Math.ceil(price))
// console.log(Math.floor(price))

// let a = -3
// let b = 0
// let c = 5
// console.log(Math.sign(c))

// let array = ;

// console.log(Math.max(1, 2, 3, 4, 5, -6, 7, -8, 9, 10))
// document.getElementById('submit').addEventListener('click', (e) => {
//   let c = parseInt(document.getElementById('anyNum').value)
//   console.log(c)
//   if (c == 'NaN') {
//     let out = `${c} is not numaric! Please enter any degit`
//     document.querySelector('.output').innerHTML = out
//   } else {
//     if (c % 2 === 0) {
//       let out = `${c} is Even number!`
//       // window.alert(out);
//       // document.write(out)
//       document.querySelector('.output').innerHTML = out
//     } else {
//       let out = `${c} is Odd number!`
//       // window.alert(out)
//       // document.write(out)
//       document.querySelector('.output').innerHTML = out
//     }
//   }
// })

// document.getElementById('submit').addEventListener('click', (e) => {
//   let c = document.getElementById('anyNum').value
//   if (c < 100) {
//     let out = `${c} is less than 100!`
//     document.querySelector('.output').innerHTML = out
//   } else if (c == 100) {
//     let out = `${c} is equal to 100!`
//     document.querySelector('.output').innerHTML = out
//   } else {
//     let out = `${c} is greater than 100!`
//     document.querySelector('.output').innerHTML = out
//   }
// })

// let a = 1

// switch (a) {
//   case 1.2:
//     console.log('This is 1st Case')
//     break
//   case 2:
//     console.log('This is 2nd Case')
//     break

//   default:
//     console.log('This is default case')
//     break
// }

// loops

// for for in for of

// let i
// let length = 10
// for (i = 1; i <= length; i++) {
//   console.log(i)
// }

// let array = ['John', 'Paul', 'George', 'Ringo']
// for (i = 0; i < array.length; i++) {
//   console.log(array[i])
// }

// forin
// let j = 0
// for (const i in array) {
//   console.log(array[i])
//   console.log(i)
//   j++
// }

// forof
// for (const name of array) {
//   console.log(name)
// }

// var i = 0
// while (i < 4) {
//   //   text += `${i} is less than 4`
//   console.log(i)
//   i++
// }

// do {
//   console.log(i)
//   i++
// } while (i < 4)
//
// document.querySelector('.output').innerHTML = text

// let i
// let length = 10
// for (i = 1; i <= length; i++) {
//   if (i % 2 == 0) {
//     continue
//   }
//   console.log(i)
// }

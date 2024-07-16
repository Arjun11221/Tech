// // callbak function => it is passed as an argument to the another function

// // function xyz(abc){
// //     abc();

// // }

// // xyz(abc);


// // function abc(){
// //     console.log("Hello");
// // }

// // abc => callback function


// // Higher-order Function => it is a function that takes one or more arguments or retrun a function is called HOF.


// function x(){
//     console.log("X Called");
// }

// function y(x){
//     x();
// }

// y(x);

// // Note : Function x is a callback function beacuse it is passed as an argument to the function y that's why y function is a HOF because it takes x function as an argument.


// // HOF => map, filter and reduce etc.


// let arr = [2,3,1,4,5,6,7,8,2,3];

// // arr => odd or even 
// // output => even print on the console 
// // map => return an array

// // called : "undefined"



// var callback = (ele)=>{
//     if(ele%2===0){
//         console.log(ele);
//     }
// }

// arr.map(callback);


// // Revise the HOF and Callback function in good way







// Callback Hell(Pyramid of doom) => When we pass a callback function to the other callback function is called callback hell.

// Nested Callbacks is Called Callback Hell

// Hell => negative => Narak => Bekar Cheez => 


// const parent = ()=>{

// }

// Disadvantage

// 1) Readability
// 2) Maintainbility
// 3) Debugging


// 50% => Js Complete


// Promises => Next Class


// Homework =>
    // 1) Revision of Prev Topics => 2-3 times
    // 2) TDZ => Temporal Dead Zone
    // 3) Hoisting => Ache se





// Promises => Promises are used to handle the async task in the js.

// async task  => task => time consuming => Api fetch => times => Result 

// Need ?? 


// const URL = "https://jsonplaceholder.typicode.com/users";

// const data = fetch(URL);

// console.log(data);   // return Promise => pending state

// fetch() => Web Api => use => to make Api Call


// Promise has three states

// 1). Pending State => Initial State, neither fullfilled nor rejected.

// 2). Fullfilled State => Operation was completely successfully.

// 3). Rejected State  => Operation has failed.



// Promise => A Promise is an object which represent the eventual completion or failure of an async operation.


// object = {data}
// Array = []



// HomeWork  => Promise Chaining 




// async and await 

// async => async is a keyword which use before the function declaration.
// async => return a promise

// await => Promise => pending => solve => use await

const foo = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.76922849999999&lng=77.25919379999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    // data is not in the form of readable
    const res = await data.json();
    console.log(res);
}

foo();

// json => like a Object => {data}

// 70% => js complete

// HomeWork
// 1) DOM => Selecting Elements, Modifying and Events

const heading2 = document.getElementById("head");
console.log(heading2);
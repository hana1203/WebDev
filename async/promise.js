'use strict';
/*
비동기를 간편하게 처리할수있게 도와주는 JS제공 Object
정상적으로 기능이 수행이되면 성공메시지와함께 처리된 결과값 전달 그렇지않으면 에러값전달 
비동기적인 것을 수행하기위해 콜백함수 대신 유용하게 쓰일수있는 object 

state 성공? 실패?
state: 프로미스가 만들어져서 오퍼레이션이 수행중일때 pending
operation 성공적으로 끝나면 fulfilled or 파일못찾거나 네트워크 문제생기면 rejected 
producer 정보제공 consumer 정보소비 차이점?
Promise에는 우리가 원하는 기능을 수행해서 해당하는 데이터를 만들어내는 Promise 오브젝트 Producer vs Consumer 로 나눠진다.
*/

// 1. Producer
//새로운 Promise 생성되면, excecutor 라는 함수가 자동적으로 실행된다. 
//promise를 만드는 순간 우리가 전달한 executor 라는 콜백함수가 바로 실행한다.
const promise = new Promise((resolve, reject) => {
    //doing some heavy work (newtwork, reading filels)
    console.log('doing something...');
    setTimeout(()=> {
        resolve('harry');
        reject(new Error('no network'));
    }, 2000);
})

// 2. Consumer
// then, catch, finally 사용해서 값 받아올 수 있다.
//then 은 promise가 정상적으로 잘 수행되어서 마지막에 최종적으로 resolve라는 콜백함수를 통해 전달한 값이 value의 파라미터값으로 전달되어서 들어온다.
promise
.then((value)=> {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => { //성공하든 실패하든 어떤기능을 마지막으로 수행하고 싶을때 
    console.log('finally')
})

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000) 
});

fetchNumber
//성공적으로 잘수행되면
.then(num => num *2) //2
.then(num => num* 3) //6
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(num-1), 1000);
    });
})
.then(num => console.log(num)); //5

//then 은 값을 바로 전달할 수 도 있고 또다른 비동기인 Promise를 전달할 수도 있다. 
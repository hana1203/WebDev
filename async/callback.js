/*Javascript is synchronous.
Javascript 동기적인 아이 
호이스팅이 된 이후부터 작성한 순서에 맞춰서 하나하나 동기적으로 실행 
hoisting: var, function 선언들이 제일 위로 올라가는 것

Asynchronous
언제 코드가 실행될지 예측할수없는 것

setTimeout 
브라우저 API
1second 지난 후에 1000ms 밀리세컨드 
브라우저! 너에게 요청이 하나왔어 1초뒤에 전달해준 콜백을 실행해줘라고 요청
*/

'use strict';

console.log(1);
setTimeout(function () {
    console.log(2);
},1000)
console.log(3);

// Synchronous callback 
// 즉각적으로 동기적으로 실행되는 콜백 

function printImmediately(print) {
    print();
}
//callback을 받아서 바로 그 callback을 실행 
printImmediately(() => console.log('hello'));


// Asynchronous callback 
// 나중에 언제 실행될지 예측할수없는 콜백 
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'), 2000);


//Callback hell example 콜백지옥 👻
class UserStorage {
    //loginUser 함수 호출하면 2초뒤에 코드블럭 실행
    loginUser(id, password, onSucess, onError) {
        setTimeout(()=> {
            if ((id === "ron" && password === "weasley")||(id === "hermione" && password === "granger"))  {
               //조건문 조건에 맞으면  
                onSucess(id); //전달받은 onSucess콜백을 부르면서 id 전달
            } else { 
                onError(new Error("not found")); //onError 콜백부르면서 Error라는 오브젝트만듬
            }
        },2000);
    }
    //사용자가 역할을 받아올때 1초뒤에 이 코드가 실행 
    getRoles(user, onSuccess, onError) {
        setTimeout(()=> {
            if (user === 'ron') {
                onSuccess({name: "ron", role: "admin"});
            } else {
                onError(new Error('no aceess'));
            }
        } ,1000);
    }
}

//1. id, pw 입력받아오기
//2 서버에 로그인
//3 로그인 성공하면 받아온 id 이용해서 역할을 요청해서 다시받아옴
//4 역할이 성공적으로 받아져오면 사용자의 object를 출력

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    (user)=> {   
        userStorage.getRoles(
            user,
            userWithRole=> {
            alert(`Hello ${userWithRole.name}, you have ${userWithRole.role} role.`);
        }, 
            error=> {
                console.log(error);
        }); 
    }, 
    (error) => {
        console.log(error);
    }
);
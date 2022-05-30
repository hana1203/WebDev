//Callback hell example 콜백지옥을 프로미스로 바꾸기!

class UserStorage {
    //loginUser 함수 호출하면 2초뒤에 코드블럭 실행
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if ((id === "ron" && password === "weasley")||(id === "hermione" && password === "granger"))  {
               //조건문 조건에 맞으면  
                resolve(id); //전달받은 onSucess콜백을 부르면서 id 전달
            } else { 
                reject(new Error("not found")); //onError 콜백부르면서 Error라는 오브젝트만듬
            }
        })
        },2000);
    }
    //사용자가 역할을 받아올때 1초뒤에 이 코드가 실행 
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if (user === 'ron') {
                    resolve({name: "ron", role: "admin"});
                } else {
                    reject(new Error('no aceess'));
                }
            } ,1000);
        })
    }
}

//1. id, pw 입력받아오기
//2 서버에 로그인
//3 로그인 성공하면 받아온 id 이용해서 역할을 요청해서 다시받아옴
//4 역할이 성공적으로 받아져오면 사용자의 object를 출력

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id, password) //userStorage의 loginUser 호출해서 id, password 전달
.then(user => userStorage.getRoles(user)) //이게 잘되면? getRoles 호출해서 유저 받아오기 
.then(user => alert(`Hello ${user.name}, you have ${user.role} role.`)) //사용자의 역할을 잘 받아온다면? 
.catch(console.log); //만약 문제가생기면 간단하게 콘솔로그 출력

// userStorage.loginUser(
//     id, 
//     password, 
//     (user)=> {   
//         userStorage.getRoles(
//             user,
//             userWithRole=> {
//             alert(`Hello ${userWithRole.name}, you have ${userWithRole.role} role.`);
//         }, 
//             error=> {
//                 console.log(error);
//         }); 
//     }, 
//     (error) => {
//         console.log(error);
//     }
// );
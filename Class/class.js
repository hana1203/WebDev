//class: template
//object: instance of a class

//Getter and Setter

'use strict';
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        console.log(`${firstName} is ${age} year's old.`)
        //getter를 정의하는 순간 this.age는 메모리에 올라가있는 age가 아닌 getter를 호출
        //setter를 정의하는 순간 메모리에 바로 age의 값을 할당하는게 아닌 setter를 호출
        /*
        set age(value) {
            this.age = value;
        }
        */
        //setter안에서 전달된 value를 this.age에 할당할때 메모리의 value를 업데이트하는게 아닌 setter를 호출
        //setter는 무한정반복되어 콜스택 닫혔다는 에러를 내는것임
        //이를 방지하기 위해? 
        //getter setter안에 쓰이는 변수이름을 다르게 한다. 
    }

    get age() {
        return this.privateAge;
    }

    set age(value) {
        this.privateAge = value < 0? 0: value; //value가 0보다 작으면 0으로 셋팅
    }
    //this.age 를 그대로 쓰면 에러발생 RangeError: Maximum call stack size exceeded

}

const user1 = new User("Steve", "Jobs", -1); //Steve is -1 year's old.
console.log(user1.age); //0
user1.age = 14;
console.log(user1.age); //14
user1.firstName = "moanka";
console.log(user1); 
//User { firstName: 'moanka', lastName: 'Jobs', privateAge: 14 }
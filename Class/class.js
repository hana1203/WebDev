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

//java에서는 클래스안에 private으로 변수를 먼저 선언하고 생성자 만들고 get변수() set변수() 메서드를 정의해두었다. 
//실행클래스에서 인스턴스.get변수() 로 변수값 가져오고 인스턴스.set변수(인자) 를 썼는데 ... 
//js에서는..? hmm... get set 을 클래스안에 정의하면 생성자에서 생성한 초기 변수값을 바꿔주는것인가? 
//get set을 메서드로는 사용하지 못하는건가...? user1.getage() 처럼
//이럴거면 무슨 필요로 get set 쓰는것?
//실험해본 바로는 age 를 다시 재할당할때도 .age = 14 쓰는데 get set 정의안된 firstName 변수도 다시 재할당 가능.. 


//Inheritance
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height =height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color`)
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    //Overriding
    draw() {
        super.draw();
        //공통적으로 정의해둔 draw()도 부모클래스거 가져오려고
        console.log("🔺");
    }
    getArea() {
        return (this.width * this.height)/2;
    }

}
const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw(); //drawing blue color
console.log(rectangle.getArea()); //400

const triangle = new Triangle(20, 20, "red");
triangle.draw(); 
//drawing red color  -> super.draw()로 부모클래스에서 정의한 것
//🔺  -> 오버라이딩해서 Triangle 클래스에서 재정의한 것
console.log(triangle.getArea()); //200

//Class checking : instanceOf
//클래스의 인스턴스가 맞으면 true 아니면 false 반환 
console.log(rectangle instanceof Rectangle); //t
console.log(triangle instanceof Rectangle); //f 
console.log(triangle instanceof Shape); //t
console.log(triangle instanceof Object); //t
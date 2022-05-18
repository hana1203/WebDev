console.log("잘있니")

let elInputUsername = document.querySelector('#username');

console.log(elInputUsername);
//input#username
elInputUsername.value = 'hana';
//값 넣기

let elFailureMessage = document.querySelector('.failure-message')
console.log(elFailureMessage)
//div.failure-message.hide
let elSuccessMessage = document.querySelector('.success-message');

// elFailureMessage.classList.remove('hide')
//hide 클래스를 css를 통해서 안보이게 해놨으니까 보이게 하려면 hide클래스를 없애면 된다.

/*
아이디 입력창 (elInputUsername)에 글자를 키보드로 입력할때 
글자수가 4개 이상이면
사용할수있는 아이디입니다 success-message 메시지 출력
*/
// event ~할때
// eventhandler 이벤트가 발생할때 발생하는 함수

elInputUsername.onkeyup = function() { //eventhandler
//키보드가 눌렸다 뗴어졌을때
//onclick, onkeyup, onkeydown
    console.log(elInputUsername.value)
    if (isMoreThan4Length(elInputUsername.value)) { //네글자 이상이면
        //성공메시지 보여야함
        elSuccessMessage.classList.remove('hide');
        //실패메시지 가려져야함
        elFailureMessage.classList.add('hide');
    }
    else { //네글자 미만이면
        //실패메시지 나타나야함
        elFailureMessage.classList.remove('hide');
        //성공메시지 안보여야함
        elSuccessMessage.classList.add('hide');
    }
} 


function isMoreThan4Length(value) {
    return value.length >=4;
} //value가 4이상이면 true 아니면 false 반환
//var, let 키워드

function greetSo(firstName) {
    let time = 'night';
    if (time === 'night') {
        let greeting = 'Good Night';
    }
    return greeting + ' ' + firstName;
}
greetSo('Steve');
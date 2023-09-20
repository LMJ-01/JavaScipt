// var hi = "hello"; // 전역 변수

// function change() {
//     hi = "bye"; // 함수 안에서 전역변수 값 수정 가능
// }

// console.log(hi); //  hello 
// change();
// console.log(hi); //  bye



var hi = "hello"; // 전역 변수

function change() {
    var hi = "bye";  // 지역변수. 이 함수에서만 사용 가능. 
}

console.log(hi); //  hello 
change();
console.log(hi); //  hello
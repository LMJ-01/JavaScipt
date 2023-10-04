/*
const button = document.querySelector("button");

button.onclick = () => {
    document.body.classList.toggle("dark");
}
*/


// 버튼이 여러개면 부모  > 자식 
const btn = document.querySelector("#toggle-box button");
//const btn = document.querySelector("button");

btn.onclick = () => {  // 버튼을 누르면
    document.body.classList.toggle("dark"); // 문서 바디에 dark 스타일 적용하라.
}
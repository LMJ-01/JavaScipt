const result = document.querySelector("#result");
const birthday = new Date("2001-09-03");  // 생일
const today = new Date(); // 날짜

// 생일로부터 오늘까지 흐른 시간 계산
let passedTime = today.getTime() - birthday.getTime();
// 릴리초를 일로 계산
let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));

result.innerText = passedDay;
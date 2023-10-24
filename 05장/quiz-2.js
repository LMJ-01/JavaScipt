// number인 요소 가져오기
const num1 = document.querySelector("#number1");
const num2 = document.querySelector("#number2");

// 스타일에 button인 요소 가져오기
const btn = document.querySelector("button");

// 스타일에 result값 요소 가져오기
const result = document.querySelector("#result");

// 최대공약수 GCD
// function getGCD함수 선언
// 매개변수 변수 num1, num2
function getGCD(num1, num2) {
  // num1 과 num2 중 더 큰 숫자 max에 저장
    let max = num1 > num2 ? num1 : num2;
    // GCD 초기화
    let GCD = 0;
    for (let i = 1; i <= max; i++) {
      if (num1 % i == 0 && num2 % i == 0) { // 나머지가 0일때
        GCD = i;   // i 값 GCD
      }
    }
    return GCD;
  }
// 클릭하면
btn.onclick = () => {
  // num에 입력 요소 값을 가져와서 getGCD함수 결과를 result값
  result.innerText = getGCD(num1.value, num2.value);  // 함수실행
}
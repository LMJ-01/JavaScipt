// 반지름을 입력받아 원의 넓이와 둘레를 출력한다.
// 반지름은 프롬프트로 입력 받는다.
// 원의 넓이와 둘레를 구하는 함수를 가각 작성합니다.
// 넓이와 둘레는 소수 3자리까지 출력합니다.

// 1. 함수 생성
// 원의 넓이
function area(r) {
    return r * r * Math.PI;
}
// 원의 둘레
function circum(r) {
    return 2 * r * Math.PI;
}

// 2. 가져오기
const result = document.querySelector("#result");

// 3. 입력받기
const radius = prompt("원의 반지름의 길이 :");

// 4. 결과
result.innerText =
    `반지름 :${radius}
    원의넓이 : ${area(radius).toFixed(3)}
    원의둘레 : ${circum(radius).toFixed(3)} `;
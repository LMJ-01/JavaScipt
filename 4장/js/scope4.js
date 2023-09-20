const factor = 5; // 변수 선언 및 생성.

function calc() {
    return num * factor;  // 오류 발생. num 지녁 변수가 선언된 블록 안에서만 유효
}

{
    const num = 10; // 지역 변수
    let result = calc(); // 함수 호출
    console.log(`result : ${result}`);
}
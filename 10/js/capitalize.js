const string = prompt("영문 소문자로 된 문자열을 입력하세요.");

// // 첫 번째 글자를 대문자로 만들어서 저장
// const firstCh = string[0].toUpperCase();
// // 두 번쨰 글자부터 끝까지 추출해서 저장
// const remainStr = string.slice(1);
// // 첫 번쨰 글자와 추출한 문자열을 연결
// const result = firstCh + remainStr;
// document.write(result);

const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
document.write(result);
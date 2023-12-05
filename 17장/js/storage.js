let students = ["kim", "Lee", "Park"];
console.log(`현재 students : ${students}`);
localStorage.setItem("students", JSON.stringify(students));
// 스토리지에 students 키로 배열을 저장합니다.

// 로컬 스토리지에서 가져온 후 추가하고 저장합니다.
let localData;
if (localStorage.getItem("students") === null) { // 스토리지에 students 키가 있는지 확인합니다.
    localData = [];
} else {
    localData = JSON.parse(localStorage.getItem("students"));
    // 스토리지의 값을 localData로 저장합니다.
}
localData.push("Choi"); // localData에 Choi를 추가합니다.
localStorage.setItem("students", JSON.stringify(localData));
//스토리지에 localData를 저장합니다.
console.log(`추가 후 students : ${localData}`); // 스토리지에 저장된 값을 표기합니다.

//로컬 스토리지에서 특정 값을 삭제합니다.
const indexOfValue = localData.indexOf("Lee"); // 인덱스 탐색
localData.splice(indexOfValue, 1); // 인덱스에 해당하는 값부터 1개를 삭제합니다.
localStorage.setItem("students", JSON.stringify(localData));
console.log(`삭제 후 students : ${localData}`);

// 로컬 스토리지에서 특정 키를 삭제합니다.
localStorage.removeItem("students");
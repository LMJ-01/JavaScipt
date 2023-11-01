//유저 네임 요소 가져오기
const username = document.querySelector("#username");
// 학번 요소 가져오기
const userid = document.querySelector("#userid");
// 점수 요소 가져오기
const score = document.querySelector("#score");
// form에 있는 버튼 가져오기
const btn = document.querySelector("form > button");

// 버튼을 클릭하면
btn.addEventListener("click", (e) => {
    // 폼 안의 버튼을 클릭했을때 서버로 보내지 않기
    e.preventDefault();

    let body = document.querySelector("tbody");
    // 요소 노드 tr 만들기 
    let tr = document.createElement("tr");  

    // 첫번째  입력한 이름 넣기
    let nameTd = document.createElement("td");
    nameTd.innerText = username.value;
    let nameValue = username.value.trim(); // 공백을 제거한 값
  
    // 두번째 입력한 학번 넣기
    let idTd = document.createElement("td");  
    idTd.innerText = userid.value;
    let idValue = userid.value.trim(); // 공백을 제거한 값
    

    // 세번째 입력한 점수 넣기
    let scoreTd = document.createElement("td");  
    let scoreNum = parseFloat(score.value);
    if (isNaN(scoreNum) || scoreNum < 0 || scoreNum > 100) {
    alert("잘못된 점수 입니다.");
    return;
     }
    scoreTd.innerText = score.value;
    let scoreValue = score.value.trim(); // 공백을 제거한 값

    // 학점
    let gradeTd = document.createElement("td");
    if (scoreNum >= 90) {
        grade = "A학점";
    } else if (scoreNum >= 80) {
        grade = "B학점";
    } else if (scoreNum >= 70) {
        grade = "C학점";
    } else if (scoreNum >= 60) {
        grade = "D학점";
    } else {
        grade = "F학점";
  }
    gradeTd.innerText = grade;
  
  // 하나의 항목이라도 입력이 되지 않으면
  if (nameValue === "" ||  idValue === "" || scoreValue === "") {
    alert("모든 내용을 입력해 주세요.");
    return;
  }

    // 등록하기 버튼을 누르면 이름 학번 점수 입력  내용 삭제
    username.value = "";
    userid.value = "";
    score.value = "";
    grade.value = "";


    tr.appendChild(nameTd); // Tr 노드의 자식 노드 추가
    tr.appendChild(idTd); // Tr 노드의 자식 노드 추가
    tr.appendChild(scoreTd) // Tr 노드의 자식 노드 추가
    tr.appendChild(gradeTd); // Tr 노드의 자식 노드 추가
    body.appendChild(tr); // body 노드의 자식 노드 추가
});
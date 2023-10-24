//유저 네임 요소 가져오기
const username = document.querySelector("#username");
// 전공 요소 가져오기
const major = document.querySelector("#major");
// form에 있는 버튼 가져오기
const btn = document.querySelector("form > button");

// 버튼을 클릭하면..
btn.addEventListener("click", (e) => {
  // 폼 안의 버튼을 클릭했을때 서버로 보내지 않기
  e.preventDefault();

  let body = document.querySelector("tbody");
  // 요소 노드 tr 만들기 
  let tr = document.createElement("tr");  

  // 첫번째  입력한 이름 넣기
  let nameTd = document.createElement("td");
  nameTd.innerText = username.value;
  
  // 두번째 입력한 전공 넣기
  let majorTd = document.createElement("td");  
  majorTd.innerText = major.value;
  
 // 등록하기 버튼을 누르면 이름 전공 입력  내용 삭제
  username.value = "";
  major.value = "";

  tr.appendChild(nameTd); // Tr 노드의 자식 노드 추가
  tr.appendChild(majorTd); // Tr 노드의 자식 노드 추가
  body.appendChild(tr); // body 노드의 자식 노드 추가
});
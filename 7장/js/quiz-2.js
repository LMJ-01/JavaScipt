// bttn 요소 가져오기
const btn = document.querySelector("#bttn");

// noti-box 요소 가져오기
const notiBox = document.querySelector("#noti-box");

// 클릭하면
btn.addEventListener("click", () => {
  // div 요소 생성
  const noti = document.createElement("div");
 
  // 요소 노드 noti 만들기
  noti.classList.add("noti");
  noti.innerText = "알림 내용이 표시됩니다.";

  // notiBox 부모노드  noti 자식노드
  notiBox.appendChild(noti);

  // 3초 후 noti 요소 제거
  setTimeout(() => {
    noti.remove();
  }, 3000);
});
// bttn인 요소가져오기
const btn = document.querySelector("#bttn");
// nav인 요소가져오기
const nav = document.querySelector("#nav");

// 버튼을 클릭하면
btn.addEventListener("click", () => { 
  // btn에 active 토글
  btn.classList.toggle("active");
  // nav에 active 토글
  nav.classList.toggle("active");
});
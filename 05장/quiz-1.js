// view 요소 가져와서 Btn 변수에 저장
const Btn = document.querySelector("#view");

// 디테일 요소 가져와서 detail에 저장
const detail = document.querySelector("#detail");

// 디테일을 클릭하면
Btn.onclick = () => {
    // 디테일에  hidden 스타일 적용
    detail.classList.toggle("hidden");
};  
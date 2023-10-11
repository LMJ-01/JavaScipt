const open = document.querySelector("#open");  //버튼을 가져와 open
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close"); // 박스가 사려져야 하므로 close

open.addEventListener("click", () => {
    modalBox.classList.toggle("active"); // 클릭하면 .active 스타일을 토글
});
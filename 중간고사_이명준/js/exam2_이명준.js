const open = document.querySelector("#open");  //버튼을 가져와 open
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close"); // 박스가 사려져야 하므로 close

open.addEventListener("click", () => {
    modalBox.classList.toggle("active"); // 클릭하면 .active 스타일을 토글

    let modalTimer = 0; // 타이머 변수
    // 타이머 시작
    let Timer = setInterval(() => {
        // 이미 타이머가 실행 중인지 확인하고 중지
        modalTimer++;
    if (modalTimer === 5) {
        clearTimeout(Timer);
    } 
    }, 5000)  // 5초
});
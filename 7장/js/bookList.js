// 제목 가져오기
const title = document.querySelector("#title"); // '제목 영역' 정보

// 저자 가져오기
const author = document.querySelector("#author"); // '저자' 정보

// 저장하기 버튼 가져오기
const save = document.querySelector("#save"); // '저장하기' 정보

// 정보 표시 영역 가져오기
const bookList = document.querySelector("#bookList"); // 정보가 표시될 영역

// 버튼을 클릭하면
save.addEventListener("click", (e) => {
    e.preventDefault(); // 버튼을 누르면 서버로 보내지 않는다.
    // 제목과 저자 정보를 출력
    // 리스트 만들기
    const item = document.createElement("li");
    // item에 내용 넣기
    item.innerHTML = `${title.value} - ${author.value} <sapn class = delBtn>삭제<span>`;
    
    // 정보 영역에 추가
    bookList.appendChild(item);

    // input text 상자의 내용 지우기
    title.value = "";
    author.value = "";

    // 목록에서 제거하기
    // 삭제 버튼 요소를 모두 가져온다.
    const delBtns = document.querySelectorAll(".delBtn");

    // 삭제 버튼을 누를 때마다... 삭제한다.
    for (let delBtn of delBtns) {
        delBtn.addEventListener("click", function () {
            this.parentNode.parentNode.removeChild(this.parentNode);
        });
    }
});
// 웹 요소 가죠오기
const todoInput = document.querySelector('#todo-input'); // 사용자 입력
const addButton = document.querySelector('#add-button'); // [추가] 버튼
const todoList = document.querySelector('#todo-list'); // 할 일 목록

// 이벤트  처리
document.addEventListener("DOMContentLoaded", getLocal);
addButton.addEventListener('click', addTodo);
todoList.addEventListener('click', manageTodo);

// 함수
function addTodo(e) {
    e.preventDefault(); // 기본 동작을 취소합니다.

    // 새로운 내용을 추가합니다.
    const newDiv = document.createElement('div');
    newDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-content');
    newDiv.appendChild(newTodo);
    
    saveToLocal(todoInput.value); // 로컬 스토리지에 저장합니다.

    // 내용의 오른쪽에 버튼에 버튼을 추가합니다.
    const completeButton = document.createElement('button');
    completeButton.innerText = '완료';
    completeButton.classList.add('complete-button');
    newDiv.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '삭제';
    deleteButton.classList.add('delete-button');
    newDiv.appendChild(deleteButton);

    todoList.appendChild(newDiv);
    todoInput.value = ""; // 입력 창 초기화
}

function saveToLocal(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getLocal() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
        //스토리지에서 todos 값을 가져옵니다.
    }
    todos.forEach(function(todo) { // todos 요소마다 반복합니다.
        const newDiv = document.createElement('div');
        newDiv.classList.add('todo');
        const newTodo = document.createElement('li');
        newTodo.innerText = todo; // 로컬 스토리지의 값을 표시합니다.
        newTodo.classList.add('todo-content');
        newDiv.appendChild(newTodo);

        const completeButton = document.createElement('button');
        completeButton.innerText = '완료';
        completeButton.classList.add('complete-button');
        newDiv.appendChild(completeButton);
        const deleteButton = document.createElement('button');
        deleteButton.innerText = '삭제';
        deleteButton.classList.add('delete-button');
        newDiv.appendChild(deleteButton);

        todoList.appendChild(newDiv);

        todoInput.value = "";
    });
}

function manageTodo(e) {
    const whichButton = e.target.classList[0]; // 클릭한 부분의 class명을 가져옵니다.
    if (whichButton === 'complete-button') { // [완료] 버튼이면
        const todo = e.target.parentElement;
        todo.children[0].classList.toggle('completed');
        // 내용 부분에 .completed 클래스를 토글합니다.
    } else if (whichButton === 'delete-button') { // [삭제] 버튼이면
        const todo = e.target.parentElement; // [삭제] 버튼의 부모 요소를 todo에 할당합니다.
        removeLocal(todo); // [삭제] 버튼의 부모 요소를 삭제합니다.
        todo.remove();
    }
}

function removeLocal(todo) {
    let todos; // 로컬 스토리지에서 가져온 할 일들
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    
    //console.log(todo);
    const index = todos.indexOf(todo.children[0].innerText); // 삭제할 할 일의 인덱스
    //console.log(index); // 인덱스 확인하기
    todos.splice(index, 1); // index 번쨰 요소를 삭제합니다.
    localStorage.setItem('todos', JSON.stringify(todos)); // 변경된 todos를 저장합니다.
}
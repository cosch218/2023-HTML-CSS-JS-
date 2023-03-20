/* 투두리스트 만들기 */
// 추가) 추가 버튼을 누르면 할 일 값을 input을 통해 받아와서 ul의 li로 출력
// 완료) 체크박스에 체크를 하면 완료 표시
// 삭제) X 버튼을 누르면 해당 할 일 삭제


const todoForm = document.querySelector("#todo-form");
todoForm.addEventListener("submit", addTodo);
// 할 일을 추가하는 함수
function addTodo(e) {
    // 1) 추가
    // 할 일 입력창에 값을 입력하고 submit햇을 때 이벤트 발생 => form에 이벤트 걸어야 함
    // 실행할 함수 : 작성한 할 일을 ul네 li로 추가
    e.preventDefault();
    // input:text의 값을 가져오기
    const todoValue = todoForm.firstElementChild.value;
    // li 값을 담을 변수 생성
    const li = document.createElement("li");
    // li 태그에 추가할 내용 : 체크박스, 텍스트노드, 생성시간, 버튼
    const check = document.createElement("input");
    check.type = "checkbox";
    const text = document.createElement("span");
    text.innerHTML = todoValue
    const time = document.createElement("span"); // 투두리스트 생성 시간을 출력하기 위한 span 태그 추가
    time.innerHTML = getClock(); //clock에서 선언했던 함수 (다른 JS에서 작성한 함수를 가져와 쓸 수 있다)
    const btn = document.createElement("button");
    btn.innerHTML = "X";
    // li 태그에 생성한 태그 추가
    li.appendChild(check);
    li.appendChild(text);
    li.appendChild(time);
    li.appendChild(btn);
    // 그 값을 ul에 li를 생성하여 추가하기
    document.querySelector("#todolist").appendChild(li);
    // ul의 hidden 클래스 제거
    li.parentNode.classList.remove("hidden");
    // input:text의 값 초기화
    todoForm.firstElementChild.value = "";

    text.classList.add("spanText");
    time.classList.add("spanTime");
    
    
    // 2) 완료 - check에 클릭 이벤트 추가
    check.addEventListener("click", todoCheck);

    // 3) 삭제 - btn에 클릭 이벤트 추가
    btn.addEventListener("click", todoDelete);
}

// 2) 완료 - todoCheck 함수 작성
function todoCheck(e) {
    // 이벤트 객체를 통해서 이벤트가 실행된 태그 찾아서 그 값을 사용
    const checkBox = e.target;
    const span = checkBox.nextElementSibling;
    if (checkBox.checked == true) {
        span.style.color = "rgb(141, 140, 146)";
        span.style.textDecoration = "line-through"
    } else {
        span.style.color = "";
        span.style.textDecoration = "";
    }
}
// 3) 삭제 - todoDelete 함수 작성
function todoDelete(e) {
    // 선택된 li가 삭제되는 함수 작성 remove()
    const btnBox = e.target;
    const li = btnBox.parentNode;
    const ul = li.parentNode;
    li.remove();
    if (li.length == 1) {
        ul.classList.add("hidden");
    }
}

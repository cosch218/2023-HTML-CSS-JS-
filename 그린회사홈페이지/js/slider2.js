/* picture-btn을 눌렀을 때 각 위치의 slider-item 출력 */
const slider2Buttons = document.querySelectorAll("#slider2-buttons a");
const slider2Items = document.querySelectorAll(".slider-item2")

// 각각의 버튼을 눌렀을 때 그 위치에 있는 슬라이더로 이동
// 각각의 버튼 : slider2Buttons[0], slider2Buttons[1], slider2Buttons[2]
// 각각의 아이템 : slider2Items[0], slider2Items[1], slider2Items[2]
// 화면이 보이는 위치 : left=0, left=-100%, left=-200%
// 규칙 : sliderButons[0]을 누르면 left=0으로 이동
//          sliderButons[1]을 누르면 left=-100%으로 이동
//          sliderButons[2]을 누르면 left=-200%으로 이동
// >> 버튼[i]를 누르면 left = {i*(-100)}% 이동


// 버튼에 이벤트 리스너 추가
for (let i = 0; i<slider2Buttons.length; i++) {
    slider2Buttons[i].addEventListener("click", function(e){
        e.preventDefault();
        // forEach는 배열에 있는 각각의 값을 꺼내서 콜백함수로 계산할 수 있다
        // 배열.forEach(function(배열의값, 인덱스){})
        slider2Items.forEach(function(item, index){
            item.style.left = `${i*-850}px`;
        })
        // a 태그의 모든 .on을 제거
        for (let i = 0; i<slider2Buttons.length; i++) {
            slider2Buttons[i].classList.remove("on");
        }
        // 현재 선택한 a 태그에 .on을 추가
        e.target.classList.add("on");
    })
}

/* 슬라이더 내부에 slider2-dot을 만들어서 버튼 작성 */
// 형태 : div class="slider2-dots" : dot을 묶는 태그
//          div class = "dot" : 각 슬라이더로 이동하는 dot
// 방법 : slider2Items의 개수에 따라서 생성 및 추가
// 어느 위치 : slider2의 하단에 추가
const dots = document.createElement("div");
dots.classList.add("slider2-dots");

for (let i = 0; i < slider2Items.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
    // dot에 이벤트 리스너 추가
    dot.addEventListener("click", function(e){
        // 각각 슬라이더의 left 값 수정
        slider2Items.forEach(function(item){
            item.style.left = `${i*-850}px`;
        })
        // 모든 dot의 .on을 제외하고 현재 클릭한 dot만 .on
        // 모든 dot은 dots의 자식을 통해서 찾을 수 있다
        // >> dots의 자식들을 반복해서 remove()
        for (let i = 0; i < dots.children.length; i++) {
            dots.children[i].classList.remove("on");
        }
        // 현재 dot은 이벤트 객체
        e.target.classList.add("on");
    })
}

const slider2 = document.querySelector("#slider2");
slider2.appendChild(dots);
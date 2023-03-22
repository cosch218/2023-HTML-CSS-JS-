/* 스크롤 이벤트 작성 */
// 스크롤 할 때마다 실행되는 함수도 함께 작성


// 내비게이션 바
const nav = document.querySelector("#nav");

/*
* 스크롤 이벤트로 조건을 걸 때 사용할 수 있는 속성
* 스크롤 Y의 위치 : scrollY,
* 전체 스크롤 길이
* 화면의 길이 : innerHeight
*/
// 콘솔창에서 scrollY의 위치 확인
console.log("스크롤Y의 위치", window.scrollY);
window.addEventListener("scroll", function(){
    // scrollY가 200이상 스크롤 되면 scrollon 클래스 추가
    if (this.scrollY >= 200) {
        nav.classList.add("scrollon");
    } else {
        // scrollY가 200 미만이면 scrollon 클래스 제거
        nav.classList.remove("scrollon");
    }
})
/* slider-btn을 눌렀을 때 silder-item 위치 바뀜 */
const prevButton = document.querySelector("#prevbutton");
const nextButton = document.querySelector("#nextbutton");
const sliderItems = document.querySelectorAll(".slider-item");

// 전체 슬라이더 개수
const maxSlide = sliderItems.length;

// 현재 슬라이더를 알려주기 위한 변수
let currSlide = 1;

// btn을 눌렀을 때 left값으로 이동
prevButton.addEventListener("click",function(){
    // 현재 슬라이더가 1보다 클 때 실행
    if (currSlide > 1) {
        currSlide--; // currSlide가 2일 때 style.left 값은 -100%, 3일 때 -200%, 4일 때 -300%
        //sliderItems를 통해서 모든 slider-item의 left값 이동
        for (let i = 0; i < sliderItems.length; i++) {
            sliderItems[i].style.left = `${100+(-100)*currSlide}%`;
        }
    }
})
nextButton.addEventListener("click",function(){
    // 현재 슬라이더가 전체 개수보다 작을 때 실행
    if (currSlide < maxSlide) {
        currSlide++; // currSlide가 2일 때 style.left 값은 -100%, 3일 때 -200%, 4일 때 -300%
        //sliderItems를 통해서 모든 slider-item의 left값 이동
        for (let i = 0; i < sliderItems.length; i++) {
            sliderItems[i].style.left = `${100+(-100)*currSlide}%`;
        }
    }
})
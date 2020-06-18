// load
// event
var divEl = document.querySelector('#div'),
    pEl = document.querySelector('#p');

function onClickDiv(e){
    e.preventDefault();
    console.log('Div Click');
}
function onClickP(e){
    e.preventDefault();
    // preventDefault() - 기본 이벤트를 방지하는 메서드.
    e.stopPropagation();
    // stopPropagation() - 버블링을 방지하는 코드.
    // Div와 P요소에 모드 Click 이벤트가 추가되어 있을 때.
    // 하위 요소인 P 요소를 클릭할 때, Div 도 같이 클릭 이벤트가 발생한다. (버블링)
    // 버블링을 방지하고 P요소가 클릭될 때 부모요소인 Div까지 이벤트가 전파되지 않도록 방지할 수 있다.
    // event.stopPropagation();
    console.log('P click');
}
divEl.addEventListener('click', onClickDiv);
pEl.addEventListener('click', onClickP);


// https://source.unsplash.com/random

var imgEl = document.querySelector('img'),
    image = new Image(),
    imgPath = 'https://source.unsplash.com/random';

function onLoadImage(e){
    console.log('loaded');
    // 로드한 이미지의 해상도.
    var el = e.currentTarget;
    // 원본 이미지의 width, height.
    console.log(el);
    console.log(el.naturalWidth, el.naturalHeight);
    console.log(image.naturalWidth, image.naturalHeight);
    image.style.width = el.naturalWidth + "px";
    image.style.height = el.naturalHeight + "px";
    // 1차 함수를 이용해서 사이즈를 같은 비율로 줄임
    // x : y = a : b
    // 지정하고자 하는 width 값 : 구하고자 하는 height = 원본 이미지의 width : 원본 이미지의 height
    // y = x * b / a;
    // z = y * a / b;

    var width = 1000,
        height = Math.round(width * el.naturalHeight / el.naturalWidth); 
        // 소수점으로 결과 값이 나올 때 반올림해서 정수로치환.
    image.style.width = width + 'px';
    image.style.height = height + 'px';
    document.body.appendChild(image);
}
// 이미지를 로드하는 이벤트. video, pdf파일 등도 사용 가능.
image.src = imgPath;
image.addEventListener('load', onLoadImage);

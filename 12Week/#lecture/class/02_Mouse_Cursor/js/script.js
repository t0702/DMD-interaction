var cursorDotEl = document.querySelector('#cursor-dot'),
    cursorBGEL = document.querySelector('#cursor-bg'),
    progressEl = document.querySelector('#progress'),
    listEl = document.querySelector('#list'),
    btnListEl = listEl.querySelectorAll('a');

btnListEl = Array.prototype.slice.call(btnListEl); // 노드 목록을 배열로 사용 가능하도록 치환.
function onMouseMove(e){
    // console.log(e.clientX, e.clientY);
    // console.log(e.pageX, e.pageY);
    // 마우스의 좌표를 받아올 수 있다.
    // clientX - 브라우저를 기준으로 마우스 좌표를 찾아온다. (스크롤이 되어도 같은 값 - 현재 보이는 브라우저의 고정값)
    // page - 문서 상단을 기준으로 마우스 좌표를 찾아온다. (스크롤이 되면 다른 값 - 현재 문서의 스크롤에 영향을 받아 값이 변형)

    var posX = e.clientX, posY = e.clientY;
    /* 
    // 마우스 좌표의 위치 값.
    cursorDotEl.style.top = posY + 'px';
    cursorDotEl.style.left = posX + 'px';

    cursorBGEL.style.top = posY + 'px';
    cursorBGEL.style.left = posX + 'px';

    progressEl.style.top = posY + 'px';
    progressEl.style.left = posX + 'px';
     */
    //gsap 애니메이션 처리
    // to(param1, param2);
    // param1 - 요소를 기입,
    // param2 - gsap 문서 형식에 따라 옵션값을 기입(object);
    gsap.killTweensOf(cursorDotEl);
    gsap.killTweensOf(cursorBGEL);
    gsap.killTweensOf(progressEl);
    // 요소에서 애니메이션을 제거.
    
    gsap.to(cursorDotEl, {
        top: posY, 
        left: posX,
        duration: 0.5, // s - 0.1 : 100ms, 1.0 : 1000ms // 시간차를 두고 마우스를 따라옴
        ease: 'sine.out' // 기본값은 linear
    });
    gsap.to(cursorBGEL, {top: posY, left: posX, duration: 0.3, ease: 'sine.out'});
    gsap.to(progressEl, {top: posY, left: posX, duration: 0.3, ease: 'sine.out'});
}
function onMouseEnterList(e){
    console.log('enter');
    if(!cursorBGEL.classList.contains('active')){
        cursorBGEL.classList.add('active');
    }
    if(!progressEl.classList.contains('active')){
        progressEl.classList.add('active');
    }
}
function onMouseLeaveList(e){
    console.log('leave');
    if(cursorBGEL.classList.contains('active')){
        cursorBGEL.classList.remove('active');
    }
    if(progressEl.classList.contains('active')){
        progressEl.classList.remove('active');
    }
}
window.addEventListener('mousemove', onMouseMove);
for(var i = 0; i < btnListEl.length; i++){
    btnListEl[i].addEventListener('mouseenter', onMouseEnterList);
    btnListEl[i].addEventListener('mouseleave', onMouseLeaveList);
}
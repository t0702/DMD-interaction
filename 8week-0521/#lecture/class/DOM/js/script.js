console.log('JavaScript 로드');

// history.
// 사용자가 방문한 방문 이력 정보를 담고 있는 객체.
// console.log(window.history);
// console.log(history);
// /* 방문이력니 이동 되었다면 1초과(2이상) */
// console.log(history.length); // 방ㅇ문 이력에 대한 개수, 최초 문서를 로드할 때, 1 반환.

// 모바일 웹을 만들 때, 뒤로가기 버튼을 넣어야 하는지, 빼야하는지 확인할 때.
if(history.length > 1){
    // 뒤로가기 버튼 추가.
}else{
    // 뒤로가기 버튼 삭제.
}

// history.back().
// 이전 방문 이력으로 이동.

// history.forward();
// 다음 방문 이력으로 이동 (다음 방문이력이 있을 때에만 동작)

// history.go(-1); 방문 이력을 기준으로 뒤로가기.
// index 번호에 따라 이동.

// location
// console.log(window.location);
// console.log(location);

// ** 
// console.log(location.href);
// url 경로 전체를 문자열로 반환.(get)
// location.href = "http://google.com"; // 해당 url 경로로 이동.

// *
// location.hash;
// hash 태그를 이용해서 스크롤 이동하거나 할 수 있다.
// spa - single page application (원페이지 사이트)
// 각 섹션별로 about, work, contact.about
// url/#about, url/#work, url/#contact
// 주소가 있는 원페이지 사이트를 만들 때, 주로 사용.

// *
// location.reload();
// 문서 새로고침.

// location.host - 호스트네임(포트포함)을 반환(도메인)
// location.hostname - 호스트네임을 반환
// location.port - 포트를 반환
// location.search - url 매개변수를 반환
// location.protocol - 프로토콜(http:, https:, file:. ftp:, sftpL, svn:....)을 반환
// location.pathname - 현재 보고있는 페이지의 경로 / - index 페이지, / about - about 페이지


// 요소 노드를 찾아오는 방법.
var boxDivEl = document.getElementById('box-div');
var boxEls = document.getElementsByClassName('box');
var userIdEl = document.getElementsByName('user_id')[0];
var divEls = document.getElementsByTagName('div');
var ulEls = document.getElementsByTagName('ul')[0];

for(var i = 0; i < boxEls.length; i++){
    var boxEl = boxEls[i];
    boxEl.innerText = 'new box' + parseInt(i + 1, 10);
    boxEl.style.backgroundColor = '#000';
    boxEl.style.color = '#fff';
    // console.log(boxEls[i]);
}

// query
/*
#id{}
.class{}
[name=user_id]{}
div{}
ul{}
*/

// document.querySelector();
// 1개의 요소 노드만 반환.
var h1TitleEl = document.querySelector('h1#title.title');
// console.log(h1TitleEl);
// element.querySelectorAll();
// 2개 이상의 요소 노드목록 반환.
var listEls = ulEls.querySelectorAll('li.item');
// console.log(listEls);
// 해당 요소의바로 아래 항렬에 위치한 자식요소들을 노드 목록 반환.
// children
listEls = ulEls.children; // (요소들만 반환)
console.log(listEls);

// childNodes
var listNodes = ulEls.childNodes; // (공백이 있다면 공백도 Node로 인식)
console.log(listNodes);

// classList
// console.log((listEls[1].classList));
// console.log(listEls[2].classList.contains('size')); // false
// console.log(listEls[2].classList.contains('item')); // true

// classList.add('클래스명); // 클래스 명 추가.
// classList.remove('클래스명); // 클래스 명 삭제.
// if(!listEls[2].classList.contains('size')) {
//     // listEls[2].classList.add('size');
// }
// if(listEls[2].classList.contains('item')){
//     listEls[2].classList.remove('item');
// }

// classList.toggle(); // 클래스 명을 추가하거나 삭제하거나.
// 코드가 처음 실행될 때, add()의 기능.
// 코드가 두 번째 실행될 때, remove()의 기능.
// .... 세 ...., add();
// .... 네 ...., remove();

listEls[0].classList.toggle('red'); //add(); | move();

listEls[0].classList.toggle('red', true); //add();
listEls[0].classList.toggle('red', false); //remove();

console.log(h1TitleEl.id); //요소 노도의 id 값을 반환.
console.log(h1TitleEl.className); //요소 노드의 class값을 반환.

// firstChild
// firstElementChild
// lastChild
// lastElementChild
console.log(ulEls.firstChild); //노드 포함. (첫 번째 노드 항목)요소간의 사에에 공백이 있는 경우, Text " "
console.log(ulEls.firstElementChild); //요소 노드만 반환 (첫 번째 요소 노드 항목)
console.log(ulEls.lastChild); // 마지막 노드 항목 (첫 번째 요소 노드 항목)
console.log(ulEls.lastElementChild); // 마지막 요소 노드(자식 요소 노드)

console.log(listEls[listEls.length -1].innerText); // get
console.log(listEls[listEls.length -1].innerHTML); //
console.log(listEls[listEls.length -1].style); // 요소의 스타일 반환.
console.log(listEls[listEls.length -1].color); 
console.log(listEls[listEls.length -1].backgroundColor); 

listEls[listEls.length - 1].innerText = "new item 3";
listEls[listEls.length - 1].innerHTML = "<span><b>new item 3</b></span>";
listEls[listEls.length - 1].style.backgroundColor = 'gold';
listEls[listEls.length - 1].style.color = 'red';
listEls[listEls.length - 1].style.width = 800 + 'px';

// addEventListener();
// removeEventListner();
console.clear();
/* 
DOM Event.
마우스, 키보드, 센서, ... 등의 사용자 조작을 했을 때 발생.
*/
// 요소 노드에 이벤트 추가 / 제거.
var aEl = document.querySelector("a.link");
/* 
aEl.addEventListener('click', function(e){
    e.preventDefault();
    // console.log(e);
    // console.log('a tag click');
});
 */
// var onClickA = function(e){
// }

// aEl.addEventListener('click', onClickA(evt));- x
aEl.addEventListener('click', onClickA); // - o
// aEl.removeEventListener('click', onClickA); //요소 노드에 할당된 핸들러를 제거.
// aEl.addEventListener('click', onClickA);

// 이벤트 핸들러 함수의 정의
var id = 1;
function onClickA(e){
    e.preventDefault();
    console.log('a tag click');
    // ulEls.style.fontSize = 40 + 'px';
    // ulEls.style.lineHeight = 60 + 'px';
    // ulEls.style.backgroundColor = '#000';
    // ulEls.style.color = '#fff';

    // var newItemEl = document.createElement('li');
    // console.log(newItemEl);
    // newItemEl.classList.add('item');
    // newItemEl.innerText = 'new item' + id;
    // newItemEl.style.padding = 50 +'px';
    // ulEls.appendChild(newItemEl); // ul 의 마지막 부분에 li 요소 추가
    // // ulEls.removeChild(listEls[0]); // ul 의 자식 요소 노드를 삭제.
    // ulEls.removeChild(listEls[1]);
    // id++;

    var url = aEl.getAttribute('href');
    // window.open(url, '새로운 윈도우');
    // location.href = url;
    var placeholder = userIdEl.getAttribute('placeholder');
    // console.log(placeholder);
    // userIdEl.setAttribute('placeholder', '새로운 아이디를 입력해주세요.');
    // console.log(userIdEl.hasAttributes()); // true

    var articleEl = document.getElementsByTagName('article')[0];
    // console.log(articleEl.hasAttributes()); // false

    // userIdEl.removeAttribute('placeholder');
    // placeholder = "" > 이렇게 남아있는 상태가 아님.
    // 속성 목록 자체를 삭제.

    // userIdEl.setAttribute('value', '아이디'); // 문서 상에서 변경.
    // userIdEl.value = 'value 아이디 지정'; // 요소 상에서 현재의 값으로 변경 > 이걸 더 많이 씀.***

    var cloneItemEl = listEls[0].cloneNode(); // 노드 복제
    // console.log(cloneItemEl); 
    // cloneItemEl.innerText ='new Item';

    ulEls.insertBefore(cloneItemEl, listEls[listEls.length - 1]);
    // el.insertBefore(el1, el2);
    // el의 내부에(자식노드)에 el1(새로운 요소)가 el2의 앞쪽에 위치되어 추가.
}

// appendChild();
// removeChild();

// getAttribute();
// hasAttributes();
// removeAttribute();
// setAttribute();

// insertBefore();
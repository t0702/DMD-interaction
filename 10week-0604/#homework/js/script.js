/*
Quest.
1. 연산자(+, -, *, /, %) 버튼 클릭 시 해당 연산 기호에 따라 산술 연산되도록 합니다.
2. 초기값 0으로 시작하여 1(순서)의 연산이 진행될 때마다 현재 선택되어 있는 radio 타입 input 요소의 숫자값을 피연산자로 하여 연산 처리 가능하도록 구현합니다.
3. 연산된 결과는 result 아이디를 가진 노드 요소에 값을 출력합니다.
4. 초기화 버튼을 클릭시 숫자를 0으로 초기화합니다.
*/
// Answer.

// var plus = document.getElementById('btn-plus');
// var minus = document.getElementById('btn-minus');
// var multiple = document.getElementById('btn-multiple');
// var divide = document.getElementById('btn-divide');
// var percent = document.getElementById('btn-percent');
// var reset = document.getElementById('btn-reset');
// var radio = document.querySelectorAll('input[name="select_number"]');
// var resultDiv = document.getElementById('result');
// var result = 0;

// plus.addEventListener('click', onPlus);
// function onPlus(e){
//     for(var i = 0; i < radio.length; i++){
//         if(radio[i].checked){
//             result += parseInt(radio[i].value);
//         }
//     }
//     resultDiv.innerText = result;
// }

// minus.addEventListener('click', onMinus);
// function onMinus(e){
//     for(var i = 0; i < radio.length; i++){
//         if(radio[i].checked){
//             result -= parseInt(radio[i].value);
//         }
//     }
//     resultDiv.innerText = result;
// }

// multiple.addEventListener('click', onMultiple);
// function onMultiple(e){
//     for(var i = 0; i < radio.length; i++){
//         if(radio[i].checked){
//             result *= parseInt(radio[i].value);
//         }
//     }
//     resultDiv.innerText = result;
// }

// divide.addEventListener('click', onDivide);
// function onDivide(e){
//     for(var i = 0; i < radio.length; i++){
//         if(radio[i].checked){
//             result /= parseInt(radio[i].value);
//         }
//     }
//     resultDiv.innerText = result;
// }

// percent.addEventListener('click', onPercent);
// function onPercent(e){
//     for(var i = 0; i < radio.length; i++){
//         if(radio[i].checked){
//             result %= parseInt(radio[i].value);
//         }
//     }
//     resultDiv.innerText = result;
// }

// reset.addEventListener('click', onReset);
// function onReset(e){
//     result = 0;
//     resultDiv.innerText = result;
// }

var result = 0;
var resultEl = document.querySelector('#result');
var utilEl = document.querySelector('#util');
var btnEls = utilEl.querySelectorAll('button');
var selectNumbersEl = document.querySelector('#select-numbers');
var radioEls = selectNumbersEl.querySelectorAll('[name=select_number]');
var value = null;

for(var i = 0; i < radioEls.length; i++){
    if(radioEls[i].check){
        value = parseInt(radioEls[i].value, 10);
    }
    // console.log(i, radioEls[i].checked);
}

function onClickBtn(e){
    e.preventDefault();
    // 클릭된 버튼들을 구분
    // 1. id 에 따라서 구분
    var el = e.currentTarget, id = el.id, type= id.replace('btn-', '');
    // String.replace('','');
    // 문자열의 치환.
    // console.log('abcdef'.replace('abc','___'));
    // console.log('abcdef'.replace('abc',''));
    // console.log(type); // 공통된 문자열을 삭제. btn-plus -> plus

    if(type === 'plus'){
        result = result + value;
    }else if(type === 'minus'){
        result = result - value;
    }else if(type === 'multiple'){
        result = result * value;
    }else if(type === 'divide'){
        result = result / value;
    }else if(type === 'percent'){
        result = result % value;
    }else if(type === 'reset'){
            result = 0;
    }
/*
    // 2. innterText 의 값으루구분
    type = el.innterText;
    if(type === '+'){
    }else if(type === '-'){
    }else if(type === '*'){
    }else if(type === '/'){
    }else if(type === '%'){
    }else{
    }
    */
    resultEl.innerText = result;
}
for(var i = 0; i < btnEls.length; i++){
    btnEls[i].addEventListener('click', onClickBtn);
}

function onChangeRadio(){
    // console.log('change');
    var el = e.currentTarget;
    value = parseInt(el.value, 10);
    // console.log(el.value);
}

for(var i = 0; i <radioEls.length; i++){
    radioEls[i]. addEventListener('change', onChangeRadio);
}
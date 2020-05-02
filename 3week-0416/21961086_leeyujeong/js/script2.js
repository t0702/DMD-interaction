console.log('외부 JavaScript2가 로드되었습니다.');

/*
variable : 변수

변수 선언
형식
var variable; //선언만 되어 있고 값이 없는 undefined 상태
console.log(variable); //undefined
variable = "value"; //변수에 값(문자열 "value")을 대입
console.log(variable); //"value"

var variable2 = "value"; //선언과 값의 대입을 동시에
console.log(variable2);

var num1 = 1;
var num2 = 2;
var str1 = '안녕하세요';
var str2 = '반갑습니다';

var a = 1;
var b = 10;
console.log(a + b); // 11
a = 100; // 변수를 재활용.
console.log(a + b); // 110
a = a + 200; // 100 + 200 = 300
console.log(a + b); // 300 + 10 = 310
a += 300; // 300 + 300 = 600
console.log(a + b); // 600 + 10 = 610
a -= 200; // 600 - 200 = 400
console.log(a + b); // 400 + 10 = 410

var a = 'Hello';
var b = 'World';
console.log(a + b); // "HelloWorld"
a += " "; // "Hello "
console.log(a + b); // "Hello World"
*/


/*
* 변수의 응용 *
// 100에 10을 더한 후, 10으로 나누고, 10으로 뺀 후, 10을 곱한다.
var a = 100;
var b = 10;
var sum = ((a + b) / b - b) * b;
console.log('결과값 : ' + sum);

// 200에 20을 더한 후, 20으로 나누고, 20으로 뺀 후, 20을 곱한다.
var a = 200;
var b = 20;
var sum = ((a + b) / b - b) * b;
console.log('결과값 : ' + sum);


// 300에 20을 더한 후, 10으로 나누고, 30으로 뺀 후, 40을 곱한다.
var a = 300, b = 20, c = 10, d = 30, e = 40;
var sum = ((a + b) / c - d) * e;
console.log(`결과값 : ${sum}`);

// 10000에 40을 더한 후, 2으로 나누고, 400으로 뺀 후, 6을 곱한다. (값이 달라질 경우, 유지보수. 용이하다.)
a = 10000;
b = 40;
c = 2;
d = 400;
e = 6;
var sum = ((a + b) / c - d) * e;
console.log(`결과값 : ${sum}`);
*/


/*
* Data Type : 데이터 타입 *

- Number > 숫자
- String > 문자열
- Boolean > 참 /거짓
- undefined > 값이 정의되지 않은 상태
- null > 값은 정의되었지만 비어있는 상태.
- Object > 객체 [], {} ...
- function 함수. > 기능을 만드는 박스.
- NaN > 수식이 성립되지 않은 상태

typeof - 데이터의 타입을 찾는 방법
console.log(typeof 100); //number
console.log(typeof '안녕하세요'); //string
console.log(typeof true); //boolean
console.log(typeof false); //boolean
*/


/* 
* 비교 연산자 *
+, -, *, /, %
값과 값을 비교하기 위한 연산자.
Boolean 참 | 거짓 | = true | false 으로 값이 변환

==, >, <, >=, <=
=>은 다른 기능을 하는 명령. 구분!

// == 동등 연산자
var a = 1;
var b = 1;
console.log(a == b); //1 == 1 true

// > 초과 연산자
a = 3;
b = -1;
console.log(a > b); //3 > 1 true

// < 미만 연산자
a = 3;
b = -1;
console.log(a < b); //3 < 1 false
a = -5;
b = 0;
console.log(a < b); //-5 < 0 true

// >= 이상 연산자
// <= 이하 연산자
a = 2;
b = 2;
console.log(a >= b); //2 >= 2 true
a = 3;
b = 2;
console.log(a >= b); //3 >= 2 true

a = 2;
b = 2;
console.log(a <= b); //2 <= true
a = 3;
b = 2;
console.log(a <= b); //3 <=2 false

// 문자열과 문자열을 비교
// 동등연산자 == 
var a = 'Hello';
var b = 'World'
console.log(a == b); //"Hello" == "World" false
a = 'World'
console.log(a == b); //Hello == World true
a = 1;
b = '1'
console.log(a == b); //1 == '1' true
//동등 연산자는 숫자 타입을 문자열과 비교하면 문자열로 인식.

// 일치 연산자
//=== 엄격하게 데이터 타입까지 구분해서 비교. *** 
console.log(a === b); //1 === '1' false
console.log(true == 1); //true
console.log(true === 1); //false

// 부등(부정) 연산자
// !=, !==
var a = 1;
var b = 1;
console.log(a != b); //1 != 1 false
console.log(a == b); //1 == 1 true
a = 2;
console.log(a != b); //2 != 1 true
console.log(a == b); //2 == 1 false
var a = 'a';
var b = 'a';
console.log(a != b); //'a' != 'a' false
var a = 'b';
console.log(a != b); //'b != 'a' true
a = 1;
b = '2';
console.log(a != b); // 1 != '2' true
console.log(a !== b); // 1 !== '2' true
*/


/* 
* Object 객체 *
색인이 포함된 데이터들의 집합

var _obj = {}; //새로운 객체 생성
_obj = {
    key1 : 'value1',
    key2 : 'value2',
    "key3" : 300
}
console.log(_obj);
console.log(_obj.key1); //value1 각 항목의 값 찾기 
console.log(_obj['key2']); // value2 위와 동일
console.log(typeof _obj.key2); //string
console.log(typeof _obj.key3); //number
*/


/* 
* Array 배열 객체 *
var _arr = []; //새로운 배열 생성
_arr = [1, 2, "3", "안녕하세요", null, true];
console.log(_arr);
//색인이 없고 순서로 찾을 수 있다.
console.log(_arr[0]); //1
console.log(_arr[4]); //null
console.log(_arr.length); //배열의 전체 길이 (데이터 갯수)6
console.log(_arr.length -1 ); //배열 객체의 마지막에 해당하는 값.
*/


/* 
* if 조건문 *
비교, 동등, 일치, 부등 연산자 > 조건을 확인하기 위한 비교

if(condition) { //해당하는 조건이 true 일 때
    //code 실행
} else if (condition){ //true
    //code 실행
} else {
    // 모든 조건이 성립되지 않을 때
    // code가 실행
}

var a = 10;
var b = 5;
var c;
console.log(typeof c); //undefined
if(typeof c === 'undefined'){ //true
    c = a * b; //50
}else{ //false
    c = a + b; //15
}
console.log(c);

c = 100;
console.log(typeof c); //number
if(typeof c === 'undefined'){
    c = a * b;
}else{
    c = a + b; 
}
console.log(c);
*/
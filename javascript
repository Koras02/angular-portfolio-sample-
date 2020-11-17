자바스크립트 - 객체(Object)기반 프로그래밍 언어
객체(Object) - 메모리 공간을 차지하는 모든 것을 객체로 봄 

변수 
데이터 유형 
연산자 
제어문 - 조건문 / 반복문 / 함수 
객체

 
객체,매서드();
객체 속성 = '값',

객체
1)내장객체(bulit-in Object) 
-자바스크립트 엔진에 내장되어 있는 객체 
-문자 String/ 날짜 Date/ 배열 Array / 수학 Math / 숫자 Number / 
논리 Boolean / 정규표현객체 / 함수....

내장 객체 생성하기 
var 참조변수 = new 생성함수);

var webD = new Array(); --> 배열객체 생성 



2)브라우저 객체 모델(Browser Object Model
:BOM)
- window / screen / location / history / navigator...


3)문서 객체모델(Document Object Model : DOM )   
-html 문서구조 
-html문서의 요소를 제어하기 위해 엡브라우저에 지원됨 


-요소 노드 element node:html문서를 이루고 있는 노드 
-텍스트 노드 text node :웹문서글 
-속성 노드 attribute node:속성





객체 생성하기 
var 참조변수=new Object();

//객체 속성 정의
참조변수.속성명='값'

//객체 변수 
참조변수.매서드=function(){
        실행문;
	}
var 참조변수=new Object();

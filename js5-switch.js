// 제어문 - 조건문 : switch 문

let luckyNum = '20'; /* (`행운번호를 입력하세요`); */


/* switch 문 : if/else 문 보다 분기점을 간결하게 표현
if 문의 경우 if, else 를 이용해 분기점을 표현했다.
switch 문의 경우 case 표현식 : 이 하나의 if, else 문이 되어
평가한 값과 case 라벨의 값(표현식의 값) 이 일치하면
: 뒤에 실행문을 실시하고 아니면 일치하는 라벨의 값을 찾을 때까지 다음 case 라벨로 넘어간다. 그리고 마지막 default 까지 가도 발견하지 못하면 아무것도 하지 않는다.

단, 라벨의 값이 일치해도 break 를 써주지 않으면 식이 종료가 되지 않아 break, return 을 만나거나 switch 문의 끝을 만날 때까지 다음 식의 실행문도 함께 출력된다. 이것을 폴스루(fall through)라고 함.

defalut 문의 실행문은 어떤 case 라벨의 값도 해당되지 않을 때 마지막으로 실행되는 문장이다. 따라서 없으면 아무것도 출력되지 않는다. 어느 위치에 있어도 상관이 없지만 되도록이면 마지막에 적도록.
*/
switch (luckyNum) {
    case '10': console.log(`당첨! 냉장고`);
        break;
    case '20': console.log(`당첨! 아이패드`);
        break;
    case '30': console.log(`당첨! TV`);
        break;
    default: console.log(`꽝 다음기회에`);
}

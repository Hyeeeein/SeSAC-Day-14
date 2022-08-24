// 반복문 - while 문 : 조건만 맞으면 일정한 처리를 계속 반복함
// 사용법 : while ( 조건식 ) { 문장 }
/* 
while 문을 실행하면 가장 먼저 조건식을 평가, 그 결과가 false 면 빠져 나와 다음 처리로 이동한다. 
true 면 문장을 실행하고 다시 한번 while 문의 시작 부분으로 돌아가 조건식을 평가한다.
즉, while 문의 조건식은 반복 조건임.
반복문 안에 여러 문장을 실행하려면 {블록문}으로 만든다.
while 문 안에는 break, continue 문 사용 가능 : break 는 빠져나옴, continue 는 while 문 시작으로 돌아감
*/

// while 문
k = 5;
while (k <= 10) {
    console.log(`${k}문장반복출력`);
    k++;
} // 5~10 까지 출력


// while 문 222p 예제 다시 풀이
function repeat(n) {
    let a = 2, b = 2;
    while (b < n) {
        console.log(`b=${b}, a=${a}`); // 과정 모두 보여줌
        a += (++b);
    }
    console.log(`b=${b}, a=${a}`); // 최종 값만 보여줌
    return a;
}
repeat(6);
/* 
b=2, a=2 -> b 에 2 들어갔지만 ++b 이기 때문에 결국 2+3 됨
b=3, a=5 -> b 에 3 들어갔지만 ++b 이기 때문에 결국 5+4 됨
b=4, a=9 -> b 에 4 들어갔지만 ++b 이기 때문에 결국 9+5 됨
b=5, a=14 -> b 에 5 들어갔지만 ++b 이기 때문에 결국 14+6 됨
b=6, a=20 -> b 가 6 이라서 문장은 성립되지 않고 전 문장에서 계산된 20 return
*/


// do/while 문 : 반복해서 실행할지 마지막 부분에서 판단
// 사용법 : do 문장 while(조건식);
/* 
while 문에서는 조건식을 먼저 평가해 반복해서 실행할지 시작 부분에서 판단하지만 do/while 문은 문장을 먼저 실행하고 조건식을 평가해 반복해서 실행할지 마지막 부분에서 판단한다.

세미콜론 반드시 붙일 것
문장을 먼저 실행하고 조건식을 평가한다. 평가 결과 false 면 do/while 문을 빠져 나와 다음 처리로 이동한다. 평가 결과 true 면 반복문의 시작 부분으로 돌아간다.
따라서 while 문 안에 있는 문장은 한번도 실행되지 않을 수 있지만 do/while 문 안의 문장은 반드시 한번 이상 실행됨
break, continue 문 사용 가능

*/


let i = 1;
while (i <= 10) {
    console.log(`문장반복출력 ${i}`);
    i++;
} // while 문

let o = 1;
do {
    console.log(`문장반복출력 ${o}`);
    o++;
} while (o <= 10)
// do/while 문


// while 문 안의 if : 1~50 사이 2의 배수인 동시에 7의 배수인 i
let l = 1;

while (l <= 50) {
    if (l % 2 === 0 && l % 7 === 0) console.log(l)
    l++;
}
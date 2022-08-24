// 반복문 - for 문 : 소괄호 안에 한번에 작성
// 사용법 : for ( 초기화식 ; 조건식 ; 증감식(반복식) ;) { 실행문 }
/* 
초기화(변수설정)를 해주고 조건식을 평가한다. 조건식이 false 면 for 문을 빠져 나와 다음 처리로 이동하고 true 면 실행문을 실행하고 반복식을 실행한다. 그리고 다시 조건식이 false 가 나올 때까지 조건식 - 실행문 - 반복식을 반복한다.
순서는 초기화 - 조건식 - 실행문 - 반복식 - 조건식 - 실행문 - 반복식 -..
세미콜론 반드시 붙일 것
break, continue 문 사용 가능
조건식을 생략하면 끝없이 반복하겠다는 뜻
*/


for (let a = 1; a < 5; a++) {
    console.log(a)
} // 1 2 3 4


// 점프문 - break 문
for (let i = 1; i < 10; i++) {
    if (i === 5) {
        break;
    } // i 가 5와 같으면 break (= 반복 끝)
    console.log(`${i}x2=${i * 2}`)
    /* console.log(i+'x2'+(i*2)) -> 다른 표기법 */
} // 구구단 2단 4까지 


// for 문에 for 문 중첩 ( \t 는 들여쓰기 )
for (let dan = 2; dan < 5; dan++) {
    console.log(`${dan}단출력`) // 2,3,4단 출력

    for (let num = 1; num < 10; num++) {
        console.log(`\t${num}x${dan}=${num * dan}`)
    }
} // 2단출력 1x2=2~ 끝나면 3단출력 1x3=3~ 끝나면 4단출력 1x4=4~



// 점프문 - continue 문
for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // true 즉, 짝수면 반복문을 이어서 실행
    }
    console.log(`2x${i}=${i * 2}`)
} //2x1=2 , 2x3=6 , ... , 2x9=18
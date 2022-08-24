// 삼항연산자 = 조건연산자 
// 조건식(표현식) ? 참일경우 : 거짓인경우

// a 가 2 와 나눈 나머지가 0 과 같을 때 ? 참일 경우 짝수 출력 : 거짓일 경우 홀수 출력
let a = 9;
let parity = (a % 2 == 0) ? '짝수' : '홀수';
console.log(parity)



// let num % 2 === 0 ? console.log('짝수') : console.log('홀수');
// 위 문장을 if/else 문을 활용해 작성
let num = 100;
if (num % 2 === 0) {
    console.log(`짝수`)
} else {
    console.log(`홀수`)
}
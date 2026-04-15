function solution(left, right) {
    let total = 0;

    for (let i = left; i <= right; i++) {
    let count = 0;
    
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            count++; 
        }
    }

    if (count % 2 === 0) {
            total += i;
        } else {
            total -= i;
        }
    }
    
    return total;
}

/**
* 문제 이해
* 매개변수 left, right 중 left부터 right까지의 모든 수 중 약수의 개수가 짝수인 수는 덧셈, 홀수인 수는 뺄셈한 뒤 리턴
*/

/**
* 문제 풀이
* for문 사용해서 1부터 i까지의 약수 찾기
* 나누어 떨어지면 count++
* if문 사용해서 약수의 개수가 짝수인지 홀수인지 판별
*/

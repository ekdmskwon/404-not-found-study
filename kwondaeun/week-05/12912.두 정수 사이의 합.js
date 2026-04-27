function solution(a, b) {
    let sum = 0;
    const start = Math.min(a, b);
    const end = Math.max(a, b);

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}

/**
 * 문제 이해
 * 매개변수 정수 a와 b 사이에 속한 모든 정수의 합을 반환
 */

/**
 * 문제 풀이
 * 1) a, b 중 작은 값부터 큰 값까지 범위 생성
 * 2) for문 사용해서 범위의 모든 수를 더해서 반환
 */

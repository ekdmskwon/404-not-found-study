function solution(numbers) {

  let sum = 0;

  for (let i = 0; i <= 9; i++){
    if (!numbers.includes(i)){
      sum += i;
    }
  }

  return sum;
}

/**
 * 문제 이해
 * 정수 배열 numbers에서 찾을 수 없는 0~9까지의 숫자를 모두 찾아서 더한 후 반환
 * 1 <= numbers <= 9
 * 모든 원소는 서로 다름
 */

/**
 * 문제 풀이
 * sort 사용해서 배열 numbers 오름차순 정렬
 * for문으로 0 ~ 9번 순회하고, 없는 숫자를 sum 변수에 추가하고 더한 뒤 반환
 */
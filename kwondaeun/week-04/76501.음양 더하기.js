function solution(absolutes, signs) {
  let total = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      total += absolutes[i];
    } else {
      total -= absolutes[i];
    }
  }

  return total;
}

/**
 * 문제 이해
 * 정수 배열 absolutes과 그 배열의 부호 배열(불리언 배열)인 signs를 참고해서 정수들의 합을 반환
 */

/**
 * 문제 풀이
 * for문 내부에 if문을 사용해서 signs이 true, false인지에 따라 양수, 음수를 구분한 후
 * total에 넣고 반환
 */

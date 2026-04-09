function solution(n) {
  let result = "";

  let waterMelon = "수박";
  let water = "수";

  if (n % 2 === 0) {
    result = waterMelon.repeat(n / 2);
  } else {
    result = waterMelon.repeat(n / 2) + water;
  }

  return result;
}

/**
 * 문제 해석
 * 파라미터 n의 개수에 따라 "수","박" 반복하기
 */

/**
 * 문제 풀이
 * 짝수일 때: waterMelon n / 2번 반복 후 반환
 * 홀수일 때: waterMelon n / 2번 반복 + water 반환
 */

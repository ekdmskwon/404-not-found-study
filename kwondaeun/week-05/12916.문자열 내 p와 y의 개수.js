function solution(s) {
  let pCount = 0;
  let yCount = 0;
  const lower = s.toLowerCase();

  for (let i = 0; i < lower.length; i++) {
    if (lower[i] === "p") pCount++;
    if (lower[i] === "y") yCount++;
  }

  return pCount === yCount;
}

/**
 * 문제 이해
 * 매개변수 s에 p의 개수와 y의 개수를 비교해 같으면 true, 다르면 false 반환
 * 단, 모두 p,y 모두 없는 경우는 항상 true 반환
 * 개수를 비교할 때 대소문자 구분하지 않음
 */

/**
 * 문제 해석
 * toLowerCase() 사용해서 소문자로 변경
 * s를 순회하면서 p일 때와 y일 때의 개수를 올린 후 같은지 비교해서 반환
 */

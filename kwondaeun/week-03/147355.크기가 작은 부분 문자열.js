function solution(t, p) {
  let count = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    // t를 p.length의 길이만큼 나누기
    let sub = t.slice(i, i + p.length);

    // if문 사용해서 비교
    if (Number(sub) <= Number(p)) {
      count++;
    }
  }

  return count;
}

/**
 * 문제 이해
 * 숫자로 구성된 문자열 t, p
 * t에서 p와 갈이가 같은 것이 나오는 횟수를 반환
 */

/**
 * 문제 풀이
 * for문으로 t를 p의 개수만큼 반복
 * if문으로 t의 부분 문자열과 p 비교 (t <= p)
 * slice 사용
 * p.length로 t 부분 문자열과 길이 비교
 */

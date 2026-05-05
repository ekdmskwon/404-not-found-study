function solution(s) {
  const answer = [];
  const lastIndex = {};

  for (let i = 0; i < s.length; i += 1) {
    const ch = s[i];

    if (lastIndex[ch] === undefined) {
      answer.push(-1);
    } else {
      answer.push(i - lastIndex[ch]);
    }

    lastIndex[ch] = i;
  }

  return answer;
}

/**
 * 문제 이해
 * 문자열 s의 각 위치마다 자신보다 앞에 나오고, 자신과 가장 가까운 곳에 있는 같은 글자가 어디있는지 반환
 */

/**
 * 문제 풀이
 * 각 문자의 마지막 등장 위치를 기록해 두고,
 * 현재 인덱스에서 이전 인덱스를 빼서 거리 구하기
 */
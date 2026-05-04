/**
 * 풀이 과정
 * 1. 알파벳을 담은 배열을 선언
 * 2. 각 인덱스만큼 이동하여 문자열을 재생성
 */

function solution(s, n) {
  const tempS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const tempB = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (tempS.includes(s[i])) {
      let index = (tempS.indexOf(s[i]) + n) % 26;
      answer += tempS[index];
    } else if (tempB.includes(s[i])) {
      let index = (tempB.indexOf(s[i]) + n) % 26;
      answer += tempB[index];
    } else {
      answer += s[i];
    }
  }

  return answer;
}

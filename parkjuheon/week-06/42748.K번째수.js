// 문제: K번째 수
// 레벨: Level 1
// 문제 간략 설명: 배열의 특정 구간을 잘라 정렬한 뒤, 원하는 순서의 값을 추출하는 문제
/*
풀이:
 1. commands를 순회하며 시작 인덱스, 끝 인덱스, 찾을 위치를 꺼냄
 2. slice()로 배열을 자르고 sort()로 오름차순 정렬
 3. 정렬된 배열에서 k번째 값을 추출해 result 배열에 저장하고 최종 결과를 반환
*/

function solution(array, commands) {
  const result = [];

  for (let i = 0; i < commands.length; i++) {
    const sliceArr = array.slice(commands[i][0] - 1, commands[i][1]);
    sliceArr.sort((a, b) => a - b);
    result.push(sliceArr[commands[i][2] - 1]);
  }
  return result;
}

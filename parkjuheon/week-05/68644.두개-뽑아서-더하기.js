// 문제: 두 개 뽑아서 더하기
// 레벨: Level 1
// 문제 간략 설명: 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더한 다음 오름차순의 배열로 반환
/*
풀이:
 1. numbers 배열의 0번째 인덱스부터 반복
 2. i와 i+1인덱스부터 배열을 반복하며 더함
 3. 동일한 결과가 있으면 제외하여 결과 배열에 삽입
 4. 결과 배열을 오름차순으로 정렬한 결과 반환
*/

function solution(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (!result.includes(sum)) {
        result.push(sum);
      }
    }
  }

  return result.sort((a, b) => a - b);
}

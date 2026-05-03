function solution(food) {
  let result = "";
  for (let i = 1; i < food.length; i++) {
    if (food[i] % 2 == 1) {
      food[i] = food[i] - 1;
    }
    for (let j = 1; j <= food[i] / 2; j++) {
      result += `${i}`;
    }
  }
  let reversed = result.split("").reverse().join("");

  return result + "0" + reversed;
}

// --풀이
// for문을 통해 인덱스 1부터 끝까지 돌면서 요소가 홀수인 경우는 짝수로 바꿔주고 for문에서 요소의 반만큼
// 인덱스를 더한 문자열을 만들고 문자열을 뒤집은 변수 reversed를 구하고, 최종 result+"0"+reversed를 반환한다.

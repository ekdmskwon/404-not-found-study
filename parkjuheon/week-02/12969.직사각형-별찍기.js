// 문제: 직사각형 별찍기
// 레벨: Level 1
// 문제 간략 설명: 가로 a, 세로 b인 직사각형 형태로 별을 출력하는 문제
/*
풀이:
 1. 입력받은 a, b를 이용하여 별을 찍는 문자열을 만들어야 함
 2. 이중 for문을 이용하여 세로 b만큼 반복하면서, 가로 a만큼 별을 찍는 문자열을 만들어야 함
 3. 별을 찍는 문자열을 result 변수에 저장하고, 세로 b만큼 반복하면서 result에 별을 찍는 문자열과 줄바꿈 문자를 추가
*/

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let result = "";
  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
});

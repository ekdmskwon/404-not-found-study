/**
 * 풀이 과정
 * 1. 기존에 작성된 코드는 입력 받은 값을 쪼개서 a, b로 나눈 코드로
 *    문제에서 제시된 n, m은 a, b에 해당한다.
 * 2. 가로 길이만큼 '*'을 반복하여 한 줄을 만든다.
 * 3. 세로 길이만큼 반복 콘솔 출력한다.
 */

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  const line = "*".repeat(a);

  for (let i = 1; i <= b; i++) {
    console.log(line);
  }
});

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  const row = "*".repeat(a); 
  for (let i = 0; i < b; i++) {
    console.log(row); 
  }
});

/**
 * 문제 해석
 * 가로 길이 a, 세로 b줄인 직사각형 형태의 * 반환
 */

/**
 * 문제 풀이
 * *를 a번 반복해서 한 줄 만들기
 * for문 사용해서 b번 반복
 * repeat() 사용해서 문자열 n번 반복
 */
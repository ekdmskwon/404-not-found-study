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

    console.log(result);
    result = "";
  }
});


// --풀이
// 이중반복문을 써서 안에 for문에서 a만큼 별을 찍고 b번 반복한다.